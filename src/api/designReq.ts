import axios from "@/utils/api";

const getRegistrationResource = async () => {
  const { data } = await axios.get("/design/req");

  return data.data;
};

const postDesignReqRegist = async (designRequest: any) => {
  const { data } = await axios.post("/design/req", designRequest);
};

const getDesignReqDetail = async (id: number) => {
  const { data } = await axios.get(`/design/req/${id}/details`);

  return data.data;
};

export { getRegistrationResource, postDesignReqRegist, getDesignReqDetail };
