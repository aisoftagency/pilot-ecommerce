"use client";

import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MainContent />
    </div>
  );
}
