import { Container } from "react-bootstrap";
import Logo from "../components/common/logo";

function MainPage() {
  return (
    <Container className="border-end border-start">
      <h1 className="mt-5">
        Welcome to <Logo />
      </h1>
    </Container>
  );
}

export default MainPage;
