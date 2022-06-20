import React, { useState }from 'react'
import {Paper, Stepper, Step, StepLabel, Typography, CircularProcess, Divider, Button} from '@material-ui/core'
import useStyles from './CheckOutStyles'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'

const steps = ['Shipping address', 'Payment details']

const CheckOut = () => {

  const [activeStep, setActiveStep] = useState(2);
  const classes = useStyles();

  const Form = () => activeStep === 0
  ? <AddressForm />
  : <PaymentForm/>

  const Confirmation = () => (
    <div>
      confirmation
    </div>
  )


  return (
    <div>
      <div className={classes.toolbar}/>
      <main className={classes.layout}>
        <Paper className={classes.Paper}>
          <Typography variant='h4' align="center">Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation/> : <Form /> }
        </Paper>
      </main>
    </div>
  )
}

export default CheckOut