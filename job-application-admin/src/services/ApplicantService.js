import axios from 'axios';

const APPLICANT_API_BASE_URL="http://localhost:8080/api"

class ApplicantService {
    getApplicants(){
        return axios.get(APPLICANT_API_BASE_URL+"/allapplicants")
    }
    addApplicant(){
        return axios.get(APPLICANT_API_BASE_URL+"/add-applicant")
    }
}
export default new ApplicantService()