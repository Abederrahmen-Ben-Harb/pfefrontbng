import axios from 'axios';

const STAFF_API_BASE_URL = "http://localhost:8080/api/staffs";
const API_URL = "http://localhost:8080/api/auth/";

class StaffDataService {

  getStaffs(){
    return axios.get(STAFF_API_BASE_URL);
  }

  createStaff(staff){
      return axios.post(STAFF_API_BASE_URL, staff);
  }

  getStaffById(staffId){
      return axios.get(STAFF_API_BASE_URL + '/' + staffId);
  }

  updateStaff(staff, staffId){
      return axios.put( STAFF_API_BASE_URL + '/' + staffId, staff);
  }

  deleteStaff(staffId){
      return axios.delete( STAFF_API_BASE_URL + '/' + staffId);
  }

  register(username, email, matricule, password, ) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      matricule,
      password
    });
  }

  }

export default new StaffDataService();