function ServicesPage() {
  return (
    <section className="container text-center py-5">
      <h2 className="mb-4">Nos services et ressources Médicales</h2>
      <p>
        Découvrez nos services de santé conçus pour répondre à vos besoins avec professionnalisme et compassion.
      </p>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card p-3 h-100">
            <h3>service de santé</h3>
            <img src="/photos/consultation_gen.jpg" className="card-img-top" alt="Vaccination" />
            <h3 className="mt-3">consultation_gen</h3>
            <p>Des consultations pour tous vos besoins de santé.</p>
            <button className="btn btn-success">En savoir plus</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 h-100">
            <img src="/photos/pediatrie.jpg" className="card-img-top" alt="Maternite" />
            <h3 className="mt-3">Pédiatrie</h3>
            <p>Soins spécialisés pour les enfants.</p>
            <button className="btn btn-success">En savoir plus</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 h-100">
            <img src="/photos/pharmacie.jpg" className="card-img-top" alt="Prevention" />
            <h3 className="mt-3">Pharmacie</h3>
            <p>Accès à une pharmacie et conseils pharmaceutiques.</p>
            <button className="btn btn-success">En savoir plus</button>
          </div>
        </div>
      </div>

      <div>
        <h3> boutique de santé</h3>
        <div className="col-md-4">
          <div className="card p-3 h-100">
            <img src="/photos/vaccination.jpg" className="card-img-top" alt="Prevention" />
            <h3 className="mt-3">Guide de vaccination</h3>
            <p>Protégez-vous et votre communauté grâce à la vaccination.</p>
            <button className="btn btn-success">Télecharger</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 h-100">
            <img src="/photos/prevention.jpg" className="card-img-top" alt="Prevention" />
            <h3 className="mt-3">Prévention paludique</h3>
            <p>Mesures pour éviter le paludisme..</p>
            <button className="btn btn-success">Télecharger</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 h-100">
            <img src="/photos/pediatrie.jpg" className="card-img-top" alt="Prevention" />
            <h3 className="mt-3">Santé infantile</h3>
            <p>Conseils pour la santé des tout-petits.</p>
            <button className="btn btn-success">Télecharger</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ServicesPage
