function RegisterPage(){
return(
    <div className="container d-flex justify-content-center pt-5">
    <div className="card shadow-sm" style={{ maxWidth: '500px', width: '100%' }}>
      <div className="card-body">
        <h1 className="text-center mb-4">Registro de Usuario</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" placeholder="Ingrese su Nombre" required />
          </div>

          <div className="mb-3">
            <label htmlFor="apellido" className="form-label">Apellido</label>
            <input type="text" className="form-control" id="apellido" placeholder="Ingrese su Apellido" required />
          </div>

          <div className="mb-3">
            <label htmlFor="fecha" className="form-label">Fecha de Nacimiento</label>
            <input type="date" className="form-control" id="fecha" required />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Ingrese su Contraseña"
              aria-describedby="passwordHelpBlock"
              required
            />
            <div id="passwordHelpBlock" className="form-text">
              Debe tener entre 8 y 20 caracteres.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="repeatPassword" className="form-label">Repita la Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="repeatPassword"
              placeholder="Repita su Contraseña"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Ingrese su Correo"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">Teléfono</label>
            <input
              type="tel"
              className="form-control"
              id="telefono"
              placeholder="Ingrese su Teléfono"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="sexo" className="form-label">Sexo</label>
            <select className="form-select" id="sexo" required>
              <option value="">Seleccione el Sexo</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="nacionalidad" className="form-label">Nacionalidad</label>
            <input
              type="text"
              className="form-control"
              id="nacionalidad"
              placeholder="Ingrese su Nacionalidad"
              required
            />
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">Enviar</button>
            <a href="/" className="btn btn-secondary text-white">Volver</a>
          </div>
        </form>
      </div>
    </div>
  </div>
);
}

export default RegisterPage;




