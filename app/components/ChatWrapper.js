"use client";
import dynamic from "next/dynamic";

const ChatWidget = dynamic(() => import("./ChatWidget"), {
  ssr: false,
});

export default function ChatWrapper() {
  return <ChatWidget />;
}
