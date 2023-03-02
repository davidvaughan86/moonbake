import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Cookie from "./CSS/images/cookie.jpg";
import riderocket from "./CSS/images/riderocket.PNG";
import OilJar from "./CSS/images/oiljar.JPG";
import RiceCrispy from "./CSS/images/RiceCrispy.JPG";
import RedVelvet from "./CSS/images/RedVelvet8oz.JPG";
import CupCake from "./CSS/images/CupCakesingle.JPG";
import GummyPacks from "./CSS/images/gummypack.jpeg";
import LemondPound from "./CSS/images/lemonpound.JPG";
import hearts from "./CSS/images/hearts.jpg";
import moonguy from "./CSS/images/moonguy.jpg";
import soldout from "./CSS/images/SoldOut.PNG";
import Brownie from "./CSS/images/brownie.PNG";
import "./CSS/Card.css";
import Form from "./Form";
import { createTheme } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [oz, setOz] = React.useState("");
  const [fat, setFat] = React.useState("");
  const [potency, setPotency] = React.useState("");
  const [flavor, setFlavor] = React.useState("");
  const [flavor2, setFlavor2] = React.useState("");
  const [pack, setPack] = React.useState("");
  const [pack2, setPack2] = React.useState("");
  const [cart, setCart] = React.useState([]);

  const inventory = [
    "Gummies",
    "Cake Jar",
    "Cupcake",
    "Cookie",
    "Lemoncake",
    "Oil",
    "Brownie",
  ];

  const handleChange = (event) => {
    setOz(event.target.value);
  };
  const handleChange1 = (event) => {
    setPotency(event.target.value);
  };
  const handleChange2 = (event) => {
    setFat(event.target.value);
  };
  const handleChange0 = (event) => {
    setFlavor(event.target.value);
  };
  const handleChange3 = (event) => {
    setPack(event.target.value);
  };
  const handleChange4 = (event) => {
    setPack2(event.target.value);
  };
  const handleChange7 = (event) => {
    setFlavor2(event.target.value);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "20px",
          },
        },
      },
    },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ToastContainer
        position="top-center"
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
      {/* GUMMIES */}
      <Card
        theme={theme}
        sx={{ maxWidth: 345 }}
        style={{
          backgroundColor: "#0096FF",
          color: "#FAF3E3",
          border: "3px solid #F2F2F2",
          boxShadow: "5px 5px 5px black",
        }}
      >
        <CardHeader
          theme={theme}
          style={{ fontSize: "20px" }}
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={hearts} style={{ width: "110%" }} />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <button
                id="1"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5%",
                  color: "FAF3E3",
                }}
                onClick={() => {
                  setCart(cart + " " + inventory[0] + " " + " |");
                  toast("Added to Order", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }}
              >
                Request
              </button>
            </IconButton>
          }
          title="Gummy Pack"
          subheader="$25.00 225mg"
        />
        <CardMedia
          component="img"
          height="194"
          image={GummyPacks}
          alt="gummy pack"
        />
        <CardContent>
          <Typography
            style={{ fontSize: "18px" }}
            className="card"
            variant="body2"
            color="#FAF3E3"
          >
            15 Quick, tasty, and long lasting Gummies. The most popular way to
            get that good feeling without too many calories. The chewy texture
            is so satisfying and the flavor is explosive.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Made with infused Coconut Oil. Contains gelatin. Pure Citrus added
              for tart.
            </Typography>
            <Typography paragraph>
              The gummies are a great choice if you need something that can last
              you a while. Great for pregaming, middle of the club snacking, or
              if you need some help falling asleep at night.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <br />
      {/* Brownie */}
      <Card
        sx={{ maxWidth: 345 }}
        style={{
          backgroundColor: "#0096FF",
          color: "#FAF3E3",
          border: "3px solid #F2F2F2",
          boxShadow: "5px 5px 5px black",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={hearts} style={{ width: "110%" }} />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <button
                id="5"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5%",
                  color: "FAF3E3",
                }}
                onClick={() => {
                  setCart(cart + " " + inventory[6] + " |");
                  toast("Added to Order", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }}
              >
                Request
              </button>
            </IconButton>
          }
          title="Dank Ass Brownie"
          subheader="$20.00 220mg "
        />
        <CardMedia component="img" height="194" image={Brownie} alt="brownie" />
        <CardContent>
          <Typography
            style={{ fontSize: "18px" }}
            variant="body2"
            color="#FAF3E3"
          >
            These Amazing Chocolate Brownies are deliciously soft, gooey and
            fudgy inside. Potent!
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Made with infused Ghee. No milk. Coffee beans
            </Typography>
            <Typography paragraph>
              This dank ass brownie is a classic!
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <br />
      {/* CUPCAKE  */}
      <Card
        sx={{ maxWidth: 345 }}
        style={{
          backgroundColor: "#0096FF",
          color: "#FAF3E3",
          border: "3px solid #F2F2F2",
          boxShadow: "5px 5px 5px black",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={moonguy} style={{ width: "110%" }} />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <button
                id="3"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5%",
                  color: "FAF3E3",
                }}
                onClick={() => {
                  setCart(
                    cart +
                      flavor +
                      " " +
                      pack2 +
                      " " +
                      inventory[2] +
                      " " +
                      " |"
                  );
                  toast("Added to Order", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }}
              >
                Request
              </button>
            </IconButton>
          }
          title="Vanilla Cupcake"
          subheader="$15.00 80mg. 4 for $40.00"
        />
        <CardMedia
          component="img"
          height="194"
          image={CupCake}
          alt="cup cake "
        />
        <CardContent>
          <Typography
            style={{ fontSize: "18px" }}
            variant="body2"
            color="#FAF3E3"
          >
            An amazing light and fluffy cupcake with great flavor and a great
            kick. The spondge is moist and delicious. Choose a frosting flavor.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Flavor
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={flavor}
              onChange={handleChange0}
              autoWidth
              label="flavor"
            >
              <MenuItem value={"CreamCheese"}>Cream Cheese</MenuItem>
              <MenuItem value={"Vanilla"}>Vanilla</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              4 Pack?
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={pack2}
              onChange={handleChange4}
              autoWidth
              label="4 pack"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"4 pack"}>Yes</MenuItem>
            </Select>
          </FormControl>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              No lactose in cake. Made with infused Ghee.
            </Typography>
            <Typography paragraph>
              'Two bites' size also nice for sharing. Available in a 4 pack
              party size.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <br />
      {/* Cookie  */}
      <Card
        sx={{ maxWidth: 345 }}
        style={{
          backgroundColor: "#0096FF",
          color: "#FAF3E3",
          border: "3px solid #F2F2F2",
          boxShadow: "5px 5px 5px black",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={moonguy} style={{ width: "110%" }} />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <button
                id="4"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5%",
                  color: "FAF3E3",
                }}
                onClick={() => {
                  setCart(cart + " " + inventory[3] + " |");
                  toast("Added to Order", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }}
              >
                Request
              </button>
            </IconButton>
          }
          title=" Three Sugar Cookies"
          subheader="$20 - coming soon"
          style={{ color: "white" }}
        />
        <CardMedia
          className="cookies"
          component="img"
          height="194"
          image={Cookie}
          alt="sugar cookie"
        />
        <CardContent>
          <Typography
            style={{ fontSize: "18px" }}
            variant="body2"
            color="#FAF3E3"
          >
            3 pack of crispy on the outside soft on the inside sugar cookies.
            Not only are they extremely yummy, they are perfect for any occasion
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Made with infused Ghee. Contains no lactose.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <br />
      {/* LEMON POUND  */}
      {/* <Card
        sx={{ maxWidth: 345 }}
        style={{
          backgroundColor: "#0096FF",
          color: "#FAF3E3",
          border: "3px solid #F2F2F2",
          boxShadow: "5px 5px 5px black",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={hearts} style={{ width: "110%" }} />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <button
                id="5"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5%",
                  color: "FAF3E3",
                }}
                onClick={() => {
                  setCart(cart + " " + inventory[4] + " |");
                  toast("Added to Order", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }}
              >
                Request
              </button>
            </IconButton>
          }
          title="Lemon Pound Cake Slice"
          subheader="$15.00 80mg "
        />
        <CardMedia
          component="img"
          height="194"
          image={LemondPound}
          alt="Lemon Pound Cake"
        />
        <CardContent>
          <Typography
            style={{ fontSize: "18px" }}
            variant="body2"
            color="#FAF3E3"
          >
            Soft and fluffy, lemon zest and lemon juice are added to the cake
            batter, which lightly perfume the cake with lemon. Then, after
            baking, the cake is drizzled with a sweet vanilla glaze, so you get
            a pop of intense flavor in every bite.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Made with infused Ghee. Icing contains non lactose milk.
            </Typography>
            <Typography paragraph>
              This lemon pound cake is the ultimate dessert for lemon lovers
            </Typography>
          </CardContent>
        </Collapse>
      </Card> */}
      {/* <br /> */}

      {/* Cake jar  */}
      <Card
        sx={{ maxWidth: 345 }}
        style={{
          backgroundColor: "#0096FF",
          color: "#FAF3E3",
          border: "3px solid #F2F2F2",
          boxShadow: "5px 5px 5px black",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={hearts} style={{ width: "110%" }} />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <button
                id="2"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5%",
                  color: "FAF3E3",
                }}
                onClick={() => {
                  setCart(
                    cart + flavor2 + " " + " " + inventory[1] + " " + " |"
                  );
                  toast("Added to Order", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }}
              >
                Request
              </button>
            </IconButton>
          }
          title="Cake Jar"
          subheader="$20.00 100mg"
        />
        <CardMedia
          component="img"
          height="194"
          image={RedVelvet}
          alt="red velvet"
        />
        <CardContent>
          <Typography
            style={{ fontSize: "18px" }}
            variant="body2"
            color="FAF3E3"
          >
            These delicious Cake Jars will carry you to the moon on a cloud of
            great taste. Great for a few bites to feel the effects and store
            away for a snack later. Choose Red Velvet/Cream Cheese or
            Yellow/Vanilla
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Flavor
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={flavor2}
              onChange={handleChange7}
              autoWidth
              label="flavor"
            >
              <MenuItem value={"Red Velvet"}>Red Velvet</MenuItem>
              <MenuItem value={"Vanilla"}>Vanilla</MenuItem>
            </Select>
          </FormControl>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Contains dairy (buttermilk). Cocoa powder. Made with infused Ghee.
            </Typography>
            <Typography paragraph>
              Eat a few bites and store in the fridge for later. The Cream
              Cheese and Red Velvet are both infused.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <br />
      {/* COOKING OIL  */}
      <Card
        sx={{ maxWidth: 345 }}
        style={{
          backgroundColor: "#0096FF",
          color: "#FAF3E3",
          border: "3px solid #F2F2F2",
          boxShadow: "5px 5px 5px black",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={moonguy} style={{ width: "110%" }} />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <button
                id="6"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5%",
                  color: "FAF3E3",
                }}
                onClick={() => {
                  setCart(
                    cart +
                      oz +
                      "/" +
                      potency +
                      "/" +
                      fat +
                      " " +
                      inventory[5] +
                      " " +
                      " |"
                  );
                  toast("Added to Order", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }}
              >
                Request
              </button>
            </IconButton>
          }
          title="Infused Cooking Oil"
          subheader="$70.00 - $200.00"
        />
        <CardMedia
          component="img"
          height="194"
          image={OilJar}
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            style={{ fontSize: "18px" }}
            variant="body2"
            color="#FAF3E3"
          >
            Pick a size and potency. Choose between clarified butter: "Ghee" or
            Coconut oil. Custom made to order, see the options below.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
            <InputLabel id="demo-select-small">Oz</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={oz}
              label="oz"
              onChange={handleChange}
            >
              <MenuItem value={"8oz"}>8</MenuItem>
              <MenuItem value={"16oz"}>16</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
            <InputLabel id="demo-select-small">Potency</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={potency}
              label="Potency"
              onChange={handleChange1}
            >
              <MenuItem value={"3.5g"}>3.5k mg</MenuItem>
              <MenuItem value={"7g"}>7k mg</MenuItem>
              <MenuItem value={"14g"}>14k mg</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 90 }} size="small">
            <InputLabel id="demo-select-small">Fat</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={fat}
              label="fat"
              onChange={handleChange2}
            >
              <MenuItem value={"Coconut"}>Coconut</MenuItem>
              <MenuItem value={"Ghee"}>Ghee</MenuItem>
            </Select>
          </FormControl>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Add to recipies that require a type of fat. Use for cooking any
              savory or sweet dish.
            </Typography>
            <Typography paragraph>
              Infused oil for creating your own meals and controlling dosage.
            </Typography>
            <Typography paragraph>
              Add with any recipie as a replacement or supplement for the fat
              required. Melt, chill, or room temperature.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Form cart={cart} />
      <img src={riderocket} />
    </div>
  );
}
