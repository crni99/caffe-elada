import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
                        <a href="https://github.com/crni99" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <FontAwesomeIcon icon={faGithub} size="lg" title="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/ognj3n" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" title="LinkedIn" />
                        </a>
                        <a href="mailto:andjelicb.ognjen@gmail.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <FontAwesomeIcon icon={faEnvelope} size="lg" title="Email" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
