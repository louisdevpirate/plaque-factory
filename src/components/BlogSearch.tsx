"use client";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";

type Props = {
  onSearch?: (query: string) => void;
};

export default function BlogSearch({ onSearch }: Props) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  }, [searchQuery, onSearch]);

  return (
    <div className="relative w-full max-w-md mx-auto mb-8">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="text"
        placeholder="Rechercher un article..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none bg-white focus:border-gray-800"
      />
    </div>
  );
}