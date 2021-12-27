import { getMovies } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    // user: (_, { id, psw }) => getUser(id, psw),
  },
};

export default resolvers;
