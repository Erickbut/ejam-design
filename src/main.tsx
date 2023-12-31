import App from './App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');

if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error('No se pudo encontrar el contenedor con el ID "app".');
}
