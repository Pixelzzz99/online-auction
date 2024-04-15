import { Card  } from "react-bootstrap";
import "./MetricShow.css";
function MetricShow() {
  const metrics = [
    {
      title: "100,000,000+",
      description: "Items Listed",
    },
    {
      title: "5,000,000+",
      description: "Happy Customers",
    },
    {
      title: "99.9%",
      description: "Auctions Completed",
    },
  ];

  return (
    <div className="metric-show-container">
      <h1 className="text-center">
        By the Numbers
      </h1>
      <h3 className="text-center">
        Numbers don't lie! Join the thousands who trust BidMaster for their
        auction needs. Check out our impressive stats.
      </h3>

      <div className="d-flex justify-content-around ">
        {metrics.map((metric) => (
          <div key={metric.title} className="metric-card-container">
            <Card className="metric-card">
              <Card.Body>
                <Card.Title>{metric.title}</Card.Title>
                <Card.Text>{metric.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MetricShow;
