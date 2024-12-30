import { Route, Routes } from 'react-router-dom';
import Watchlist from './components/Watchlist';
import Navbar from 'react-bootstrap/esm/Navbar';
import Container from 'react-bootstrap/esm/Container';

const App = () => {
  return (
    <div>
      <Navbar expand="sm" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">WatchList</Navbar.Brand>
          <Navbar.Collapse className="justify-content-right">
            <Navbar.Text>All the movies you should watch.</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Watchlist />} />
      </Routes>
    </div>
  );
};

export default App;
