import { createContext, useContext, useState, useEffect } from 'react';
import { MOCK_USERS } from '../data/mockData';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for an active session on mount
    const storedUser = localStorage.getItem('sms_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const loginAsRole = (role) => {
    const mockUser = MOCK_USERS.find((u) => u.role === role);
    if (mockUser) {
      setUser(mockUser);
      localStorage.setItem('sms_user', JSON.stringify(mockUser));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sms_user');
  };

  return (
    <AuthContext.Provider value={{ user, loginAsRole, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
