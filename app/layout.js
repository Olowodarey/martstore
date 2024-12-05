import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / MEGAMART",
    default: "welcome / MegaMart"
  },
  description: "luxurious shopping experience"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} antialiased`}>
        <Header />
        <div className="px-5 lg:px-10">
          <main className="max-w-7xl mx-auto ">{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
