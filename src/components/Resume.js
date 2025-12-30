import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsDownload, BsEye } from "react-icons/bs";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import resumePDF from "../assets/Anchal_Sandhu_Resume.pdf";

// Set up the worker for react-pdf from public folder
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;

export const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

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
                    <Col md={12}>
                        <div className="resume-header">
                            <h2>My Resume</h2>
                            <p>
                                View my professional resume below or download it for offline reference.
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

                <Row className="justify-content-center mt-4">
                    <Col md={10} lg={8}>
                        <div className="resume-viewer">
                            <Document
                                file={resumePDF}
                                onLoadSuccess={onDocumentLoadSuccess}
                                className="pdf-document"
                            >
                                {Array.from(new Array(numPages), (el, index) => (
                                    <Page
                                        key={`page_${index + 1}`}
                                        pageNumber={index + 1}
                                        renderTextLayer={true}
                                        renderAnnotationLayer={true}
                                        className="pdf-page"
                                        scale={1.5}
                                    />
                                ))}
                            </Document>

                            {numPages && (
                                <p className="page-count">
                                    Total Pages: {numPages}
                                </p>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
