import { useEffect, useState } from "react";
import api from "../services/api";
import socket from "../services/socket";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "../styles/map.css";

function MapPage() {
  const [alerts, setAlerts] = useState([]);

  const fetchAlerts = async () => {
    try {
      const res = await api.get("/alerts");
      setAlerts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAlerts();

    socket.on("newAlert", (newAlert) => {
      setAlerts((prev) => [newAlert, ...prev]);
    });

    return () => {
      socket.off("newAlert");
    };
  }, []);

 return (
  <div className="map-page">

    <div className="map-header">
      <h1>🌍 Live Disaster Map</h1>

      <p>
        Monitor disaster alerts across India in real time.
      </p>
    </div>

    <div className="map-wrapper">

      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        className="map"
      >

        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {alerts
          .filter(
            (alert) =>
              alert.latitude &&
              alert.longitude
          )
          .map((alert) => (
            <Marker
              key={alert._id}
              position={[
                Number(alert.latitude),
                Number(alert.longitude),
              ]}
            >
              <Popup>
                <h3>{alert.title}</h3>

                <p>{alert.description}</p>

                <p>
                  <strong>Type:</strong> {alert.type}
                </p>

                <p>
                  <strong>Severity:</strong> {alert.severity}
                </p>
              </Popup>
            </Marker>
          ))}

      </MapContainer>

    </div>

  </div>
);
}

export default MapPage;