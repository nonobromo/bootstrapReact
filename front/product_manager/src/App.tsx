import { Container } from "react-bootstrap";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage";
import ProductAdd from "./components/addModal";
import Footer from "./components/footer";
function App() {
  return (
    <Container fluid className="min-vh-100 d-flex flex-column gap-2">
      <Header />
      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </main>
      <Footer />
      <ProductAdd />
    </Container>
  );
}

export default App;
