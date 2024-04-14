import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import BidForm from "./components/BidForm/BidForm";
import Home from "./components/Home/Home";
import AuctionNavbar from "./components/Navbar/AuctionNavbar";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App() {
  const onBidHandler = (bid) => {
    console.log(bid);
  };

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="10">
            <AuctionNavbar />
            {/* <ProductList /> */}
            {/* <BidForm onBid={onBidHandler} /> */}
            <Home />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
