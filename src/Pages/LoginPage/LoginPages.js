import { useState } from 'react';
import Swal from 'sweetalert2';
import { auth, googleProvider, db } from '../../firebase';
import { signInWithEmailAndPassword, fetchSignInMethodsForEmail, linkWithCredential, EmailAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import './LoginPage.css';
// import logo from '../../assets/brilla.png';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // LOGIN CON EMAIL/PASSWORD
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire("Campos vacíos", "Por favor llena todos los campos.", "warning");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Opcional: verificar si existe documento en Firestore
      const userDocRef = doc(db, 'usuarios', user.uid);
      const userSnap = await getDoc(userDocRef);

      if (userSnap.exists()) {
        const data = userSnap.data();
        if (data.estado === "Inactivo") {
          Swal.fire("Acceso denegado", "Tu cuenta está inactiva. Contacta al administrador.", "error");
          return;
        }
      }

      Swal.fire({
        title: "¡Bienvenido!",
        text: `Sesión iniciada como ${user.email}`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false
      }).then(() => {
        window.location.href = "/dashboard";
      });

    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Credenciales incorrectas o usuario no existe.", "error");
    }
  };

  // LOGIN CON GOOGLE
  const handleGoogleLogin = async () => {
    try {
      const googleResult = await signInWithPopup(auth, googleProvider);
      const user = googleResult.user;

      // Verificar si ya existía ese correo con otro método
      const signInMethods = await fetchSignInMethodsForEmail(auth, user.email);

      if (signInMethods.includes('password')) {
        // Si existe por password hay que vincularlo
        const password = await solicitarPassword();
        if (!password) {
          Swal.fire("Cancelado", "Operación cancelada.", "info");
          return;
        }

        // Crear credential de email/password
        const credential = EmailAuthProvider.credential(user.email, password);
        await linkWithCredential(user, credential);
      }

      Swal.fire({
        title: "¡Bienvenido!",
        text: `Sesión iniciada con Google: ${user.email}`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false
      }).then(() => {
        window.location.href = "/dashboard";
      });

    } catch (error) {
      console.error(error);
      Swal.fire("Error", "No se pudo iniciar sesión con Google.", "error");
    }
  };

  const solicitarPassword = async () => {
    const result = await Swal.fire({
      title: "Contraseña requerida",
      input: "password",
      inputLabel: "Introduce tu contraseña para vincular cuentas",
      inputPlaceholder: "Tu contraseña",
      showCancelButton: true,
      confirmButtonText: "Vincular",
      cancelButtonText: "Cancelar"
    });

    if (result.isConfirmed && result.value) {
      return result.value;
    }
    return null;
  };


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-center mb-4"> Bienvenido</h3>

              <form onSubmit={handleSubmit} id="loginForm">
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
                    onChange={(e) => setEmail(e.target.value)}

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
                    onChange={(e) => setPassword(e.target.value)}

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