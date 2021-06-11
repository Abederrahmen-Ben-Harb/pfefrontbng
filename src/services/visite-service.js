import axios from 'axios';

const VISITE_API_BASE_URL = "http://localhost:8080/api/visites";

class VisiteDataService {

  getVisites(){
    return axios.get(VISITE_API_BASE_URL);
  }

  createVisite(visite){
      return axios.post(VISITE_API_BASE_URL, visite);
  }

  getVisiteById(visiteId){
      return axios.get(VISITE_API_BASE_URL + '/' + visiteId);
  }

  updateVisite(visite, visiteId){
      return axios.put( VISITE_API_BASE_URL + '/' + visiteId, visite);
  }

  deleteVisite(visiteId){
      return axios.delete( VISITE_API_BASE_URL + '/' + visiteId);
  }
  }

export default new VisiteDataService();