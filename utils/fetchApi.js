import axios from "axios";
export const baseUrl = "bayut.p.rapidapi.com";
export const getData = async (url) => {
  const burl = "https://bayut.p.rapidapi.com" + url;
  const { data } = await axios.get(burl, {
    headers: {
      "X-RapidAPI-Key": "7e65851df5msh4f3df574578c5fcp1f9ba2jsnf74d6ccf2973",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};
// import axios from "axios";
// export const fetchApi = async (url) => {
//   const options = {
//     method: "GET",
//     url: "https://bayut.p.rapidapi.com/properties/list",
//     params: {
//       locationExternalIDs: "5002,6020",
//       purpose: "for-rent",
//       hitsPerPage: "6",
//       page: "0",
//       lang: "en",
//       sort: "city-level-score",
//       rentFrequency: "monthly",
//       categoryExternalID: "4",
//     },
//     headers: {
//       "X-RapidAPI-Key": "e764ade50dmsheed06743e2a5cacp1c4f83jsn0598777f6a4c",
//       "X-RapidAPI-Host": "bayut.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// };
