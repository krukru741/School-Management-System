import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="nav navbar navbar-expand-lg navbar-light iq-navbar">
      <div className="container-fluid navbar-inner">
        <Link href="/" className="navbar-brand">
          <h4 className="logo-title">School System</h4>
        </Link>
        <div className="sidebar-toggle" data-toggle="sidebar" data-active="true">
          <i className="icon">
            <svg width="20px" className="icon-20" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
            </svg>
          </i>
        </div>
        <div className="input-group search-input">
          <span className="input-group-text" id="search-input">
            <svg className="icon-18" width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
              <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </span>
          <input type="search" className="form-control" placeholder="Search..." />
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <span className="mt-2 navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="mb-2 navbar-nav ms-auto align-items-center navbar-list mb-lg-0">
            <li className="nav-item dropdown">
              <a href="#" className="search-toggle nav-link" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="/images/avatars/01.png" className="img-fluid rounded-circle" alt="user" style={{ height: '30px', minWidth: '30px', width: '30px' }} />
                <span className="bg-primary"></span>
              </a>
              <div className="p-0 sub-drop dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
                <div className="m-0 border-0 shadow-none card">
                  <div className="p-0 ">
                    <ul className="p-0 list-group list-group-flush">
                      <li className="iq-sub-card list-group-item"><a className="p-0" href="#">Profile</a></li>
                      <li className="iq-sub-card list-group-item"><a className="p-0" href="#">Settings</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
