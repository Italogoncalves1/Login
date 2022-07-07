import { useContext } from 'react';
import { AuthContext } from '../contexts/auth';


//Criando um hook
const useAuth = () => {
    const context = useContext(AuthContext);
  return context;
};

export default useAuth;