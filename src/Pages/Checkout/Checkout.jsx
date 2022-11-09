import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contacts/AuthProvider/AuthProvider";

const Checkout = () => {
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const message = form.message.value;
    const phone = form.phone.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("order placed successfully");
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  return (
    <form onSubmit={handlePlaceOrder}>
      <h2 className="text-4xl">You are about to order {title}</h2>
      <h2 className="text-3xl">Price: {price}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          className="input w-full input-bordered"
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name "
          className="input w-full input-bordered"
        />
        <input
          name="phone"
          type="text"
          placeholder="Your Phone"
          className="input w-full input-bordered"
          required
        />
        <input
          name="email"
          type="text"
          placeholder="Your Email"
          defaultValue={user?.email}
          className="input w-full input-bordered"
        />
      </div>
      <textarea
        name="message"
        className="textarea textarea-bordered h-24 w-full mt-2"
        placeholder="Bio"
      ></textarea>
      <input className="btn mb-8" type="submit" value="Place Your Order" />
    </form>
  );
};

export default Checkout;
