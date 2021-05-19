import React from 'react';
import GoogleMapReact from "google-map-react"


const Map = ({center, zoom}) => {
    return (
        <div className="map">
            <GoogleMapReact 
                bootstrapURLKeys={{ key: 'AIzaSyB8vRhK2AFoie5C-WOX7RaKZUa7cT_4keY'}}
                defaultZoom={zoom}
                defaultCenter={center}
            >

            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.360081,
        lng: -71.058884
    },
    zoom: 10
}

export default Map
