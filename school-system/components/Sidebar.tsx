import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="sidebar sidebar-default sidebar-white sidebar-base navs-rounded-all">
      <div className="sidebar-header d-flex align-items-center justify-content-start">
        <Link href="/" className="navbar-brand">
          <h4 className="logo-title">School System</h4>
        </Link>
        <div className="sidebar-toggle" data-toggle="sidebar" data-active="true">
          <i className="icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.25 12.2744L19.25 12.2744" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </i>
        </div>
      </div>
      <div className="sidebar-body pt-0 data-scrollbar">
        <div className="sidebar-list">
          <ul className="navbar-nav iq-main-menu" id="sidebar-menu">
            <li className="nav-item static-item">
              <a className="nav-link static-item disabled" href="#" tabIndex={-1}>
                <span className="default-icon">Home</span>
                <span className="mini-icon">-</span>
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/dashboard">
                <i className="icon">
                  <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-20">
                    <path opacity="0.4" d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z" fill="currentColor"></path>
                  </svg>
                </i>
                <span className="item-name">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/students">
                <i className="icon">
                  <span className="icon-20">S</span>
                </i>
                <span className="item-name">Students</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/teachers">
                <i className="icon">
                  <span className="icon-20">T</span>
                </i>
                <span className="item-name">Teachers</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/classes">
                <i className="icon">
                  <span className="icon-20">C</span>
                </i>
                <span className="item-name">Classes</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-footer"></div>
    </aside>
  );
}
