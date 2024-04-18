import "./App.css";
import Home from "./components/Home/Home";
import AuctionNavbar from "./components/Navbar/AuctionNavbar";
import AuctionFooter from "./components/Footer/AuctionFooter";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="10">
            <AuctionNavbar />
            {/* <ProductList /> */}
            {/* <BidForm onBid={onBidHandler} /> */}
            <Home />

            <AuctionFooter />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
