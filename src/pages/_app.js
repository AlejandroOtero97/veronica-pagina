import "@/styles/globals.css";
import '../styles/colorTheme.css';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
