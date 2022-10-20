import { Routes } from './Routes';
import { AuthContext } from '../hooks/authHook';

const App = () => {
    return (
        <AuthContext>
            <Routes />
        </AuthContext>
    );
};

export default App;
