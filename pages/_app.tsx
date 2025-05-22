import type { AppProps } from "next/app";
import { Zen_Antique_Soft } from "next/font/google";

import "@/styles/globals.css";

const zen = Zen_Antique_Soft({
  subsets: ["latin"],
  weight: ["400"],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={zen.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
