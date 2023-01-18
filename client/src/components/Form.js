import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <input>Name/Alias</input>
        <p>contact method</p>
        <checkbox>Snap Chat</checkbox>
        <checkbox>Twitter</checkbox>
        <checkbox>Instagram</checkbox>
        <checkbox>KiK</checkbox>
        <checkbox>Text</checkbox>
        <input id="contact-info">Contact Info</input>
        <checkbox>Delivery?</checkbox>
        <input id="delivery-query">Zip Code</input>
        <p>Pick up in 30316</p>
      </form>
    </div>
  );
};

export default Form;
