import axios from "../Axios";

const movieAction = (id) => async (dispatch) => {
  try {
    const movieId = await axios.get(`/movie/${id}`);
    const movieRecommendatation = await axios.get(
      `/movie/${id}/recommendations`
    );
    const movieVideo = await axios.get(`/movie/${id}/videos`);

    let collectionOfData = {
      movieId: movieId.data,
      movieRecommendatation: movieRecommendatation.data,
      movieVideo: movieVideo.data,
    };
    console.log("MovieAction", collectionOfData);
  } catch (error) {
    console.log(error);
  }
};

export default movieAction;
