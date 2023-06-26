import ImageScrollbar from "@/components/ImageScrollbar";
import { getData } from "@/utils/fetchApi";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsGridFill } from "react-icons/bs";
import { FaBath, FaBed } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import millify from "millify";
const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => {
  const markup = { __html: description };
  return (
    <Box maxWidth="1000px" margin="auto" p="4">
      {photos && <ImageScrollbar data={photos} />}
      <Box w={"full"} p={"6"}>
        <Flex
          paddingTop={"2"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Avatar size={"md"} src={agency?.logo?.url} />
          </Box>
          <Flex
            paddingTop={"2"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex alignItems={"center"}>
              <Box paddingRight={"3"} color={"green.400"}>
                {isVerified && <GoVerified />}
              </Box>
              <Text fontWeight={"bold"} fontSize={"lg"}>
                AED {millify(price)}
                {rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>
          </Flex>
          <Flex
            alignItems={"center"}
            p={"1"}
            justifyContent={"space-between"}
            w={"250px"}
            color={"blue.400"}
          >
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
            <BsGridFill />{" "}
          </Flex>
          <Text fontFamily={"lg"}>{title}</Text>{" "}
        </Flex>{" "}
        <Box marginTop={"1"} color={"gray.600"}>
          <div dangerouslySetInnerHTML={markup} />
        </Box>
        <Flex
          flexWrap="wrap"
          textTransform="uppercase"
          justifyContent="space-between"
        >
          <Flex
            justifyContent="space-between"
            w="400px"
            borderBottom="1px"
            borderColor="gray.100"
            p="3"
          >
            <Text>Type</Text>
            <Text fontWeight="bold">{type}</Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            w="400px"
            borderBottom="1px"
            borderColor="gray.100"
            p="3"
          >
            <Text>Purpose</Text>
            <Text fontWeight="bold">{purpose}</Text>
          </Flex>
          {furnishingStatus && (
            <Flex
              justifyContent="space-between"
              w="400px"
              borderBottom="1px"
              borderColor="gray.100"
              p="3"
            >
              <Text>Furnishing Status</Text>
              <Text fontWeight="bold">{furnishingStatus}</Text>
            </Flex>
          )}
        </Flex>
        <Box>
          {amenities.length && (
            <Text fontSize="2xl" fontWeight="black" marginTop="5">
              Facilites:
            </Text>
          )}
          <Flex flexWrap="wrap">
            {amenities?.map((item) =>
              item?.amenities?.map((amenity) => (
                <Text
                  key={amenity.text}
                  fontWeight="bold"
                  color="blue.400"
                  fontSize="l"
                  p="2"
                  bg="gray.200"
                  m="1"
                  borderRadius="5"
                >
                  {amenity.text}
                </Text>
              ))
            )}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyDetails;
export async function getServerSideProps({ params: { id } }) {
  const data = await getData(`/properties/detail?externalID=${id}`);
  return {
    props: {
      propertyDetails: data,
    },
  };
}
