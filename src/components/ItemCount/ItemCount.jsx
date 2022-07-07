import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./ItemCount.css";
import { cartContext } from "../../Context/CartContext/CartContext";
import { useContext } from "react";
 
export default function ItemCount({ stock, initial, onAdd, productDetail }) {
  const [count, setCount] = React.useState(initial);
  const { addItem, getQuantity } = useContext(cartContext);
 
  const prevAddedQuantity = getQuantity(productDetail.id);
        
  return (
    <div>
      <ButtonGroup className="btnGroup">
        <div className="addCartbtn">
          <Button
            variant="text"
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" sx={{ color: "#66467f" }} />
          </Button>
          <p className="numberOfProducts">{count}</p>
          <Button
            variant="text"
            aria-label="increase"
            onClick={() => {
              if (prevAddedQuantity + count < stock) {
                setCount(count + 1);
              }
            }}
          >
            <AddIcon fontSize="small" sx={{ color: "#66467f" }} />
          </Button>
          <Button
            onClick={() => {
              const totalQuantity = prevAddedQuantity + count;
              if (totalQuantity <= stock && count !== 0) {
                initial += count;
                onAdd(initial);
                addItem(productDetail, count);
                setCount(0);
              }
            }}
            variant="text"
          >
            <AddShoppingCartIcon
              fontSize="small"
              sx={{ color: "#66467f" }}
            ></AddShoppingCartIcon>
          </Button>
        </div>
        <Button variant="text">
          <Link className="buyBtn" to={"/cart"}>
            Comprar
          </Link>
        </Button>
      </ButtonGroup>
    </div>
  );
}