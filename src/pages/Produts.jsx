import React from 'react';
import { Grid } from "@material-ui/core"

import Product from '../Componets/Product/Product';
import useStyles from './ProductsStyles';

const products =[
  {id: 1, name: 'Day 1 -General Admissions', description: 'cheapest ticket', price: "$30", image:'https://images.pexels.com/photos/69866/pexels-photo-69866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  {id: 2, name: 'Day 1 -VIP', description: 'middle ticket', price: "$65", image:''},
  {id: 3, name: 'Day 2 -General Admissions', description: 'all of the above', price: "$30", image:''},
  {id: 4, name: 'Day 2 - VIP', description: 'middle ticket', price: "$65", image:''},
  {id: 5, name: 'Day 3 - General Admissions', description: 'middle ticket', price: "$30", image:''},
  {id: 6, name: 'Day 3 - VIP', description: 'middle ticket', price: "$65", image:''},
  {id: 7, name: 'All 3 days - general admissions ', description: 'middle ticket', price: "$85", image:''},
  {id: 8, name: 'All 3 days - VIP ', description: 'middle ticket', price: "$190", image:''},
  {id: 9, name: 'BackStage Pass', description:'Come backstage and be able to take 1 photo with the artist of your choosing (Can only use one time)', price: "$50", image:''}
]

const Products = () => {
  const classes = useStyles();

  
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product)=>(
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} > 
              <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main> 
  )
}

export default Products;