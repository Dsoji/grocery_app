import { Stack } from "expo-router";
import "../../global.css";

const publishableey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

if (!publishableey) {
  throw new Error("Missing Clerk publishable key. Please add it to your .env file.");
}

export default function RootLayout() {
  return <Stack screenOptions={{headerShown: false}} />;
}
