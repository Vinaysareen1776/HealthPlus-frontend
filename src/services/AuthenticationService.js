import axios from 'axios'
const post_url="https://localhost:7039/api/Register/RegisterUser";

class AuthenticationService
{

RegisterPatient(patient){
    return axios.post(post_url,patient);
}
}