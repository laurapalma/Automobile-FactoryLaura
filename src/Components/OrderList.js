import React from "react";

const OrderList = ({
  manufacturing,
  setManufacturing,
  manufacturings,
  setListUpdated,
}) => {
  const handleDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    };
    fetch("http://localhost:9000/api/" + id, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    setListUpdated(true);
  };

  let { order_date, mark, time, quantity } = manufacturing;

  const handleUpdate = (id) => {
    time = parseInt(time, 10);
    quantity = parseInt(quantity, 10);
    //Validación de los datos
    if (order_date === "" || mark === "" || time <= 0 || quantity <= 0) {
      alert("Todos los campos son obligatorios");
      return;
    }
    const requestInit = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(manufacturing),
    };
    fetch("http://localhost:9000/api/" + id, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    setManufacturing({
      order_date: "",
      mark: "",
      time: 0,
      quantity: 0,
    });

    setListUpdated(true);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Fecha Orden</th>
          <th>Marca</th>
          <th>Tiempo</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {manufacturings.map((manufacturing) => (
          <tr key={manufacturing.id}>
            <td>{manufacturing.id}</td>
            <td>{manufacturing.order_date}</td>
            <td>{manufacturing.mark}</td>
            <td>{manufacturing.time}</td>
            <td>{manufacturing.quantity}</td>
            <td>
              <div className="mb-3">
                <button
                  onClick={() => handleDelete(manufacturing.id)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </div>
              <div className="mb-3">
                <button
                  onClick={() => handleUpdate(manufacturing.id)}
                  className="btn btn-dark"
                >
                  Editar
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderList;
