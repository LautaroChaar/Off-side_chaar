import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Item from '../Item';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Carousel({ productList }) {

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = productList.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };


  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'transparent',
        }}
      ><Typography 
      sx={{
        fontSize: '2rem',
        fontWeight: 'bold',
				width: '100%'
      }}
      >Productos + vendidos
      </Typography>
      </Paper>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {productList.map((item, index) => (
          <div key={item.id} className='itemList' >
            {Math.abs(activeStep - index) <= 2 ? (
            <Item id={item.id} title={item.title} category={item.category} image={item.image} price={item.price} stock={item.stock} initial={item.initial} />
          ) : null}
          </div>
        ))}
      </SwipeableViews >
      <MobileStepper
        sx={{
          bgcolor: 'transparent',
        }}
        className='stepperStyle'
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
    
  )
}