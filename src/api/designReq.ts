import axios from "axios";

const getRegistrationResource = async () => {
    const { data } = await axios.get(
        process.env.REACT_APP_BASE_URL + "/design/req"
    );

    return data.data;
};

const postDesignReqRegist = async (designRequest: any) => {
    const { data } = await axios.post(
        process.env.REACT_APP_BASE_URL + "/design/req",
        designRequest
    );
};

const getDesignReqDetail = async (id: number) => {
    const { data } = await axios.get(
        process.env.REACT_APP_BASE_URL + `/design/req/${id}/details`
    );

    return data.data;
};

export { getRegistrationResource, postDesignReqRegist, getDesignReqDetail };
