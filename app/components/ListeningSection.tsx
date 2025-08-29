interface Song {
  title: string;
  url: string;
}

interface ListeningSectionProps {
  isLoaded: boolean;
  songs: Song[];
  currentSongIndex: number;
}

export default function ListeningSection({
  isLoaded,
  songs,
  currentSongIndex,
}: ListeningSectionProps) {
  return (
    <section
      className={`mb-12 transition-all duration-1000 delay-325 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <h2 className="text-sm font-medium mb-2 text-foreground">listening to</h2>

      <div className="hidden sm:flex sm:flex-row sm:gap-6">
        {songs.map((song, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="text-lg animate-spin"
              style={{ animationDuration: `${2 + index * 0.5}s` }}
            >
              💿
            </span>
            <a
              href={song.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sm hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              {song.title}
            </a>
          </div>
        ))}
      </div>
      <div className="sm:hidden">
        <div className="flex items-center gap-2">
          <span
            className="text-lg animate-spin"
            style={{ animationDuration: "2s" }}
          >
            💿
          </span>
          <a
            href={songs[currentSongIndex].url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-sm hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            {songs[currentSongIndex].title}{" "}
          </a>
        </div>
      </div>
    </section>
  );
}
