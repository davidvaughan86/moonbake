import "./components/CSS/Inventory.css";
import "./components/CSS/Nav.css";
import "./components/CSS/App.css";

import Baker from "./components/CSS/images/Baker.PNG";
import moonsurf from "./components/CSS/images/moonsurf.PNG";

import Card from "./components/Card";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />

      <div
        className="image"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div>
          <h1
            style={{
              backgroundColor: "#0096FF",
              border: "2px solid #FAF3E3",
              padding: "2%",
              boxShadow: "2px 2px 2px black",
              color: "FAF3E3",
              margin: "2%",
            }}
          >
            {" "}
            Moon Bake
          </h1>

          <h3>Taking you straight to the moon</h3>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img style={{ width: "50%" }} src={Baker} />
            <img style={{ width: "50%" }} src={moonsurf} />
          </div>
          <aside>
            <details>
              <summary>READ THIS FIRST</summary>
              <b>
                The form below is to CONTACT US about placing an order. We will
                respond to your REQUEST. You are NOT purchasing ANYTHING listed
                on this website. You are inquiring about these items. If an item
                has options please remember to select an option.
              </b>
            </details>
          </aside>
        </div>
      </div>
      <br />

      <Card />
    </div>
  );
}

export default App;
