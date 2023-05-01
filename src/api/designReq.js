import axios from 'axios';

export const registrationResource = () => {
	return axios.get(process.env.REACT_APP_BASE_URL);
};
