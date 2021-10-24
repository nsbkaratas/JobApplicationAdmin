import axios from 'axios';

const APPLICANT_API_BASE_URL="http://localhost:8080/api/allapplicants"

class ApplicantService {
    getApplicants(){
        return axios.get(APPLICANT_API_BASE_URL)
    }
}
export default new ApplicantService()