// Pagina del blog con ejemplos de Bootstrap
// Pedro Rodriguez - IAW

export default function Home() {
  return (
    <div>
      {/* barra de navegacion */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Mi Blog</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Sobre mi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Enlace</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>

      {/* titulo principal */}
      <h2 className="text-center text-bg-primary m-2 p-2">
        Bootstrap 5 con Next.js
      </h2>

      {/* seccion de componentes */}
      <div className="container-fluid m-2 border border-success text-center">
        <h4>Componentes</h4>
        <div className="row m-2">
          <div className="col-sm">Primer Componente</div>
          <div className="col-sm">Segundo Componente</div>
          <div className="col-sm">Tercer Componente</div>
        </div>
      </div>

      {/* seccion de botones */}
      <div className="container-fluid m-2 border text-center">
        <h4>Botones</h4>
        <div className="row m-2 justify-content-between">
          <div className="col-sm-auto">
            <button type="button" className="btn btn-primary">Principal</button>
          </div>
          <div className="col-sm-auto">
            <button type="button" className="btn btn-secondary">Secundario</button>
          </div>
          <div className="col-sm-auto">
            <button type="button" className="btn btn-success">Exito</button>
          </div>
          <div className="col-sm-auto">
            <button type="button" className="btn btn-danger">Peligro</button>
          </div>
        </div>
      </div>
    </div>
  );
}