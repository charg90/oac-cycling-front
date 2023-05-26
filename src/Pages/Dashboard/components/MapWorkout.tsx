import React, { useEffect, useState } from 'react'
import { decode as decodePolyline } from '@mapbox/polyline'
import { MapContainer, Marker, Popup, TileLayer, Polyline } from 'react-leaflet'

interface MapWorkoutProps {
    polylines: string | undefined
}

const MapWorkout = ({ polylines }: MapWorkoutProps) => {
    const [positions, setPositions] = useState([] as L.LatLngExpression[])
    useEffect(() => {
        if (polylines) {
            const decode = decodePolyline(polylines)
            setPositions(decode.map((point: number[]) => [point[0], point[1]]))
        }
    }, [polylines])
    // const positions = [
    //     [51.505, -0.09],
    //     [51.51, -0.1],
    //     [51.51, -0.12],
    // ]
    // useEffect(() => {
    //     const decode = decodePolyline(polylines as string)
    //     setPositions(decode)
    //     console.log(positions)
    // }, [polylines])

    return (
        <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Polyline pathOptions={{ color: 'red' }} positions={positions} />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default MapWorkout
