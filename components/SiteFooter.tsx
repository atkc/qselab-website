export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-kicker">Quantum Systems Engineering Group</p>
        <p>Electrical and Computer Engineering · National University of Singapore</p>
      </div>
      <div className="footer-links">
        <a href="mailto:tan.anthony@nus.edu.sg">tan.anthony@nus.edu.sg</a>
        <a href="https://cde.nus.edu.sg/ece/" target="_blank" rel="noreferrer">
          NUS ECE ↗
        </a>
      </div>
      <p className="footer-meta">© {new Date().getFullYear()} QSE Group</p>
    </footer>
  );
}
