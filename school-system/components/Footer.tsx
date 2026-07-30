export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-body">
        <ul className="left-panel list-inline mb-0 p-0">
          <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
          <li className="list-inline-item"><a href="#">Terms of Use</a></li>
        </ul>
        <div className="right-panel">
          ©{new Date().getFullYear()} School System, Adapted from Hope UI.
        </div>
      </div>
    </footer>
  );
}
