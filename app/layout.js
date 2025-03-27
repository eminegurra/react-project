import "./globals.css";
import Navbar from "./components/Navbar";
import { DarkModeProvider } from "./context/DarkModeContext";
import { ChatProvider } from "./context/ChatContext";
import ChatWrapper from "./components/ChatWrapper"; // ✅ use wrapper instead

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DarkModeProvider>
          <ChatProvider>
            <Navbar />
            <main className="max-w-6xl mx-auto mt-6">{children}</main>
            <ChatWrapper /> {/* ✅ now this works in layout */}
          </ChatProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
