import Label from '@/components/ui/Label';
import styled from 'styled-components';

type Props = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const DueDate = ({ onChange }: Props) => {
    return (
        <>
            <Label htmlFor=''>마감 기한</Label>
            <StyledInput type={'date'} onChange={onChange}></StyledInput>
        </>
    );
};

export default DueDate;

// style
const StyledInput = styled.input`
    min-width: 24rem;
    height: 4rem;
    border-radius: 9px;
    border: 1px solid #000;
    text-align: center;
    font-size: 2rem;
`;
