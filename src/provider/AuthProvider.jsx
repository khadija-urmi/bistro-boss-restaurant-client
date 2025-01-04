import { getAuth } from 'firebase/auth';
import { app } from '../firebase/firebase.config';

const AuthProvider = () => {
    const auth = getAuth(app);
    return (
        <div>

        </div>
    );
};

export default AuthProvider;