import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import storeItems from "../data/items.json";

export function Home() {
  return (
    <Container className="mt-5">
      {/* Hero Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="fw-bold">Welcome to ShopEase</h1>
          <p className="text-muted">
            The best place to find amazing deals on high-quality products.
          </p>
          <Link to="/store">
            <Button variant="primary" size="lg">
              Shop Now
            </Button>
          </Link>
        </Col>
      </Row>

      {/* Featured Products */}
      <h2 className="mb-4">Featured Products</h2>
      <Row>
        {storeItems.slice(0, 3).map((item) => (
          <Col key={item.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.imgUrl} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className="fw-bold">${item.price}</Card.Text>
                <Link to="/store">
                  <Button variant="success">View Store</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
