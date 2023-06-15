import styled from 'styled-components';

type Props = {
    children: React.ReactNode;
    htmlFor: string;
};

const Label = ({ children, htmlFor }: Props) => {
    return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;

// style
const StyledLabel = styled.label`
    font-size: 2.4rem;
`;
