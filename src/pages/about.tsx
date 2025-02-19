import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function About() {
  return (
    <Container className="about-section py-5 text-center">
      {/* Animated Heading */}
      <motion.h1
        className="fw-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h1>

      {/* Animated Text Section */}
      <motion.div
        className="px-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="fw-bold">Welcome to ShopEase</h2>
        <p className="text-muted">
          ShopEase is your one-stop solution for a seamless and enjoyable
          shopping experience. We offer a wide range of high-quality products at
          unbeatable prices.
        </p>
        <p className="text-muted">
          Our goal is to make shopping easy, convenient, and rewarding for
          everyone. With our **secure payments, fast delivery, and excellent
          customer support**, we strive to be your favorite shopping platform.
        </p>
      </motion.div>

      {/* Explore Store Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Button as={Link} to="/store" variant="primary" className="mt-3">
          Explore Our Store
        </Button>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="contact-section text-center mt-5 pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h3 className="fw-bold">Contact Us</h3>
        <p>
          Have questions? Reach out to us at:
          <br />
          📧 Email: <a href="mailto:support@shopease.com">support@shopease.com</a>
          <br />
          📞Phone: +1 234 567 890
        </p>
        <Button variant="success" href="https://wa.me/1234567890">
          Chat on WhatsApp
        </Button>
      </motion.div>
    </Container>
  );
}
