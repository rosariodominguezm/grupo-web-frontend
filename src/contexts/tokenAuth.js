import React, { createContext, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
  
export const tokenAuth = createContext();
  
  const TokenAuthProvider = ({ children }) => {
    const [currentSimulations, storeSimulations, clearStoredSimulations] = useLocalStorage('simulations')
  
    const handleTokenChange = (token, action) => {
        if (action === 'logout'){
            clearStoredSimulations();
        }
        else {
            storeSimulations(token);
        }
    };

    const userStatus = useMemo(
      () => ({ currentSimulations, handleTokenChange }),
      [currentSimulations, handleTokenChange],
    );
  
    return (
      <tokenAuth.Provider value={userStatus}>
        {children}
      </tokenAuth.Provider>
    );
};
  
export default TokenAuthProvider;