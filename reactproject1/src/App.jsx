import React from "react";
import Card from "./card"; // Import the Card component

import array from "./code";
export default function App() {
    return (
        <div className="quote">
            {/* Mapping over the Data array */}
            {Data.map((array, index) => (
                // Rendering a Card component for each item in Data
                <Card key={index} name={array.quote} image={array.author} />
            ))}
        </div>
    );
}
