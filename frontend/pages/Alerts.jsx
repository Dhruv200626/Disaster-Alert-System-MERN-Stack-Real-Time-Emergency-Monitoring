function AlertCard({alert}){

    return(
        <div className="card">

            <h2>{alert.title}</h2>

            <p>{alert.description}</p>

            <h4>Type : {alert.type}</h4>

            <h4>Severity : {alert.severity}</h4>

        </div>
    )

}

export default AlertCard;