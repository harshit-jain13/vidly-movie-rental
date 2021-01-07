import http from "./httpservice";
import config from "../config.json";

const url = config.apiEndpoint + "/users";

export function register(user) {
  return http.post(url, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
