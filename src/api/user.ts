import axios from 'axios';

interface UserSignUpRequest {
    email: string;
    nickname: string;
    password: string;
}

const postCertEmail = async (email: string) => {
    await axios.post(`/user/cert?email=${email}`);
};

const getEmailCertStatus = async (email: string) => {
    const data = await axios.get(`/user/cert/status/check?email=${email}`);
    return data.data;
};

const postSignUp = async (params: UserSignUpRequest) => {
    await axios.post('/user/signUp', params);
};

export { postCertEmail, getEmailCertStatus, postSignUp };
