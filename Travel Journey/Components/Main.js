import React from "react"
import ReactDOM from 'react-dom'





export default function Main(props) {
    return (
    <div className="main-content">
        <div>
            <img src={props.img} className="img-card"/>
        </div>
        <div className="submain-content">
        <span className="location-map">
            <p className="location-card">{props.location}</p>
            <a href={props.map}>View on Google Maps</a>
        </span>
            <h4 className="title-card">{props.title}</h4>
            <p className="date-card"><strong>{props.startDate} - {props.endDate}</strong></p>
            <p className="description-card">{props.description}</p>
            <hr />
        </div>
    </div>
    )
}DataTransferItemList