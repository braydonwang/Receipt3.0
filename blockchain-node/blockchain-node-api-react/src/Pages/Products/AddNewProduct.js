import {useState, useEffect} from 'react'
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import classes from "./ProductCard/ProductCard.module.css"

export default function AddNewProductCard({product, cart, setCart}) {

  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIsAdded(cart.some(item => item === product._id));
  }, [cart]);

  return (
    <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'200px'}
          w={'full'}
          src={
            product.img
          }
          objectFit={'cover'}
        />

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {product.productName}
            </Heading>
            <Text color={'gray.500'}>Company</Text>
            <Text>${product.price.toFixed(2)}</Text>
          </Stack>

          <Button
            w={'full'}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={isAdded ? 'red' : "white"}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
            onClick={() => {
              if (isAdded) {
                setCart(cart.filter(item => item !== product._id));
              } else {
                setCart([...cart, product._id]);
              }
            }}>
            Add to Cart
          </Button>
        </Box>

      </Box>
  )
}
