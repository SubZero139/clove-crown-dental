"use client";

import { useCallback } from "react";
import { MessageCircle } from "lucide-react";

export function ChatWidgetPlaceholder() {
  const handleClick = useCallback(() => {
    console.log("Chat widget placeholder clicked");
  }, []);

  return (
    <button
      type="button"
      className="fixed right-6 bottom-6 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-terracotta)] text-white shadow-lg transition-[transform,box-shadow] hover:scale-[1.03] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      aria-label="Open chat"
      onClick={handleClick}
    >
      <MessageCircle className="h-7 w-7" strokeWidth={1.75} aria-hidden />
    </button>
  );
}
