import React, { useState } from 'react';
import AuthSwitchComponent from './components/AuthSwitchComponent';

const App: React.FC = () => {
    const [isLoginView, setIsLoginView] = useState(true);

    return (
        <div>
          <AuthSwitchComponent />
        </div>
    );
};

export default App;
