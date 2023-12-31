"use client";
import Image from "next/image";
import Link from "next/link";
import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import defaultPhoto from "../assets/house.jpg";
const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => {
  return (
    <div>
      <Link href={`/property/${externalID}`} passHref>
        <Flex
          flexWrap={"wrap"}
          className="w-[300px] md:w-[420px] lg:w-[420px]"
          p={"5"}
          paddingTop={"0"}
          justifyContent={"flex-start"}
          cursor={"pointer"}
          alignItems={"center"}
        >
          <Box
            objectFit={"fill"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image
              src={coverPhoto ? coverPhoto.url : defaultPhoto}
              alt="house image"
              width={400}
              height={250}
            />
          </Box>
          <Box w="full">
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

              <Box>
                <Avatar size={"sm"} src={agency?.logo?.url} />
              </Box>
            </Flex>
            <Flex
              alignItems={"center"}
              p={"1"}
              justifyContent={"space-between"}
              w={"250px"}
              color={"blue.400"}
            >
              {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
              <BsGridFill />
            </Flex>
            <Text fontFamily={"lg"}>
              {title.length > 30 ? `${title.substring(0, 30)}...` : title}
            </Text>
          </Box>
        </Flex>
      </Link>
    </div>
  );
};

export default Property;
