import { Client, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("https://syd.cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
  .setProject("68a4c5170030f33227c4"); // Replace with your Appwrite project ID

export const databases = new Databases(client);
