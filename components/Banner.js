import Image from "next/image";
import Link from "next/link";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
export const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex
    flexWrap={"wrap"}
    justifyContent={"center"}
    alignItems={"center"}
    m="10"
  >
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p={"5"}>
      <Text color={"gray.500"} fontSize={"sm"} fontWeight={"medium"}>
        {purpose}
      </Text>
      <Text fontSize={"3xl"} fontWeight={"bold"}>
        {title1}
        <br />
        {title2}
      </Text>
      <Text
        color={"gray.700"}
        fontSize={"lg"}
        paddingTop={"3"}
        paddingBottom={"3"}
      >
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button
        // fontSize="sm"
        // className="bg-emerald-700 text-white p-2 hover:bg-emerald-800"
        colorScheme="blue"
      >
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);
