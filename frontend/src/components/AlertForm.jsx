import { useState, useEffect } from "react";
import api from "../services/api";

function AlertForm({
    editingAlert,
    onAlertCreated,
    onEditComplete,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    severity: "Medium",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try{

        if(editingAlert){

            await api.put(
                `/alerts/${editingAlert._id}`,
                formData
            );

            window.alert("Alert Updated!");

            onEditComplete();

        }

        else{

            await api.post("/alerts", formData);

            window.alert("Alert Created!");

            onAlertCreated();

        }

        setFormData({
            title:"",
            description:"",
            type:"",
            severity:"Medium",
            latitude:"",
            longitude:"",
        });

    }

    catch(error){

        console.log(error);

        window.alert("Operation Failed");

    }

};
  useEffect(() => {

    if(editingAlert){

        setFormData(editingAlert);

    }

}, [editingAlert]);



  return (
    <form className="alert-form" onSubmit={handleSubmit}>
      <h2>Create Disaster Alert</h2>

      <input
        type="text"
        name="title"
        placeholder="Alert Title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="type"
        placeholder="Disaster Type"
        value={formData.type}
        onChange={handleChange}
        required
      />

      <select
        name="severity"
        value={formData.severity}
        onChange={handleChange}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <input
        type="number"
        step="any"
        name="latitude"
        placeholder="Latitude"
        value={formData.latitude}
        onChange={handleChange}
      />

      <input
        type="number"
        step="any"
        name="longitude"
        placeholder="Longitude"
        value={formData.longitude}
        onChange={handleChange}
      />

      <button type="submit">

    {editingAlert ? "Update Alert" : "Create Alert"}

</button>

      
    </form>
  );
}

export default AlertForm;