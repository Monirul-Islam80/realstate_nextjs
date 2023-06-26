import { Box } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        textAlign={"center"}
        p={"5"}
        color={"gray.600"}
        borderTop={"1px"}
        borderColor={"gray.100"}
      >
        ©️2023 Realtor,inc
      </Box>
    </>
  );
};

export default Footer;
