import axios from "../Axios";
import { loadMovie } from "../Reducers/movieSlice";
const movieAction = (id) => async (dispatch) => {
  try {
    const movieId = await axios.get(`/movie/${id}`);
    const movieRecommendation = await axios.get(
      `/movie/${id}/recommendations`
    );
    const movieVideo = await axios.get(`/movie/${id}/videos`);

    let details = await axios.get(`/movie/${id}`)

    let collectionOfData = {
      movieId: movieId.data,
      details : details.data,
      movieRecommendation: movieRecommendation.data.results,
      movieVideo: movieVideo.data.results.find(
        (trailer) => trailer.type === "Trailer"
      ),
    };
    console.log("Collection-data", collectionOfData);
    dispatch(loadMovie(collectionOfData));
  } catch (error) {
    console.log(error);
  }
};

export default movieAction;
