import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-neutral-50 via-blue-50 to-purple-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-850">
      <div className="w-full max-w-6xl px-4 lg:px-8 py-6 h-full flex flex-col">
        <Header />
        
        <div className="flex-1 mt-6 lg:mt-8 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 overflow-hidden">
          <ChatSection />
        </div>

        {/* Optional footer */}
        <footer className="mt-4 lg:mt-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
          <p>Built with ❤️ by LlamaIndex • Secure AI-powered conversations</p>
        </footer>
      </div>
    </main>
  );
}