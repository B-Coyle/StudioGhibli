export const fetchMovie = () => {
  return fetch("https://ghibliapi.herokuapp.com/films").then(response => {
    if (!response.ok) {
      throw Error("Error loading movies");
    } else {
      return response.json();
    }
  });
};

export const fetchPeople = () => {
  return fetch(`https://ghibliapi.herokuapp.com/people`).then(response => {
    if (!response.ok) {
      throw Error("Error loading people");
    } else {
      return response.json();
    }
  });
};

export const fetchLocations = () => {
  return fetch("https://ghibliapi.herokuapp.com/locations").then(response => {
    if (!response.ok) {
      throw Error("Error loading locations");
    } else {
      return response.json();
    }
  });
};
