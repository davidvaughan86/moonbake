import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";

const Form = (props) => {
  const [form, setForm] = useState({
    name: "",
    zip: "",
    snapChat: "",
    instagram: "",
    kik: "",
    text: "",
    order: "",
  });

  function handleChange(event) {
    setForm((prevForm) => {
      return {
        ...prevForm,
        [event.target.name]: event.target.value,
      };
    });
  }
  console.log(form);
  return (
    <div>
      <iframe
        src="https://giphy.com/embed/aWpnYmWtXplgu2ZuIN"
        width="100%"
        height="20%"
        className="giphy-embed"
        allowFullScreen
        style={{ backgroundColor: "black" }}
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/aWpnYmWtXplgu2ZuIN"></a>
      </p>
      <form
        id="bottom-of-page"
        style={{ display: "block", margin: "10px 0 0" }}
      >
        <label>
          Name| Alias:
          <input
            id="aliasName"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Delivery Zip:
          <input
            id="deliveryQuery"
            type="text"
            name="zip"
            onChange={handleChange}
          />
        </label>
        <p>Deliver is not available to all locations. If unavailable:</p>
        <p>Pick up in 30316</p>

        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Contact Method
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              name="snapChat"
              value="snapChat"
              control={<Radio />}
              label="SnapChat"
              onChange={handleChange}
            />

            <FormControlLabel
              name="instagram"
              value="instagram"
              control={<Radio />}
              label="Instagram"
              onChange={handleChange}
            />
            <FormControlLabel
              name="true"
              value="kik"
              control={<Radio />}
              label="KiK"
              onChange={handleChange}
            />
            <FormControlLabel
              name="text"
              value="true"
              control={<Radio />}
              label="Text"
              onChange={handleChange}
            />
          </RadioGroup>
        </FormControl>
        <br />
        <label>
          Contact Info
          <input
            id="contactInfo"
            type="text"
            name="contact-info"
            onChange={handleChange}
          />
        </label>
        <br />
        <h1>Your current Order:</h1>
        <h3 name="order" onChange={handleChange}>
          {props.cart}
        </h3>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
