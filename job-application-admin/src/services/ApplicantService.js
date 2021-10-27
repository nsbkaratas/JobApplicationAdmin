import axios from 'axios';

const APPLICANT_API_BASE_URL="http://localhost:8080/api"

class ApplicantService {
    getApplicants(){
        return axios.get(APPLICANT_API_BASE_URL+"/allapplicants")
    }
    addApplicant(applicant){
        return axios.post(APPLICANT_API_BASE_URL+"/addapplicants", applicant)
    }
    getApplicantById(id){
        return axios.get(APPLICANT_API_BASE_URL+"/allapplicants/"+id);
    }

    updateApplicant(applicant,id){
        return axios.put(APPLICANT_API_BASE_URL+"/allapplicants/"+id,applicant);
    }
    deleteApplicant(id) {
        return axios.delete(APPLICANT_API_BASE_URL+"/allapplicants/"+id)
    }
}
export default new ApplicantService()