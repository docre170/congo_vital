import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <header className="  d-flex justify-content-between align-items-center p-3 bg-header shadow-sm" >
        <div className="d-flex align-items-center gap-2">
          <img src="/photos/logo.jpg" alt="Logo CongoVital" width="80" height="70" />
          <h1 className="m-0">CongoVital</h1>
        </div>

        <nav>
          <ul className="nav gap-3 text-white decoration-none">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/">
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/services">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/abonne">
                Abonne
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow-1">
        <Outlet />
      </main>

      <footer className="text-center p-3 bg-hero text-white mt-4">
        <p className="mb-0">© 2026 CongoVital. Tous droits reserves.</p>
      </footer>
    </div>
  )
}

export default Layout
