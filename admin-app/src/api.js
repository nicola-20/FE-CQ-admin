import axios from "axios";

//const BASE_URL = "https://city-quest-game.herokuapp.com/api/";
const BASE_URL = '//localhost:8080/api'

export const getAdminByUsername = async username => {
  const { data } = await axios.get(`${BASE_URL}/admins/${username}`);
  return {username, password: data.password};
};

export const getAllTrails = async () => {
  const { data } = await axios.get(`${BASE_URL}/trails`);
  return data.trails;
};

export const getTrailByTrailId = async trail_id => {
  const { data } = await axios.get(`${BASE_URL}/trails/${trail_id}`);
  return data.trail;
};

export const addTrail = async (newTrail, username) => {
  const {name, region} = newTrail
  
  const { data } = await axios.post(`${BASE_URL}/admins/${username}/trails`, {
    name, region
  })

  console.log(data, '<<<')
  return data.id
}

export const addRoute = async (routeArray, username, id) => {
  
  const { data } = axios.patch(`${BASE_URL}/admins/${username}/trails`, {routeArray, id})
  return data
}
