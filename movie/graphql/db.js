// export const people = [
//   {
//     id: "1",
//     name: " Haeil",
//     age: 25,
//     gender: "male",
//   },
//   {
//     id: "2",
//     name: " um",
//     age: 25,
//     gender: "male",
//   },
//   {
//     id: "3",
//     name: " jun",
//     age: 27,
//     gender: "male",
//   },
//   {
//     id: "4",
//     name: " sik",
//     age: 25,
//     gender: "male",
//   },
//   {
//     id: "5",
//     name: " Haeil",
//     age: 25,
//     gender: "male",
//   },
// ];

// let movies = [
//   {
//     id: 0,
//     name: " 악마를 보았다",
//     score: 9,
//   },
//   {
//     id: 1,
//     name: "곡성",
//     score: 7,
//   },
//   {
//     id: 2,
//     name: "신세계",
//     score: 9,
//   },
//   {
//     id: 3,
//     name: "어벤저스",
//     score: 9,
//   },
// ];

// export const getMovies = () => movies;

// export const getById = (id) => {
//   const filteredMovies = movies.filter((movie) => movie.id === id);
//   return filteredMovies[0];
// };

// export const deleteMovie = (id) => {
//   const cleanedMovies = movies.filter((movie) => movie.id !== id);
//   if (movies.length > cleanedMovies.length) {
//     movies = cleanedMovies;
//     return true;
//   } else {
//     return false;
//   }
// };

// export const addMovie = (name, score) => {
//   const newMovie = {
//     id: `${movies.length + 1}`,
//     name,
//     score,
//   };
//   movies.push(newMovie);
//   return newMovie;
// };
import fetch from "node-fetch";
const API_URL = "https://yts.mx/api/v2/list_movies.json";

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `?limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};
