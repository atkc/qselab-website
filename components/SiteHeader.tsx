import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Quantum Systems Engineering Group home">
        <span className="wordmark-mark" aria-hidden="true">
          <img src="/images/brand/temp_logo.png" alt="" width="333" height="425" />
        </span>
        <span className="wordmark-name">
          Quantum Systems
          <br />
          Engineering Group
        </span>
      </Link>
      <a
        className="nus-lockup"
        href="https://cde.nus.edu.sg/ece/"
        target="_blank"
        rel="noreferrer"
        aria-label="NUS Electrical and Computer Engineering"
      >
        <img src="/images/brand/nus-logo.png" alt="National University of Singapore" width="768" height="545" />
      </a>
    </header>
  );
}
