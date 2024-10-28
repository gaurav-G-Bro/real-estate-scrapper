"use client";

import { useState } from "react";
import ScraperForm from "./components/ScraperForm";
import ScrapedDataDisplay from "./components/ScrapedDataDisplay";

export default function Home() {
  const [scrapedData, setScrapedData] = useState(null);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Real Estate Scraper</h1>
      <ScraperForm onSubmit={setScrapedData} />
      {scrapedData && <ScrapedDataDisplay data={scrapedData} />}
    </div>
  );
}
