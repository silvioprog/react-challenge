import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Calendar from './Calendar';

const App = () => (
  <div className="container-xl">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
