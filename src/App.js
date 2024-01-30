import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NewClientForm from './components/NewClientForm';
import NewPassageForm from './components/NewPassageForm';
import SearchPassage from './components/SearchPassage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nouveau-client" element={<NewClientForm />} />
        <Route path="/nouvel-avis" element={<NewPassageForm />} />
        <Route path="/recherche-avis" element={<SearchPassage />} />
      </Routes>
    </Router>
  );
}

export default App;