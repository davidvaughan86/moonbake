import * as React from "react";

import { useState, useEffect } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = (props) => {
  useEffect(() => {
    const send = document.getElementById("send");
    send.style.display = "none";
  });

  const formData = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zgndheo",
        "template_m03z8dq",
        formData.current,
        "j7NFv5yPLBUlW0tuo"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          toast("Email Sent", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        function (err) {
          console.log("FAILED...", err);
        }
      );
  };

  function acknowledge() {
    const send = document.getElementById("send");
    const btn1 = document.getElementById("read");
    const btn2 = document.getElementById("verify");
    if (btn1.checked & (btn2.checked == true)) {
      send.style.display = "block";
    } else if (btn1.checked & (btn2.checked == false)) {
      send.style.display = "none";
    }
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <br />
      <div>
        <iframe
          src="https://giphy.com/embed/aWpnYmWtXplgu2ZuIN"
          width="100%"
          height="300px"
          className="giphy-embed"
          allowFullScreen
          style={{
            backgroundColor: "black",
            border: "2px solid #FAF3E3",
            boxShadow: "2px 2px 2px black",
            color: "FAF3E3",
          }}
        ></iframe>
      </div>
      <div style={{ margin: "4%", textAlign: "center" }}>
        <aside>
          <details>
            <summary>Disclaimer</summary>
            <b>
              The form below is to CONTACT US about placing an order. We will
              respond to your REQUEST. You are NOT purchasing ANYTHING listed on
              this website. You are inquiring about these items. If an item has
              options please remember to select an option.
            </b>
          </details>
        </aside>
      </div>
      <div
        style={{
          display: "block",
          backgroundColor: "#5CB8E4",
          border: "2px solid #FAF3E3",
          boxShadow: "2px 2px 2px black",
          color: "#F2F2F2",
          margin: "5%",
        }}
      >
        <form
          className="form"
          ref={formData}
          onSubmit={sendEmail}
          id="bottom-of-page"
          style={{ display: "block", margin: "10px 0 0", fontSize: "25px" }}
        >
          <label>
            Name/Alias:
            <input
              required
              style={{ padding: "3%" }}
              id="aliasName"
              type="text"
              name="name"
              // onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Delivery Zip:
            <input
              style={{ padding: "3%" }}
              id="deliveryQuery"
              type="text"
              name="zip"
              // onChange={handleChange}
            />
          </label>
          <br />
          <span style={{ color: "red" }}>
            Delivery is not available to all locations. If unavailable: Pick up
            in Metro Atlanta
          </span>

          <br />
          <label>
            Contact Method (Insta/Snap/Twitter/SMS text)
            <input
              required
              style={{ padding: "3%" }}
              id="contactInfo"
              type="text"
              name="contactInfo"
              // onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Contact Info (number or screen-name)
            <input
              required
              style={{ padding: "3%" }}
              id="contactInfo"
              type="text"
              name="info"
              // onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <textarea
              style={{ display: "none" }}
              form="bottom-of-page"
              id="cart"
              type="text"
              name="order"
              value={props.cart}
              size="0"
            ></textarea>
          </label>
          <br />
          <h3>Your current Order:</h3>
          <h3 style={{ color: "#FFC23C" }} name="order">
            {props.cart}
            <br />

            <button
              onClick={() => {
                window.location.reload(false);
              }}
            >
              🚫
            </button>
          </h3>
          <label>I have read the disclaimer</label>
          <input
            required
            id="read"
            name="disclaimer"
            value="acknowledge"
            onChange={acknowledge}
            type="checkbox"
          />

          <br />
          <label>I am 21 years of age or older</label>
          <input
            required
            id="verify"
            name="verify"
            value="verification"
            onChange={acknowledge}
            type="checkbox"
          />
          <br />
          <input
            style={{ padding: "2%" }}
            id="send"
            type="submit"
            value="📩Send"
          />
        </form>{" "}
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};

export default Form;
