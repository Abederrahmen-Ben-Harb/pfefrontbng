import axios from 'axios';

const PLANTE_API_BASE_URL = "http://localhost:8080/api/plantes";

class PlanteDataService {

  getPlantes(){
    return axios.get(PLANTE_API_BASE_URL);
  }

  createPlante(plante){
      return axios.post(PLANTE_API_BASE_URL, plante);
  }

  getPlanteById(planteId){
      return axios.get(PLANTE_API_BASE_URL + '/' + planteId);
  }

  updatePlante(plante, planteId){
      return axios.put( PLANTE_API_BASE_URL + '/' + planteId, plante);
  }

  deletePlante(planteId){
      return axios.delete( PLANTE_API_BASE_URL + '/' + planteId);
  }
  }

export default new PlanteDataService();