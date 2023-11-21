import React from 'react';
import Container from 'react-bootstrap/Container';
import ImageList from './components/ImageList';
import AppNavbar from './components/Navbar';

function App() {
  return (
    <div>
      <AppNavbar />
      <Container>
        <h1 className="mt-4">Image Gallery</h1>
        <ImageList />
      </Container>
    </div>
  );
}

export default App;
