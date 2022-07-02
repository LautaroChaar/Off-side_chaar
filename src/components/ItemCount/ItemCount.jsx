import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './ItemCount.css';


export default function ItemCount({ stock, initial, onAdd }) {

  const [count, setCount] = React.useState(initial);

  return (
      <div>
        <ButtonGroup className='btnGroup'>
          <div className='addCartbtn'>
              <Button
              variant='text'
              aria-label="reduce"
              onClick={() => {
                setCount(Math.max(count - 1, 0));
              }}
            >
              <RemoveIcon fontSize="small" sx={{color: '#66467f'}} />
            </Button>
            <p className='numberOfProducts'>{count}</p>
            <Button
              variant='text'
              aria-label="increase"
              onClick={() => {
                if (count < stock) {
                  setCount(count + 1);
                }
              }}
            >
              <AddIcon fontSize="small" sx={{color: '#66467f'}} />
            </Button>
            <Button
            onClick={()=>{
              if ((count <= stock) && (count !== 0)) {
                initial += count;
                onAdd(initial);
              }
            } }
            variant='text'>
              <AddShoppingCartIcon fontSize="small" sx={{color: '#66467f'}}></AddShoppingCartIcon>
            </Button>
          </div>
          <Button variant='text'><Link className='buyBtn' to={'/cart'}>Comprar</Link></Button>
        </ButtonGroup>
      </div>
  );
}
