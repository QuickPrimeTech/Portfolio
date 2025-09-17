// @/app/not-found.tsx

"use client";

import Link from "next/link";
import { ArrowLeft, Home, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-16">
      <div className="max-w-lg w-full text-center space-y-8">
        {/* Icon in gradient circle */}
        <div
          className={cn(
            "w-20 h-20 flex items-center justify-center mx-auto rounded-full text-white shadow-lg",
            "bg-gradient-to-tr from-purple-500 to-pink-500"
          )}
        >
          <SearchX className="w-10 h-10" />
        </div>

        {/* Title + Subtitle */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Sorry, we couldn’t find the page you’re looking for. Don’t worry —
            you can get back on track below.
          </p>
        </div>

        {/* Options */}
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <Card className="p-6 flex flex-col items-center text-center shadow-md border-none">
            <div
              className={cn(
                "w-14 h-14 flex items-center justify-center rounded-full mb-4 text-white shadow-lg",
                "bg-gradient-to-tr from-blue-500 to-indigo-600"
              )}
            >
              <ArrowLeft className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Go Back
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Return to the previous page you were on.
            </p>
            <Button variant="default" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" /> Previous Page
            </Button>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center shadow-md border-none">
            <div
              className={cn(
                "w-14 h-14 flex items-center justify-center rounded-full mb-4 text-white shadow-lg",
                "bg-gradient-to-tr from-emerald-500 to-teal-600"
              )}
            >
              <Home className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Back Home
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Head back to the homepage and start fresh.
            </p>
            <Button asChild>
              <Link href="/">
                <Home className="w-4 h-4 mr-2" /> Go to Homepage
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
