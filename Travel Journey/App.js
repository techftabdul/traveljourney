import React from "react"

import data from "./data.js"

import Navbar from "./Components/Navbar.js"

import Main from "./Components/Main.js"

import Footer from "./Components/Footer.js"

// console.log(data)

export default function App() {
    
    const dataElement = data.map((item) => {
        return <Main 
                    key = {item.id}
                    title = {item.title}
                    location = {item.location}
                    map = {item.googleMapsUrl}
                    startDate = {item.startDate}
                    endDate = {item.endDate}
                    description = {item.description}
                    img = {item.imageUrl}
                />
    })
    
    return (
        <div>
            <Navbar />
            {dataElement}
            <Footer />
        </div>
    )
}