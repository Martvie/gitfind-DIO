import React from "react";
import "./styles.css";
function itemList({ title, description, link }) {
    return (
        <div className="item-list">
            <a href={link} target='_blank' rel="noreferrer">
                <strong>{title}</strong>
            </a>
            <p>{description}</p>
            <hr />
        </div>
    );
}

export default itemList;
