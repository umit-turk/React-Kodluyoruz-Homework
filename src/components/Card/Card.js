import React from "react";
import "./Card.css";
import heartOutline from "../../assets/heart-outline.png"; // Tell webpack this JS file uses this image
import heartFill from "../../assets/heart-fill.png"; // Tell webpack this JS file uses this image

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{props.author[0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{props.CardTitle}</h5>
          <div className="card-date">{props.CardDate}</div>
        </div>
      </div>
      <img className="card-image" src={props.Picture} alt="Logo" />
      <div className="card-text">{props.CardText}</div>
      <div className="card-like-bar">
        {props.liked ? (
          <img className="card-like-icon" src={heartFill} alt="Logo" />
        ) : (
          <img className="card-like-icon" src={heartOutline} alt="Logo" />
        )}
        <div className="like-text">
          <b>{props.LikeCount}</b> kişi bu tarifi beğendi.
        </div>
      </div>
    </div>
  );
}
