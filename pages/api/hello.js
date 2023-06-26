// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const data = await getData(
    "/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=6&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4"
  );
  res.status(200).json(data);
}
const getData = async (url) => {
  console.log("...........dlfj");
  const burl = "https://bayut.p.rapidapi.com" + url;
  const res = await fetch.get(burl, {
    headers: {
      "X-RapidAPI-Key": "e764ade50dmsheed06743e2a5cacp1c4f83jsn0598777f6a4c",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  console.log("--------------", data);
  return res;
};
