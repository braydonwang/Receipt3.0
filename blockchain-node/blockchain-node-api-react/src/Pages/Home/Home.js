import { useNavigate, useState } from "react";
import classes from "./Home.module.css";
import { Heading, Text, Box, Button } from '@chakra-ui/react';
import Navbar from "../../Components/Navbar/Navbar"

export default function Home() {

  const [isPersonal, setIsPersonal] = useState(false);

  const handleConnectWallet = () => {
    console.log("wallet");
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined"){
      window.ethereum.request({ method: "eth_requestAccounts" })
    }
    else{
      console.log("Metamask is not installed!");
    }
  }

    return (
      <>
      <Box position="absolute" w='100%' h='100%' opacity={0.25} bgGradient='linear(to-r, green.200, pink.500)' zIndex={-1}/>
      <Navbar />
      <div className={classes.mainContainer}>
        <div className={classes.heading}>
          <Heading size="4xl">Receipt3.0</Heading>
        </div>
        <Text fontSize="4xl" fontWeight={600} color="">Change the way you return</Text>
        {!isPersonal && <div className={classes.subContainer}>
          <Button size="4xl" colorScheme='teal' padding={5} margin={5} marginLeft={0} fontSize={20}>Business</Button>
          <Text fontSize="2xl" fontWeight={600} color="">or</Text>
          <Button size="4xl" colorScheme='pink' padding={5} margin={5} fontSize={20} onClick={() => setIsPersonal(true)}>Personal</Button>
        </div>}
        {isPersonal && <Button size="4xl" colorScheme='teal' padding={5} margin={6} marginLeft={0} fontSize={20} onClick={handleConnectWallet} width="300px">Connect Your Wallet</Button>}
      </div>
      </>
    );
}
