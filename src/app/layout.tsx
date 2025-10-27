import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Box from "@mui/material/Box";

export const metadata: Metadata = {
  title: "Portfolio Project",
  description: "Simple portfolip project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <AppRouterCacheProvider>
          <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
          >
            <Navbar />
            <Box flexGrow={1}>{children}</Box>
            <Footer />
          </Box>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
