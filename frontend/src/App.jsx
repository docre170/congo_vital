function App() {
  return (
    <div>

      {/* HEADER */}
      <header className="d-flex justify-content-between align-items-center p-3 bg-light shadow-sm">
        <div className="d-flex align-items-center gap-2">
          <img src="/photos/logo.jpg" alt="Logo CongoVital" width="80" height="70" />
          <h1 className="m-0">CongoVital</h1>
        </div>

        <nav>
          <ul className="nav gap-3">
            <li className="nav-item"><a className="nav-link" href="#accueil">Accueil</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#actualites">Actualités</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item"><a className="nav-link" href="#abonne">Abonné</a></li>
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section id="accueil" className="container d-flex align-items-center justify-content-between py-5">
        
        <div>
          <h2>Notre mission</h2>
          <p>Informez-vous et accédez aux soins essentiels pour une meilleure santé</p>
          <a className="btn btn-primary" href="#services">En savoir plus</a>
        </div>

        <img src="/photos/docteur.jpg" alt="Médecin" width="350" />
      </section>

      {/* SERVICES */}
      <section id="services" className="container text-center py-5">
        
        <div className="row">

          <div className="col-md-4">
            <div className="card p-3">
              <img src="/photos/vaccination.jpg" className="card-img-top" alt="Vaccination" />
              <h3>Vaccination</h3>
              <p>Protégez-vous et votre communauté grâce à la vaccination</p>
              <button className="btn btn-success">En savoir plus</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <img src="/photos/maternite.jpg" className="card-img-top" alt="Maternité" />
              <h3>Maternité</h3>
              <p>Soins de santé pour les mères et les bébés</p>
              <button className="btn btn-success">En savoir plus</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <img src="/photos/prevention.jpg" className="card-img-top" alt="Prévention" />
              <h3>Prévention</h3>
              <p>Protégez-vous contre les maladies grâce à la prévention</p>
              <button className="btn btn-success">En savoir plus</button>
            </div>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center p-3 bg-dark text-white">
        <p>© 2026 CongoVital. Tous droits réservés.</p>
      </footer>

    </div>
  );
}

export default App;