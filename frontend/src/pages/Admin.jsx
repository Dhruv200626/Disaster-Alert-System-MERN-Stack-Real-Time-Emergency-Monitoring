import { useEffect, useState } from "react";
import AlertForm from "../components/AlertForm";
import AlertCard from "../components/AlertCard";
import api from "../services/api";

import "../styles/admin.css";

function Admin() {

  const [alerts, setAlerts] = useState([]);
  const [editingAlert, setEditingAlert] = useState(null);

  useEffect(() => {
    fetchAlerts();
  }, []);

  const handleEdit = (alert) => {
  setEditingAlert(alert);
};

  const fetchAlerts = async () => {
    try {
      const res = await api.get("/alerts");
      setAlerts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/alerts/${id}`);

      fetchAlerts();

      alert("Alert Deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-container">

      <h1>👨‍💼 Admin Dashboard</h1>

      <AlertForm
    editingAlert={editingAlert}
    onAlertCreated={fetchAlerts}
    onEditComplete={() => {
        fetchAlerts();
        setEditingAlert(null);
    }}
/>

      <h2>Existing Alerts</h2>

      <div className="alerts-grid">

        {alerts.map((alert) => (

          <AlertCard
            key={alert._id}
            alert={alert}
            onDelete={handleDelete}
          />

        ))}

      </div>

    </div>
  );
}

export default Admin;