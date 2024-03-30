// components/Navbar.tsx
import { Container, Flex, Heading } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

const Navbar: React.FC = () => {
  return (
    <Container maxW={"1200px"} py={4}>
      <Flex direction={"row"} justifyContent={"space-between"}>
        <Heading>Token Staking App</Heading>
        <ConnectWallet />
      </Flex>
    </Container>
  );
};

export default Navbar;
