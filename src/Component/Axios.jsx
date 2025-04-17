import axios from "axios";

const Axios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjc5MTBlZWY0YzNiNDc4OTBhMWUyNjc0ZTA3NTlhZCIsIm5iZiI6MTc0NDgyNjU2Mi4zMTcsInN1YiI6IjY3ZmZmMGMyODNjNmU1NjdjN2Q5NTQyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g3g285-VEB4Z0b-UFOVWWLlmXg8uzLiQWWeZmAzUY1s",
  },
});

export default Axios;
