import { useEffect, useState } from "react";
import api from "../services/api";
import socket from "../services/socket";
import AlertCard from "../components/AlertCard";
import StatsCard from "../components/StatsCard";
import "../styles/dashboard.css";
import SearchBar from "../components/SearchBar";
import "../styles/search.css";
import Hero from "../components/Hero";
import Stats from "../components/StatsCard";
import Footer from "../components/Footer";

function Dashboard() {
  const [alerts, setAlerts] = useState([]);
  const [search, setSearch] = useState("");
const [severity, setSeverity] = useState("");

  const fetchAlerts = async () => {
    try {
      const res = await api.get("/alerts");
      setAlerts(res.data);
    } catch (error) {
      console.error("Failed to fetch alerts:", error);
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

  const filteredAlerts = alerts.filter((alert) => {
  const matchesSearch =
    alert.title.toLowerCase().includes(search.toLowerCase()) ||
    alert.type.toLowerCase().includes(search.toLowerCase());

  const matchesSeverity =
    severity === "" || alert.severity === severity;

  return matchesSearch && matchesSeverity;
});

  return (

    
    <div className="container">

        <h1>🌍 Disaster Alerts</h1>

      <div className="stats-container">

        <SearchBar
  search={search}
  setSearch={setSearch}
  severity={severity}
  setSeverity={setSeverity}
/>



</div>
        <Hero />
        <Stats />

        
      



    


      {alerts.length === 0 ? (
        <p>No disaster alerts available.</p>
      ) : (
        filteredAlerts.map((alert) => (
  <AlertCard
    key={alert._id}
    alert={alert}
  />
))
      )}
      <Footer />
    </div>
    
  );
}

export default Dashboard;