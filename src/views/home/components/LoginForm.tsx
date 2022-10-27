import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getAuth,
} from 'firebase/auth';
import { auth } from '../../../utils/firebase';

type Props = {
  user: any;
};

function LoginForm({ user }: Props) {
  const [loginEmail, setLoginEmail] = React.useState('');
  const [loginPassword, setLoginPassword] = React.useState('');
  const [registerEmail, setRegisterEmail] = React.useState('');
  const [registerPassword, setRegisterPassword] = React.useState('');
  const [showLogin, setShowLogin] = React.useState(true);
  //   const [user, setUser] = React.useState<any>(false);

  //   const navigate = useNavigate();

  //   React.useEffect(() => {
  //     onAuthStateChanged(auth, (currentUser: any) => {
  //       setUser(currentUser);
  //     });
  //   }, []);

  //   React.useEffect(() => {
  //     if (!!user) {
  //       navigate('/app');
  //       console.log('user logged in');
  //     }
  //   }, [user]);

  const register = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const login = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    console.log('användare utloggad');
    await signOut(auth);
  };

  return (
    <div className="flex flex-col min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div>
        {!!user === false && <p>Not logged in</p>}
        {!!user === true && (
          <div>
            <h4>User Logged In:</h4>
            <p>{user.email}</p>
            <button onClick={logout}> Sign Out </button>
          </div>
        )}
      </div>
      {showLogin && (
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-7xl text-center font-extrabold my-10">
              Bttr Golf
            </h1>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Logga in
            </h2>
          </div>
          <form className="mt-8" onSubmit={login}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label className="sr-only">E-post</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input-field"
                  onChange={(e) => setLoginEmail(e.target.value)}
                  value={loginEmail}
                  placeholder="Email..."
                />
              </div>
              <div>
                <label className="sr-only">Lösenord</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => setLoginPassword(e.target.value)}
                  value={loginPassword}
                  className="input-field"
                  placeholder="Lösenord..."
                />
              </div>
            </div>

            <div className="flex justify-end my-2">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-gray-900 hover:text-gray-700"
                >
                  Glömt lösenordet?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent  py-2 px-4 text-sm font-medium text-white  bg-gray-900 "
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-white group-hover:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
            <p
              className="my-4 cursor-pointer"
              onClick={() => setShowLogin(!showLogin)}
            >
              Registrera konto
            </p>
          </form>
        </div>
      )}

      {/* Registrera */}
      {!showLogin && (
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-7xl text-center font-extrabold my-10">
              Bttr Golf
            </h1>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Registrera
            </h2>
          </div>
          <form className="mt-8" onSubmit={register}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label className="sr-only">E-post</label>
                <input
                  id="register-email-address"
                  name="email"
                  type="email"
                  required
                  className="input-field"
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  value={registerEmail}
                  placeholder="Email..."
                />
              </div>
              <div>
                <label className="sr-only">Lösenord</label>
                <input
                  id="register-password"
                  name="password"
                  type="password"
                  required
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  value={registerPassword}
                  className="input-field"
                  placeholder="Lösenord..."
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent  py-2 px-4 text-sm font-medium text-white  bg-gray-900 "
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-white group-hover:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Registrera
              </button>
              <p
                className="my-4 cursor-pointer"
                onClick={() => setShowLogin(!showLogin)}
              >
                Har du redan ett konto? Logga in!
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
