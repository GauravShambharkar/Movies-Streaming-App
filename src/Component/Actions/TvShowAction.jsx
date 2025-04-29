import axios from "../Axios";
import React from "react";

const TvShowAction = (id) => async (dispatch) => {
  try {
    const tvShow = await axios.get(`tv/${id}`);

    const TvCollection = {
      tvShow: tvShow.data,
    };
    console.log("tvShows-data", TvCollection);
  } catch (e) {
    console.log(e);
  }
};

export default TvShowAction;
