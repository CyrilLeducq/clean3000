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
        <Route path="/new-client" element={<NewClientForm />} />
        <Route path="/new-passage" element={<NewPassageForm />} />
        <Route path="/search-passage" element={<SearchPassage />} />
      </Routes>
    </Router>
  );
}

export default App;