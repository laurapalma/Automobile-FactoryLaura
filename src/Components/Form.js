import React from "react";

const Form = ({ manufacturing, setManufacturing }) => {
  const handleChange = (e) => {
    setManufacturing({
      ...manufacturing,
      [e.target.name]: e.target.value,
    });
  };

  let { order_date, mark, time, quantity } = manufacturing;
  const handleSubmit = () => {
    time = parseInt(time, 10);
    quantity = parseInt(quantity, 10);
    //Validación de los datos
    if (order_date === "" || mark === "" || time <= 0 || quantity <= 0) {
      alert("Todos los campos son obligatorios");
      return;
    }
    //
    const requestInit = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(manufacturing),
    };
    fetch("http://localhost:9000/api", requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    setManufacturing({
      order_date: "",
      mark: "",
      time: 0,
      quantity: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="order_date" className="form-label">
          Fecha orden
        </label>
        <br />
        <input
          value={order_date}
          name="order_date"
          onChange={handleChange}
          type="date"
          className="form-control"
          id="order_date"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="mark" className="form-label">
          Marca
        </label>
        <br />
        <input
          value={mark}
          name="mark"
          onChange={handleChange}
          type="text"
          className="form-control"
          id="mark"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="time" className="form-label">
          Tiempo
        </label>
        <br />
        <input
          value={time}
          name="time"
          onChange={handleChange}
          type="number"
          className="form-control"
          id="time"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="quantity" className="form-label">
          Cantidad
        </label>
        <br />
        <input
          value={quantity}
          name="quantity"
          onChange={handleChange}
          type="number"
          className="form-control"
          id="quantity"
        />
      </div>
      <button tyme="submit" onChange={handleChange} className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};
export default Form;
