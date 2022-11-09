import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contacts/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrder] = useState([]);
  

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.deletedCount > 0){
            alert('Deleted Successfully')
            const remaining = orders.filter(odr=>odr._id !== id)
            setOrder(remaining)
          }
        });
    }
  };

  return (
    <div>
      <h1 className="text-5xl">You Have {orders.length} orders</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>{orders.map(order=><OrderRow key={order._id} order={order} handleDelete={handleDelete}></OrderRow>)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
