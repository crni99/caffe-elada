import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-body-tertiary text-muted">
            <Container className="p-4">
                <Row className="d-flex justify-content-between align-items-center">
                    <Col className="text-center text-lg-start">
                        <span>{currentYear} &copy; Caffe Elada</span>
                    </Col>
                    <Col className="d-flex justify-content-center justify-content-lg-end">
                        <a href="tel:+381641215566" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faPhone} size="lg" className="mx-2 custom-icon" title="Phone" />
                        </a>
                        <a href="https://www.instagram.com/caffe_elada/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagramSquare} size="lg" className="mx-2 custom-icon" title="Instagram" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61565711781481" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookSquare} size="lg" className="mx-2 custom-icon" title="Facebook" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
