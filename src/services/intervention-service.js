import axios from 'axios';

const INTERVENTION_API_BASE_URL = "http://localhost:8080/api/interventions";

class InterventionDataService {

  getInterventions(){
    return axios.get(INTERVENTION_API_BASE_URL);
  }

  createIntervention(intervention){
      return axios.post(INTERVENTION_API_BASE_URL, intervention);
  }

  getInterventionById(interventionId){
      return axios.get(INTERVENTION_API_BASE_URL + '/' + interventionId);
  }

  updateIntervention(intervention, interventionId){
      return axios.put(INTERVENTION_API_BASE_URL + '/' + interventionId, intervention);
  }

  deleteIntervention(interventionId){
      return axios.delete(INTERVENTION_API_BASE_URL + '/' + interventionId);
  }
  }

export default new InterventionDataService();