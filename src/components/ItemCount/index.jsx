import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";
import "./ItemCount.css";
 
export default function ItemCount({ stock, initial, onAdd, productDetail }) {

  const [count, setCount] = React.useState(initial);
  const { addItem, getQuantity, increaseCartCount } = useContext(cartContext);
  const prevAddedQuantity = getQuantity(productDetail.id);

  const buyButton = count === 0 
  ? 
  <Button variant="text" sx={{ visibility: "hidden" }}>
    <Link className="buyBtn" to={"/cart"}>Comprar</Link>  
  </Button>
  :
  <Button className="buyBtn" variant="contained" sx={{ backgroundColor: "#2e2e2e", boxShadow: 'none', width: '100%', '&:hover': { backgroundColor: 'transparent', boxShadow: 'none'} }} onClick={() => {
    const totalQuantity = prevAddedQuantity + count;
      if (totalQuantity <= stock && count !== 0) {
        initial += count;
        onAdd(initial);
        increaseCartCount(initial);
        addItem(productDetail, count);
        setCount(0);
      }
    }}>
    <Link className="buyBtnLink" to={"/cart"}>Comprar</Link>
  </Button>;

  return (
    <div>
      <ButtonGroup className="btnGroup">
        <div className="addCartbtn">
          <Button
            className="btnRemove"
            variant="text"
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon 
            className="removeIcon"
            fontSize="small" 
            sx={{ color: "#b7b7b7" }} />
          </Button>
          <p className="numberOfProducts">{count}</p>
          <Button
            className="btnAdd"
            variant="text"
            aria-label="increase"
            onClick={() => {
              if (prevAddedQuantity + count < stock) {
                setCount(count + 1);
              }
            }}
          >
            <AddIcon 
            className="addIcon"
            fontSize="small" 
            sx={{ color: "#b7b7b7" }} />
          </Button>
          <Button
            className="btnAddCart"
            onClick={() => {
              const totalQuantity = prevAddedQuantity + count;
              if (totalQuantity <= stock && count !== 0) {
                initial += count;
                onAdd(initial);
                increaseCartCount(initial);
                addItem(productDetail, count);
                setCount(0);
              }
            }}
            variant="text"
          >
            <AddShoppingCartIcon
              className="addCartIcon"
              fontSize="small"
              sx={{ color: "#b7b7b7" }}
            />
          </Button>
        </div>
        {buyButton}
      </ButtonGroup>
    </div>
  );
}