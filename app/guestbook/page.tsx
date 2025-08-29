"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Moon, Sun, ArrowLeft } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { databases } from "@/lib/appwrite/client";

interface GuestbookEntry {
  $id: string;
  name: string;
  message: string;
  created_at: string;
}

export default function Guestbook() {
  const { theme, setTheme } = useTheme();
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    setIsLoading(true);
    try {
      const response = await databases.listDocuments(
        "68a4c60b003b1405e5c5",
        "entries"
      );
      setEntries(
        (response.documents || []).map((doc) => ({
          $id: doc.$id,
          name: doc.name,
          message: doc.message,
          created_at: doc.$createdAt,
        }))
      );
    } catch (error) {
      console.error("Error fetching entries:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    try {
      const response = await databases.createDocument(
        "68a4c60b003b1405e5c5",
        "entries",
        "unique()",
        {
          name: name.trim(),
          message: message.trim(),
        }
      );
      setEntries([
        {
          $id: response.$id,
          name: response.name,
          message: response.message,
          created_at: response.$createdAt,
        },
        ...entries,
      ]);
      setName("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting entry:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return "just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return `${Math.floor(diffInHours / 168)}w ago`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with theme toggle */}
      <header className="flex justify-between items-center p-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          back to portfolio
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="h-9 w-9"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </header>

      {/* Main content */}
      <main className="max-w-2xl mx-auto px-6 pb-16">
        <div className="mb-12">
          <h1 className="text-2xl font-normal mb-4 leading-relaxed">
            <span className="font-medium">guestbook</span>
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            leave a message, share your thoughts, or just say hello.
          </p>
        </div>

        {/* Sign guestbook form */}
        <section className="mb-12">
          <h2 className="text-sm font-medium mb-6 text-foreground">
            sign the guestbook
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-sm"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Textarea
                placeholder="your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="text-sm min-h-[100px] resize-none"
                required
                disabled={isSubmitting}
              />
            </div>
            <Button
              type="submit"
              className="text-sm h-9 px-4"
              disabled={!name.trim() || !message.trim() || isSubmitting}
            >
              {isSubmitting ? "signing..." : "sign guestbook"}
            </Button>
          </form>
        </section>

        {/* Guestbook entries */}
        <section>
          <h2 className="text-sm font-medium mb-6 text-foreground">
            messages ({isLoading ? "..." : entries.length})
          </h2>
          {isLoading ? (
            <div className="text-center text-muted-foreground">
              loading messages...
            </div>
          ) : (
            <div className="space-y-6">
              {entries.map((entry) => (
                <div key={entry.id} className="border-l-2 border-muted pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-sm">{entry.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {formatTimestamp(entry.created_at)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {entry.message}
                  </p>
                </div>
              ))}
              {entries.length === 0 && !isLoading && (
                <div className="text-center text-muted-foreground">
                  no messages yet. be the first to sign!
                </div>
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
