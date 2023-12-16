import HomePage from "./home-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Page() {
  return <HomePage />;
}
