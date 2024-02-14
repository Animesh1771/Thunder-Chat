import { Inter } from "next/font/google";
import ToasterContext from "@components/ToasterContext";
import "../globals.css";
import Provider from "@components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth Thunder chat",
  description: "Built a next 14 chat app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-purple-1`}>
        <Provider>
          <ToasterContext />
          {children}\
        </Provider>
      </body>
    </html>
  );
}
