"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isWaitlistPage = pathname === "/waitlist";

  return (
    <>
      {!isWaitlistPage && <Header />}
      <main className="min-h-screen">{children}</main>
      {!isWaitlistPage && (
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made with 💗 by Hadi Baydoun</p>
          </div>
        </footer>
      )}
    </>
  );
}