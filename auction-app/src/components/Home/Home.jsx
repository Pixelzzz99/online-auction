import { useState, useEffect } from "react";
import { getListings } from "../../api/auctions/auctions";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "./Home.css";
import TrustedPartners from "./TrustedPartners/TrustedPartners";
function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function fetchListings() {
      //   try {
      //     const data = await getListings();
      //     setListings(data);
      //   } catch (error) {
      //     console.error(error);
      //   }
    }
    fetchListings();
  }, []);

  return (
    <div className="home">
      <div className="welcome">
        <div className="home-container">
          <div className="header-text">
            <h1>Welcome to BidMaster!</h1>
            <p>
              Dive into the thrill of online auctions where treasure hunts meet
              the digital age. Bid or sell in our easy-to-use, secure platform.
            </p>
          </div>
          <div className="home-image">
            <Image
              src="https://files.umso.co/lib_NzBDnSGOloSegeaJ/5632379.jpeg"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <TrustedPartners />
    </div>
  );
}

export default Home;
