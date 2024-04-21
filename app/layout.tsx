import Providers from "@/components/layout/providers";
import { Toaster } from "@/components/ui/toaster";
import "@uploadthing/react/styles.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { getSession } from "@/lib/auth-options";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"],weight: ["400", "500", "600", "700"]});
export const metadata: Metadata = {
  title: "AI Trainer",
  description: "Your dashboard for AI Trainer",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} overflow-hidden`}>
        <Providers session={session}>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
