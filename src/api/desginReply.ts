import axios from 'axios';

const postCertEmail = async (email: string) => {
    await axios.post(`/user/cert?email=${email}`);
};

const getEmailCertStatus = async (email: string) => {
    const data = await axios.get(`/user/cert/status/check?email=${email}`);
    return data.data;
};

export { postCertEmail, getEmailCertStatus };
