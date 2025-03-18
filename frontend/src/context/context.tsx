import { createContext, useContext } from 'react';

const AppContext = createContext(undefined);

export function useAppContext() {
    return useContext(AppContext);
}

export default AppContext;
