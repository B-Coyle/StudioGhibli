export const fetchMovie = () => {
  return fetch("https://ghibliapi.herokuapp.com/films").then(response => {
    if (!response.ok) {
      throw Error("Error loading movies");
    } else {
      return response.json();
    }
  });
};

