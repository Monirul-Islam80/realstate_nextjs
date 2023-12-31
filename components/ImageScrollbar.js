import { Box, Flex, Icon } from "@chakra-ui/react";
import Image from "next/image";
import { useContext } from "react";
import { VisibilityContext, ScrollMenu } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent={"center"} alignItems={"center"} marginRight={"1"}>
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize={"2xl"}
        cursor={"pointer"}
      />
    </Flex>
  );
};
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Flex justifyContent={"center"} alignItems={"center"} marginLeft={"1"}>
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize={"2xl"}
        cursor={"pointer"}
      />
    </Flex>
  );
};
const ImageScrollbar = ({ data }) => {
  return (
    <ScrollMenu
      LeftArrow={() => LeftArrow()}
      RightArrow={() => RightArrow()}
      style={{ overflow: "hidden" }}
    >
      {data.length !== 0 &&
        data.map((item) => (
          <Box
            width="910px"
            itemID={item.id}
            overflow="hidden"
            p="1"
            key={item.id}
          >
            <Image
              placeholder="blur"
              blurDataURL={item.url}
              src={item.url}
              width={1000}
              height={500}
              sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
              alt="property"
            />
          </Box>
        ))}
    </ScrollMenu>
  );
};

export default ImageScrollbar;
