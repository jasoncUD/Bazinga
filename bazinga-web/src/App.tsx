import React, { useState } from 'react';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';

const App: React.FC = () => {
    const [isLoginView, setIsLoginView] = useState(true);

    return (
        <div>
            <button onClick={() => setIsLoginView(!isLoginView)}>
                Switch to {isLoginView ? "Register" : "Login"}
            </button>
            {isLoginView ? <LoginComponent /> : <RegisterComponent />}
        </div>
    );
};

export default App;
