"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, RefreshCw } from "lucide-react";
import { categories } from "./categories";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), { ssr: false });

export function QuoteGenerator() {
  const [category, setCategory] = useState("happiness");
  const [quote, setQuote] = useState({ content: "", author: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const fetchQuote = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch(`/api/quote?category=${category}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data && data.length > 0) {
        setQuote({ content: data[0].quote, author: data[0].author });
      } else {
        setError("No quote found for the selected category.");
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
      setError("Failed to fetch quote. Please try again.");
    }
    setIsLoading(false);
  };

  if (!isMounted) {
    return null; // or spinner for loading
  }

  return (
    <Card className="w-full max-w-2xl bg-card text-card-foreground shadow-lg transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl font-bold">Random Quote</CardTitle>
        <ThemeToggle />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={fetchQuote} disabled={isLoading}>
            {isLoading ? <RefreshCw className="h-4 w-4 animate-spin" /> : "Generate Quote"}
          </Button>
        </div>
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {quote.content ? (
          <blockquote className="border-l-4 border-primary pl-4 italic">
            <p className="mb-2 text-lg">{quote.content}</p>
            <footer className="text-right text-sm">— {quote.author}</footer>
          </blockquote>
        ) : (
          <p className="text-center text-muted-foreground">
            Click &quot;Generate Quote&quot; to get a random quote in the selected category.
          </p>
        )}
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        Select a category and click &quot;Generate Quote&quot; to get a new quote.
      </CardFooter>
    </Card>
  );
}
