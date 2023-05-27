import axios from "axios";

const BASE_URL = "https://slf5pp-2410.csb.app/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODE2YWY5ODE4MzE3NDg3ZDBlMTZjZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjAxMjU5OCwiZXhwIjoxNjM2NjE3Mzk4fQ.pgmGeHvDMUkdRBFpNyDLpqSU9qJkk0aW8zAUqr8H3yU";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
