"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PdfStepperProps {
  src: string;
  startPage?: number;
}

export default function PdfStepper({ src, startPage = 1 }: PdfStepperProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [page, setPage] = useState<number>(startPage);
  const [renderedPage, setRenderedPage] = useState<number>(startPage);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.clientWidth);
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const onLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPage((p) => Math.min(p, numPages));
    setRenderedPage((p) => Math.min(p, numPages));
  }, []);

  const prev = () => setPage((p) => Math.max(1, p - 1));
  const next = () => setPage((p) => Math.min(numPages, p + 1));

  const isLoading = page !== renderedPage;

  return (
    <div className="w-full" style={{ userSelect: "none" }}>
      <div
        ref={containerRef}
        className="w-full overflow-hidden"
        style={{ borderRadius: 16, background: "#f7f7f5", position: "relative", border: "1px solid rgba(0,0,0,0.08)" }}
      >
        <Document
          file={src}
          onLoadSuccess={onLoadSuccess}
          loading={null}
          error={null}
        >
          {containerWidth > 0 && (
            <>
              {/* Previously rendered page — stays visible while next page loads */}
              {isLoading && (
                <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
                  <Page
                    key={`prev-${renderedPage}`}
                    pageNumber={renderedPage}
                    width={containerWidth}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </div>
              )}

              {/* New page — renders silently, then replaces the old one */}
              <div style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.15s ease" }}>
                <Page
                  key={`curr-${page}`}
                  pageNumber={page}
                  width={containerWidth}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  onRenderSuccess={() => setRenderedPage(page)}
                />
              </div>
            </>
          )}
        </Document>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-3 px-1">
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            color: "#bbb",
            letterSpacing: "0.5px",
          }}
        >
          {page} / {numPages || "—"}
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={page <= 1}
            aria-label="Previous page"
            className="flex items-center justify-center transition-opacity"
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              border: "1px solid #e5e5e5",
              background: "#fff",
              cursor: page <= 1 ? "default" : "pointer",
              opacity: page <= 1 ? 0.35 : 1,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M9 11L5 7L9 3" stroke="#0d0d0d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={next}
            disabled={page >= numPages}
            aria-label="Next page"
            className="flex items-center justify-center transition-opacity"
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              border: "1px solid #e5e5e5",
              background: "#fff",
              cursor: page >= numPages ? "default" : "pointer",
              opacity: page >= numPages ? 0.35 : 1,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M5 3L9 7L5 11" stroke="#0d0d0d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
