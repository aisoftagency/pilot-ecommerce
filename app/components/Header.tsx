"use client";

import Link from "next/link";
import { SearchBar } from "./SearchBar";
import { UserActions } from "./UserActions";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors">
            amazon
          </Link>
          <SearchBar />
          <UserActions />
        </div>
      </div>
    </header>
  );
}
