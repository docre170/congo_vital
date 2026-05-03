import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <section className="container d-flex align-items-center justify-content-between py-5 gap-4 flex-wrap">
      <div>
        <h2>Notre mission</h2>
        <p>Informez-vous et accedez aux soins essentiels pour une meilleure sante.</p>
        <Link className="btn btn-success" to="/services">
          En savoir plus
        </Link>
      </div>
      <div>
        <img src="/photos/docteur.jpg" alt="Medecin" width="350" />
      </div>
      <div>
        <h2>Nos services</h2>
        <p>Decouvrez nos services de vaccination, de soins maternels et de prevention.</p>
        <Link className="btn btn-success" to="/services">
          En savoir plus
        </Link>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card p-3 h-100">
            <img src="/photos/vaccination.jpg" className="card-img-top" alt="Vaccination" />
            <h3 className="mt-3">Vaccination</h3>
            <p>Protegez-vous et votre communaute grace a la vaccination.</p>
            <button className="btn btn-success">En savoir plus</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 h-100">
            <img src="/photos/maternite.jpg" className="card-img-top" alt="Maternite" />
            <h3 className="mt-3">Maternite</h3>
            <p>Soins de sante pour les mères et les bébés.</p>
            <button className="btn btn-success">En savoir plus</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 h-100">
            <img src="/photos/prevention.jpg" className="card-img-top" alt="Prevention" />
            <h3 className="mt-3">Prevention</h3>
            <p>Protegez-vous contre les maladies grace a la prevention.</p>
            <button className="btn btn-success">En savoir plus</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
