]import React from "react";
import "./styles.css";

export default function Card(props) {
    // Assuming props.index is the index of the desired quote

    return (
        <div className="quote">
            <blockquote>
                "{props.quote}" <br />
                <cite>- {props.author}</cite>
            </blockquote>
        </div>
    );
}
