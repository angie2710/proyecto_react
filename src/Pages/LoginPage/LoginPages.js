import Swal from 'sweetalert2';
import { auth, googleProvider } from '../../fire';
import { signInWithPopup } from 'firebase/auth';

function LoginPage() {
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "¡BIENVENIDO!",
          text: `Sesión iniciada con Google: ${user.email}`,
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          window.location.href = "/dashboard";
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire("Error", "No se pudo iniciar sesión con Google.", "error");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Iniciar Sesión</h3>

              <form id="loginForm">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="password" placeholder="Contraseña" required />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Ingresar</button>
                </div>
                <div className="mt-3 text-center">
                  <button type="button" className="btn btn-danger" onClick={handleGoogleLogin}>
                    Iniciar sesión con Google
                  </button>
                </div>
              </form>

              <div className="mt-3 text-center">
                <a href="/register">¿No tienes cuenta? Regístrate</a><br />
                <a href="/forgot">¿Olvidaste tu contraseña?</a><br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
