import axios from "axios";

// const URL =
//   "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

// const options = {
//   method: "GET",
//   url: "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
//   params: {
//     bl_latitude: "11.847676",
//     tr_latitude: "12.838442",
//     bl_longitude: "109.095887",
//     tr_longitude: "109.149359",
//   },
//   headers: {
//     "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
//     "x-rapidapi-key": "8fa5857f4bmsh5e99cf5ef9a0f64p1c627ajsn0554b42cd993",
//   },
// };

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "8fa5857f4bmsh5e99cf5ef9a0f64p1c627ajsn0554b42cd993",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
