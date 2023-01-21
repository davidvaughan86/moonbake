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
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import rocketguy from "./CSS/images/rocketguy2.PNG";
import OilJar from "./CSS/images/oiljar.JPG";
import RiceCrispy from "./CSS/images/RiceCrispy.JPG";
import RedVelvet from "./CSS/images/RedVelvet8oz.JPG";
import CupCake from "./CSS/images/CupCakesingle.JPG";
import GummyPacks from "./CSS/images/gummypack.JPG";
import LemondPound from "./CSS/images/lemonpound.JPG";
import hearts from "./CSS/images/hearts.jpg";
import moonguy from "./CSS/images/moonguy.jpg";
import Form from "./Form";

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
  const [age, setAge] = React.useState("");
  const [cart, setCart] = React.useState([]);

  const inventory = [
    "Gummies",
    "RedVelvet",
    "Cupcake",
    "Ricecrispy",
    "Lemoncake",
    "Oil",
  ];

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card
        className="card"
        sx={{ maxWidth: 345 }}
        style={{ backgroundColor: "#1A4D2E", color: "#FAF3E3" }}
      >
        <CardHeader
          className="card"
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
                  backgroundColor: "#1A4D2E",
                  borderRadius: "5%",
                  color: "FAF3E3",
                }}
                onClick={() => {
                  setCart(cart + " " + inventory[0] + " " + " |");
                }}
              >
                Order
              </button>
            </IconButton>
          }
          title="Gummy Pack"
          subheader="$20.00 144mg/pack"
        />
        <CardMedia
          component="img"
          height="194"
          image={GummyPacks}
          alt="Paella dish"
        />
        <CardContent>
          <Typography className="card" variant="body2" color="#FAF3E3">
            These tasty gummies are quick, low on calories, easy to manage and
            long lasting! 10 in a pack at 14.4mg per gummy.
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
      <Card
        sx={{ maxWidth: 345 }}
        style={{ backgroundColor: "#1A4D2E", color: "#FAF3E3" }}
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
                  backgroundColor: "#1A4D2E",
                  borderRadius: "5%",
                  color: "FAF3E3",
                }}
                onClick={() => {
                  setCart(cart + " " + inventory[1] + " " + " |");
                }}
              >
                Order
              </button>
            </IconButton>
          }
          title="Red Velvet Cake Jar"
          subheader="$20.00 100mg"
        />
        <CardMedia
          component="img"
          height="194"
          image={RedVelvet}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="FAF3E3">
            This delicious Red Velet with cream cheese Cake Jar will carry you
            to the moon on a cloud of great taste. Great for a few bites to feel
            the effects and store away for a snack later.
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
      <Card
        sx={{ maxWidth: 345 }}
        style={{ backgroundColor: "#1A4D2E", color: "#FAF3E3" }}
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
                  backgroundColor: "#1A4D2E",
                  borderRadius: "5%",
                  color: "FAF3E3",
                }}
                onClick={() => {
                  setCart(cart + " " + inventory[2] + " " + " |");
                }}
              >
                Order
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
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="#FAF3E3">
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
              value={age}
              onChange={handleChange}
              autoWidth
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Cream Cheese</MenuItem>
              <MenuItem value={21}>Vanilla</MenuItem>
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
              The Cream Cheese/Vanilla buttercream and the sponge cake are all
              infused. 'two bites' size also nice for sharing.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <br />
      <Card
        sx={{ maxWidth: 345 }}
        style={{ backgroundColor: "#1A4D2E", color: "#FAF3E3" }}
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
                  backgroundColor: "#1A4D2E",
                  borderRadius: "5%",
                  color: "FAF3E3",
                }}
                onClick={() => {
                  setCart(cart + " " + inventory[3] + " " + " |");
                }}
              >
                Order
              </button>
            </IconButton>
          }
          title="Fruity Pebbles Rice Crispy"
          subheader="$10.00 50mg. 4 for $30.00"
          style={{ color: "white" }}
        />
        <CardMedia
          component="img"
          height="194"
          image={RiceCrispy}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="#FAF3E3">
            Creamy, sticky, gooey, and crunchy marshmallow fluff with a sweet
            sugary taste. A nice thick snack for those that love rice crispies.
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
              Made with fruity pebbles, marshmallows and with infused browned
              Ghee. Contains no milk.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <br />
      <Card
        sx={{ maxWidth: 345 }}
        style={{ backgroundColor: "#1A4D2E", color: "#FAF3E3" }}
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
                  backgroundColor: "#1A4D2E",
                  borderRadius: "5%",
                  color: "FAF3E3",
                }}
                onClick={() => {
                  setCart(cart + " " + inventory[4] + " " + " |");
                }}
              >
                Order
              </button>
            </IconButton>
          }
          title="Lemon Pound Cake"
          subheader="$15.00 80mg "
        />
        <CardMedia
          component="img"
          height="194"
          image={LemondPound}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="#FAF3E3">
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
      </Card>
      <br />
      <Card
        sx={{ maxWidth: 345 }}
        style={{ backgroundColor: "#1A4D2E", color: "#FAF3E3" }}
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
                  backgroundColor: "#1A4D2E",
                  borderRadius: "5%",
                  color: "FAF3E3",
                }}
                onClick={() => {
                  setCart(cart + " " + inventory[5] + " " + " |");
                }}
              >
                Order
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
          <Typography variant="body2" color="#FAF3E3">
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
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>8</MenuItem>
              <MenuItem value={21}>16</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
            <InputLabel id="demo-select-small">Potency</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>3.5k mg</MenuItem>
              <MenuItem value={21}>7k mg</MenuItem>
              <MenuItem value={21}>14k mg</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 90 }} size="small">
            <InputLabel id="demo-select-small">Fat</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Coconut</MenuItem>
              <MenuItem value={21}>Ghee</MenuItem>
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
      <img src={rocketguy} />
    </div>
  );
}
