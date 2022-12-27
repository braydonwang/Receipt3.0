import classes from "./Products.module.css";
import {useEffect, useState} from "react";
import ProductCard from "./ProductCard/ProductCard";
import AddNewProductCard from "./AddNewProduct";
import { Stack } from '@mui/material';
import { Box, Button, Text, Heading } from "@chakra-ui/react";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import vmContract from "../../Blockchain/receipt"

const addProduct = async (sku, productName, price, refundable, storeId) => {
  await axios.post("http://localhost:3001/products/", {
    sku,
    productName,
    price,
    refundable,
    storeId
  })
}

export default function Products() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [isCartPop, setCartPop] = useState(false);
    
    useEffect(() => {
        async function fetchData() {
            const storeId = "632685c2c6adae5bfccaafe6";
            const res = await axios.get(`http://localhost:3001/product/store/${storeId}`);
            setProducts(res.data.data.products);
        }
        fetchData();
    }, []);

    const sendReceipt = () => {
      vmContract.methods.createReceipt().call();
    }

    return (
      <div className={classes.mainContainer}>
        <Box
          position="absolute"
          w="100%"
          h="container.xl"
          opacity={0.25}
          bgGradient="linear(to-r, green.200, pink.500)"
          zIndex={-1}
        />
        <Navbar />
        <Heading size="3xl" className={classes.heading}>
          Products
        </Heading>
        <Stack
          direction="row"
          width="80%"
          sx={{ gap: "40px" }}
          flexWrap="wrap"
          justifyContent="center"
        >
         <AddNewProductCard></AddNewProductCard>
            {products ? products.map(product => <ProductCard product={product} cart={cart} setCart={setCart} />): null}
        </Stack>
        <Button size="4xl" colorScheme='teal' padding={5} margin={5} fontSize={20} onClick={() => setCartPop(true)}>View Cart</Button>
        {isCartPop && <Box position='absolute' backgroundColor='teal' color='white'>
          {cart.map((item) => {
            return <Text>{item}</Text>;
            })}
          <Button size="4xl" colorScheme='teal' padding={5} margin={5} fontSize={20} onClick={sendReceipt}>Submit Receipt</Button>
        </Box>}
        
      </div>
    );
}