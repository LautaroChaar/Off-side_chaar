import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { cartContext } from "../../Context/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CartWidget() {
  
  const { cartCount } = React.useContext(cartContext);
  
  return (
    <IconButton aria-label="cart" size="large">
      <Link to={"/cart"} >
        <StyledBadge badgeContent={cartCount} color="secondary">
          <ShoppingCartIcon sx={{ fontSize: 30, color: '#78546a' }}/>
        </StyledBadge>
      </Link>
    </IconButton>
  );
}
