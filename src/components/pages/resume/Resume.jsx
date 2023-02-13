import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import classes from "./Resume.module.css";
import { FaDownload } from "react-icons/fa";
import pdf from "../../../assets/Piotr_Gryko_CV.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/seriouspig/Piotr-Gryko-CV/main/Piotr Gryko_CV.pdf";

const Resume = () => {
  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);
  const resumeContainerRef = useRef(null);
  const pageRef = useRef(null);
    useLayoutEffect(() => {
      function updateWidth() {
        setWidth(window.innerWidth);
      }
      window.addEventListener("resize", updateWidth);
      updateWidth();
      return () => window.removeEventListener("resize", updateWidth);
    }, []);

    let rightOffset = (width - size)/2

  useEffect(() => {
    const resumeWidth =
      resumeContainerRef.current.getBoundingClientRect().width;
    console.log(resumeWidth);
    setSize(resumeWidth);
  }, []);

      window.onorientationchange = function () {
        var orientation = window.orientation;
        switch (orientation) {
          case 0:
          case 90:
          case -90:
            window.location.reload();
            break;
        }
      };

  return (
    <>
      <div className={classes.resume} ref={resumeContainerRef}>
        <a
          href={pdf}
          target="_blank"
          className={classes.btn}
          style={{ right: `${rightOffset}2px` }}
        >
          <FaDownload />
        </a>
        <Document file={resumeLink}>
          <Page
            ref={pageRef}
            className={classes["resume-page"]}
            width={size}
            pageNumber={1}
            renderTextLayer={false}
          />
        </Document>
      </div>
    </>
  );
};

export default Resume;
