import axios from '@/utils/api';

/**
 * 인덱스 페이지 데이터 fetch
 */
export const getIndexRequest = async () => {
    const { data } = await axios.get('/index/trends');
    return data.data;
};
