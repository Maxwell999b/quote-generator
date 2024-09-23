import { QuoteGenerator } from "@/components/quote-generator";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="flex min-h-screen flex-col items-center justify-center  bg-background text-foreground transition-colors duration-300">
        <h1 className="text-4xl font-bold mb-8 text-center"> Quote Generator</h1>
        <QuoteGenerator />
      </main>
    </ThemeProvider>
  );
}
