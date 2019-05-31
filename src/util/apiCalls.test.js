import {fetchMovie, fetchPeople, fetchLocations} from './apiCalls';

describe('API Calls', () => {
  describe('fetchMovie', () => {
    let mockMovieData;
    beforeEach(() => {
      mockMovieData = {
        episode_id: 4,
        title: "Spirited Away"
      };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockMovieData)
        });
      });
    });

    it('should call fetch with the correct parameters', () => {
      fetchMovie(1);
      expect(window.fetch).toHaveBeenCalledWith("https://ghibliapi.herokuapp.com/films")
    });
    it('should return a response if the status is OK', async () => {
      const result = await fetchMovie(1);
      expect(result).toEqual(mockMovieData);
    });
    it("should return an error is the status is not OK", async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      await expect(fetchMovie(1)).rejects.toEqual(Error('Error loading movies'))
    });
  });
  describe('fetchPeople', () => {
    let mockPeopleData = [{name: 'San'}]
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockPeopleData)
        });
      });
    });

    it('should call fetch with the right parameters', () => {
      fetchPeople('people');
      expect(window.fetch).toHaveBeenCalledWith('https://ghibliapi.herokuapp.com/people')
    });

    it('should return a response if the status is OK', async () => {
      const result = await fetchPeople('people');
      expect(result).toEqual(mockPeopleData);
    });

    it("should return an error is the status is not OK", async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      await expect(fetchPeople('people')).rejects.toEqual(Error('Error loading people'))
    });
  });
  describe('fetchLocation', () => {
    let mockLocation
    let mockPeople;
    beforeEach(() => {
      mockPeople = [{
        name: 'San', 
        location: 'https://ghibliapi.herokuapp.com/locations'
      }];
      mockLocation = { name: 'Irontown', climate: 'Continental' }
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockLocation)
        });
      });   
    });

    it('should call fetch with the correct parameters for each person object', () => {
      fetchLocations(mockLocation);
      expect(window.fetch).toHaveBeenCalledWith('https://ghibliapi.herokuapp.com/locations');
    });

    it("should return an error is the status is not OK", async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      await expect(fetchLocations(mockPeople)).rejects.toEqual(
        Error("Error loading locations")
      );
    })
  })
})