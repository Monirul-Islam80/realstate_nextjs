import Property from "@/components/Property";
import SearchFilter from "@/components/SearchFilter";
import { getData } from "@/utils/fetchApi";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsFilter } from "react-icons/bs";

const Search = ({ properties }) => {
  const [searchFilter, setsearchFilter] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        cursor={"pointer"}
        bg={"gray.100"}
        borderBottom={"1px"}
        borderColor={"gray.200"}
        p={"2"}
        fontWeight={"black"}
        fontSize={"lg"}
        justifyContent={"center"}
        align={"center"}
        onClick={() => setsearchFilter((preFillter) => !preFillter)}
      >
        <Text>Search Property By Filter</Text>
        <Icon paddingLeft={"2"} w={"7"} as={BsFilter} />
      </Flex>
      {searchFilter && <SearchFilter />}
      <Text fontSize={"2xl"} p={"4"} fontWeight={"bold"}>
        Properties {router.query?.purpose}
      </Text>
      <Flex flexWrap={"wrap"}>
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {properties.length === 0 && (
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Text fontSize={"8xl"}>No Result</Text>
        </Flex>
      )}
    </Box>
  );
};

export default Search;
export async function getServerSideProps(context) {
  const query = context.query;

  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";
  const data = await getData(
    `/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&sort=${sort}&rentFrequency=${rentFrequency}&categoryExternalID=${categoryExternalID}&priceMin=${minPrice}&priceMax=${maxPrice}&areaMax=${areaMax}&roomsMin=${roomsMin}&bathsMin=${bathsMin}`
  );

  return {
    props: {
      properties: data?.hits || [],
    },
  };
}
