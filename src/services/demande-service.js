import axios from 'axios';

const DEMANDE_API_BASE_URL = "http://localhost:8080/api/demandes";

class DemandeDataService {

  getDemandes(){
    return axios.get(DEMANDE_API_BASE_URL);
  }

  createDemande(demande){
      return axios.post(DEMANDE_API_BASE_URL, demande);
  }

  getDemandeById(demandeId){
      return axios.get(DEMANDE_API_BASE_URL + '/' + demandeId);
  }

  updateDemande(demande, demandeId){
      return axios.put( DEMANDE_API_BASE_URL + '/' + demandeId, demande);
  }

  deleteDemande(demandeId){
      return axios.delete( DEMANDE_API_BASE_URL + '/' + demandeId);
  }
  }

export default new DemandeDataService();