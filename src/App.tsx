import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { FitnessAppProvider } from './context/FitnessAppContext';
import Router from './Router';
import './i18n';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <FitnessAppProvider>
            <Router />
          </FitnessAppProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}