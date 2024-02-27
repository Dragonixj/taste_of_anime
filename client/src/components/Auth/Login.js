import firebase from 'firebase/app';
import 'firebase/auth';
import { useState } from 'react';
import firebaseConfig from '../../../../firebase/firebaseConfig';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
};

export default Login;
