import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsDownload, BsEye } from "react-icons/bs";
import resumePDF from "../assets/Anchal_Sandhu_Resume.pdf";

export const Resume = () => {
    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = resumePDF;
        link.download = "Anchal_Sandhu_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="resume" id="resume">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} className="text-center">
                        <div className="resume-header">
                            <h2>My Resume</h2>
                            <p>
                                Download my professional resume or view it in a new tab for a detailed look at my experience, skills, and projects.
                            </p>
                            <div className="resume-buttons">
                                <Button
                                    variant="primary"
                                    onClick={downloadResume}
                                    className="resume-download-btn"
                                >
                                    <BsDownload /> Download Resume
                                </Button>
                                <a
                                    href={resumePDF}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary resume-view-btn"
                                >
                                    <BsEye /> View in New Tab
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
