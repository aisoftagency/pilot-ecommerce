"use client";

import { SearchBar } from "./SearchBar";
import { UserActions } from "./UserActions";

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="text-2xl font-bold text-orange-500">amazon</div>
          <SearchBar />
          <UserActions />
        </div>
      </div>
    </header>
  );
} 