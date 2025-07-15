import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import { auth, googleProvider, signInWithPopup } from "../../fire";
import './loginPage.css';
import { useState } from "react";
function LoginPage() {
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "¡Bienvenido!",
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
              <h3 className="card-title text-center mb-4"> Bienvenido</h3>

              <form id="loginForm">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Ingresa tu correo"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Contraseña"
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    Iniciar Sesion
                  </button>
                </div>
              </form>

              <hr />
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleGoogleLogin}
                >
                  Iniciar Sesión con Google
                </button>
                <div className="mt-3">
                  <a href="/register">¿No tienes cuenta? Regístrate</a>
                  <br />
                  <a href="/forgot">¿Olvidaste tu contraseña?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;