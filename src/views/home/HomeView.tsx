import React from 'react';
import LoginForm from './components/LoginForm';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';

export function HomeView() {
  const [user, setUser] = React.useState<any>(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    onAuthStateChanged(auth, (currentUser: any) => {
      setUser(currentUser);
    });
  }, []);

  React.useEffect(() => {
    if (!!user) {
      navigate('/app');
      console.log('user logged in');
    }
  }, [user]);
  return (
    <main className="">
      <LoginForm />
    </main>
  );
}
