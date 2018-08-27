import React from 'react';

const Session = React.createContext({
    isLogedin: false,
    onLoginChange: () => {}
});

export default Session;