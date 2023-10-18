import {} from "react";
import { dataProfile } from "../profile/data-profile";
import StyledOrders from "./styled-orders";



const Orders = () => {
  return (
    <StyledOrders>
      <header></header>
      <section className="orders">

        <h1 className="orders__title">ORDERS</h1>

        <ul className="orders__container">
          {dataProfile.map((a, b) => {
            return (
              <li key={b} className="orders__text--container">
                <p className="orders__number">{a.orderNumber}</p>
                <div className="date-price">
                <p className="orders__date">{a.date}</p>
                <p className="orders__price">{a.price}</p>
                </div>
                <p className="orders__status">{a.status}</p>
                
              </li>
            );
          })}
        </ul>
      </section>

      <footer></footer>
    </StyledOrders>
  );
};

export default Orders;
