import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GalleryPage from './pages/gallery';
// import ComponentRender from './pages/renderComponent';

function App() {
  const images = [
    'https://via.placeholder.com/224/000',
    'https://via.placeholder.com/224/2522',
    'https://via.placeholder.com/224/9734',
    'https://via.placeholder.com/224/8888',
  ];
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<GalleryPage />} />
          {/* <Route exact path="/component" element={<ComponentRender />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App
