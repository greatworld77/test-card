import "./globals.css";
import AppKitProvider from "../context/appkit";

export const metadata = {
  title: "Krypton Card NFT",
  description: "Krypton Card NFT Telegram Mini App"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppKitProvider>{children}</AppKitProvider>
      </body>
    </html>
  );
}
