import { Card, Container, Row, Col } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
const firstName = "Thierno"; // Change ce prénom ou laisse-le vide pour tester le message alternatif.


export const CardProduct = () => {
    return (
        <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow-lg">
              <Card.Body className="text-center">
                <Image />
                <Name />
                <Price />
                <Description />
              </Card.Body>
            </Card>
            <div className="mt-3 text-center">
              <h5>
                {firstName ? `Bonjour, ${firstName}!` : "Bonjour !"}
              </h5>
              {firstName && (
                <img
                  src="https://via.placeholder.com/150"
                  alt="profile"
                  className="mt-3 rounded-circle"
                />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
}