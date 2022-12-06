import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAj3vrnPk6avLBCGk2aw5Dq2neGOrCrUys',
  authDomain: 'react-auth-ca951.firebaseapp.com',
  projectId: 'react-auth-ca951',
  storageBucket: 'react-auth-ca951.appspot.com',
  messagingSenderId: '629046778968',
  appId: '1:629046778968:web:70165bf1befe7e8db7be2d',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
