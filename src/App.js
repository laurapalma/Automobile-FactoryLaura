import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import OrderList from "./Components/OrderList";
import Form from "./Components/Form";

function App() {
  const [manufacturing, setManufacturing] = useState({
    order_date: "",
    mark: "",
    time: 0,
    quantity: 0,
  });
  const [manufacturings, setManufacturings] = useState([]);

  const [listUpdated, setListUpdated] = useState(false);

  useEffect(() => {
    const getOrders = () => {
      fetch("http://localhost:9000/api")
        .then((res) => res.json())
        .then((res) => setManufacturings(res));
    };
    getOrders();
    setListUpdated(false);
  }, [listUpdated]);

  return (
    <Fragment>
      <Navbar brand="Fabrica Multimarca" />
      <div className="container">
        <br />
        <h2 style={{ textAlign: "center" }}>Crear su pedido</h2>
        <div className="row">
          <div className="col-5">
            <br />
            <br />
            <Form
              manufacturing={manufacturing}
              setManufacturing={setManufacturing}
            />
          </div>
          <div className="col-7">
            <br />
            <OrderList
              manufacturing={manufacturing}
              setManufacturing={setManufacturing}
              manufacturings={manufacturings}
              setListUpdated={setListUpdated}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
