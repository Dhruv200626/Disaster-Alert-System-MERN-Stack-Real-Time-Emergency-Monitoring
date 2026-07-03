import {
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaClock,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import "./alertCard.css";

function AlertCard({ alert, onDelete, onEdit }) {
  const severityClass = alert.severity.toLowerCase();

  return (
    <div className="alert-card">

      <div className="card-header">

        <span className={`severity ${severityClass}`}>
          <FaExclamationTriangle />
          {alert.severity}
        </span>

        <span className="alert-type">
          {alert.type}
        </span>

      </div>

      <h2>{alert.title}</h2>

      <p className="description">
        {alert.description}
      </p>

      <div className="location">

        <FaMapMarkerAlt />

        <span>
          {alert.latitude}, {alert.longitude}
        </span>

      </div>

      <div className="time">

        <FaClock />

        <span>
          {new Date(alert.createdAt).toLocaleString()}
        </span>

      </div>

      {(onEdit || onDelete) && (
        <div className="card-buttons">

          {onEdit && (
            <button
              className="edit-btn"
              onClick={() => onEdit(alert)}
            >
              <FaEdit />
              Edit
            </button>
          )}

          {onDelete && (
            <button
              className="delete-btn"
              onClick={() => onDelete(alert._id)}
            >
              <FaTrash />
              Delete
            </button>
          )}

        </div>
      )}

    </div>
  );
}

export default AlertCard;