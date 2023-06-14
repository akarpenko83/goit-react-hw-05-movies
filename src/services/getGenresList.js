const getGenresList = array => {
  const genres = [];
  array.map(genre => genres.push(genre.name));
  return genres.join(', ');
};
export default getGenresList;
