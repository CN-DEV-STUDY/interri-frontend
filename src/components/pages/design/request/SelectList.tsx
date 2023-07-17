import Select from '@/components/ui/Select';
import { DesignRequest, SelectListType } from './types';
import styled from 'styled-components';

type Props = {
    setDesignRequest: (newState: any) => void;
    data: SelectListType | undefined;
};

/**
 * @description
 */
const SelectList = ({
    setDesignRequest,
    data,
}: 

Props) => {
    const onSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDesignRequest((prevState: DesignRequest) => {
            return { ...prevState, sizeId: event.target.value };
        });
    };

    const onHousingTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDesignRequest((prevState: DesignRequest) => {            
            return { ...prevState, housingTypeId: event.target.value };
        });
    };

    const onMainColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDesignRequest((prevState: DesignRequest) => {
            return { ...prevState, mainColor: event.target.value };
        });
    };

    const onSubColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDesignRequest((prevState: DesignRequest) => {
            return { ...prevState, subColor: event.target.value };
        });
    };

    // view
    return (
        <Container>
            <Select onChange={onSizeChange}>
                <option value=''>평수</option>
                {data?.sizeList.map((size) => (
                    <option key={size.id} value={size.id}>
                        {size.name}
                    </option>
                ))}
            </Select>
            <Select onChange={onHousingTypeChange}>
                <option value=''>주거 형태</option>
                {data?.housingTypeList.map((housingType) => (
                    <option key={housingType.id} value={housingType.id}>
                        {housingType.name}
                    </option>
                ))}
            </Select>
            <Select onChange={onMainColorChange}>
                <option value=''>메인 컬러</option>
                {data?.colorList.map((color, index) => (
                    <option key={index} value={color}>
                        {color}
                    </option>
                ))}
            </Select>
            <Select onChange={onSubColorChange}>
                <option value=''>서브 컬러</option>
                {data?.colorList.map((color, index) => (
                    <option key={index} value={color}>
                        {color}
                    </option>
                ))}
            </Select>
        </Container>
    );
};

export default SelectList;

// style
const Container = styled.div`
    display: flex;
    gap: 20px;
`;
