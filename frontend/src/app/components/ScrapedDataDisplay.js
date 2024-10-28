const ScrapedDataDisplay = ({ data }) => {
  if (!data) return null;
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <h2 style={{ color: "#333", fontWeight: "bold" }}>{data.title}</h2>
        <p>
          <span style={{ color: "#555", fontWeight: "bold" }}>Location:</span>{" "}
          <span style={{ color: "#0070f3" }}>{data.location}</span>
        </p>
        <p>
          <span style={{ color: "#555", fontWeight: "bold" }}>Price:</span>{" "}
          <span style={{ color: "#28a745" }}>{data.price}</span>
        </p>

        {data.pictures && data.pictures.length > 0 && (
          <div>
            <h3
              style={{
                color: "#333",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Images:
            </h3>
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {data.pictures.map((pictureUrl, index) => {
                const imageUrl = pictureUrl.startsWith("http")
                  ? pictureUrl
                  : `http://localhost:5000${pictureUrl}`;

                return (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`${data.title} - ${index + 1}`}
                    style={{
                      maxWidth: "100%",
                      width: "calc(100% / 3 - 20px)",
                      borderRadius: "8px",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrapedDataDisplay;
