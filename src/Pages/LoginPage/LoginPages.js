function LoginPage(){

    return (
      <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Iniciar Sesión</h3>
  
              <form id="loginForm">
                <div class="mb-3">
                  <label for="email" class="form-label">Correo electrónico</label>
                  <input type="email" class="form-control" id="email" placeholder="Ingresa tu correo" required />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Contraseña</label>
                  <input type="password" class="form-control" id="password" placeholder="Contraseña" required />
                </div>
                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-primary">Ingresar</button>
                </div>
              </form>
  
              <div class="mt-3 text-center">
                <a href="html/login.html">¿No tienes cuenta? Regístrate</a><br />
                <a href="html/recuperar_contraseña.html">¿Olvidaste tu contraseña?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
  export default LoginPage;

