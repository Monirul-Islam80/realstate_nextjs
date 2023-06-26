import { Inter } from "next/font/google";
import { Banner } from "@/components/Banner";
import Property from "@/components/Property";
import { getData } from "@/utils/fetchApi";
import { Flex } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ propertyForRent, propertyForSale }) {
  return (
    <div>
      <Banner
        purpose="Rent a Home"
        title1="Rental Home for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and More"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap={"wrap"}>
        {propertyForRent?.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        purpose="BUY A HOME"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore from Apartments, land,"
        desc2=" villas and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex flexWrap={"wrap"}>
        {propertyForSale?.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </div>
  );
}
export async function getStaticProps() {
  const propertyForSale = await getData(
    "/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=6&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4"
  );
  console.log("hello");
  const propertyForRent = await getData(
    "/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=6&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4"
  );
  return {
    props: {
      propertyForRent: propertyForRent?.hits,
      propertyForSale: propertyForSale?.hits,
    },
  };
}
