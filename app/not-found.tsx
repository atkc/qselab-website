import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="not-found section-shell">
        <p className="eyebrow">404</p>
        <h1>This signal is outside the scan.</h1>
        <p>The page may have moved, or the address may be incomplete.</p>
        <Link className="button button-dark" href="/">Return home</Link>
      </main>
    </>
  );
}
