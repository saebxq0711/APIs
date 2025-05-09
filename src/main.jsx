import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import StarWarsSearch from './components/StarWarsSearch';
import UsersList from './components/UsersList';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/StarWarsSearch" element={<StarWarsSearch />} />
      <Route path="/UsersList" element={<UsersList />} />
    </Routes>
  </BrowserRouter>
);
