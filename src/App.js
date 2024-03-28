import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AllTheBooks from './components/AllTheBooks';
import NotFound from './components/NotFound'; // Importa il componente per l'errore 404
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllTheBooks />} />
          {/* Aggiungi il route per l'errore 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
