import "@/styles/globals.css";
import CustomCursor from "@/components/CustomCursor";
import MobileWarning from "../components/MobileWarning";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Custom Cursor (GSAP animated) */}
      <CustomCursor />
      <MobileWarning />
      {/* Page Content */}
      <Component {...pageProps} />
    </>
  );
}