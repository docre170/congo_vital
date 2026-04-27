function ServicesPage() {
  return (
    <section className="container text-center py-5">
      <h2 className="mb-4">Nos services</h2>

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
            <p>Soins de sante pour les meres et les bebes.</p>
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

export default ServicesPage
