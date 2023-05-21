import axios from 'axios';

const getRegistrationResource = async () => {
	const { data } = await axios.get(
		process.env.REACT_APP_BASE_URL + '/design/req'
	);

	return data.data;
};

const postDesignRegistration = async (designRequest) => {
	const { data } = await axios.post(
		process.env.REACT_APP_BASE_URL + '/design/req', designRequest
	)
}

export { getRegistrationResource, postDesignRegistration };

