import './globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "AICO Generate Collection By AIGC",
  description: "Showcase and discover remarkable developer projects",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-indigo min-h-screen">
          <Providers>
            <Navbar />
            {children}
            {/* <Footer /> */}
          </Providers>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;