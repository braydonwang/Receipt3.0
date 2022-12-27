import classes from "./Wallet.module.css";
import { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import Navbar from "../../Components/Navbar/Navbar";

export default function Wallet() {

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
        Wallet
      </Heading>

    </div>
  );
}
