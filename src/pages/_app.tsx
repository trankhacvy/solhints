import "../styles/global.css";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AppLayout } from "@/components/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider enableSystem={true} attribute="class">
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </ThemeProvider>
);

export default MyApp;
