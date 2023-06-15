import styled from 'styled-components';
import SocialLogin from './SocialLogin';
import Input from '../ui/Input';
import SignUpForm from './SignUpForm';

interface ContentProps {
    size?: number;
    color?: string;
    mb?: number;
    mt?: number;
    weight?: string | number;
}

interface WrapProps {
    bb?: string;
    sort?: string;
}

function SignUp() {
    return (
        <Wrap>
            <Title size={30} mb={15}>
                회원가입
            </Title>
            <ContentWrap sort={'center'}>
                <SubTitle>sns 계정으로 간편 로그인 / 회원가입</SubTitle>
                <SocialLogin />
            </ContentWrap>

            <hr />

            <SignUpForm />
        </Wrap>
    );
}

export default SignUp;

const Wrap = styled.div`
    margin: 0 auto;
    height: 100vh;
    width: 300px;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ContentWrap = styled.div<WrapProps>`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.sort ? 'center' : 'start')};
    gap: 20px;

    input,
    select,
    p {
        margin-bottom: 20px;
    }

    p {
        font-size: 20px;
        color: #727171;
    }
`;

const Title = styled.div<ContentProps>`
    display: flex;
    justify-content: start;
    font-size: ${(props) => props.size}px;
    color: ${(props) => (props.color ? props.color : '#1D2133 ')};
    margin-bottom: ${(props) => (props.mb ? props.mb : 10)}px;
    margin-top: ${(props) => props.mt}px;
    font-weight: bold;
`;

const SubTitle = styled.div`
    display: flex;
    justify-content: start;
    font-size: 14px;
    color: #b8b6b6;
    margin-bottom: 10px;
`;
