import { DesignRequest } from '@/components/pages/design/request/types';
import axios from '@/utils/api';

const getRegistResource = async () => {
    const { data } = await axios.get('/design/req');

    return data.data;
};

const postDesignReqRegist = async (designRequest: DesignRequest) => {
    const formData = new FormData();
    formData.append("sizeId", designRequest.sizeId)
    formData.append("housingTypeId", designRequest.housingTypeId)
    formData.append("mainColor", designRequest.mainColor)
    formData.append("subColor", designRequest.subColor)
    formData.append("maxPrice", designRequest.maxPrice.toString())
    formData.append("dueDate", designRequest.dueDate.toISOString())
    formData.append("tempYn", designRequest.tempYn)
    Array.from(designRequest.styleId).forEach((style) => {
        formData.append("styleId", style)
    })
    
    Array.from(designRequest.designRequestInfos).forEach((designRequestInfo, index) => {

        formData.append("designRequestInfos["+index+"].roomTypeId", designRequestInfo.roomTypeId.toString())
        formData.append("designRequestInfos["+index+"].content", designRequestInfo.content)
        formData.append("designRequestInfos["+index+"].image", designRequestInfo.image);
        
    })

    const { data } = await axios.post('/design/req', formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
};

const getDesignReqDetail = async (id: number) => {
    const { data } = await axios.get(`/design/req/${id}/details`);

    return data.data;
};

export { getRegistResource, postDesignReqRegist, getDesignReqDetail };
