import http from "./httpservice";
import config from "../config.json";

const url = config.apiEndpoint + "/movies";

export function getMovies() {
  return http.get(url);
}

export function deleteMovie(id) {
  return http.delete(url + "/" + id);
}

export function getMovie(id) {
  return http.get(url + "/" + id);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(url + "/" + movie._id, body);
  }

  return http.post(url, movie);
}
