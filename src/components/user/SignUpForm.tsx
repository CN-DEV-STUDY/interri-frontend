import styled from 'styled-components';
import Input from '../ui/Input';

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

function SignUpForm() {
    return (
        <>
            <Title size={24} mt={30}>
                이메일
            </Title>

            <ContentWrap>
                <EmailWrap>
                    <Input width={130} placeholder={'이메일'} />
                    <p>@</p>
                    <Select>
                        <option value=''>선택하세요</option>
                    </Select>
                </EmailWrap>
            </ContentWrap>
            <Button>이메일 인증하기</Button>

            <Title size={24}>비밀번호</Title>
            <SubTitle>영문, 숫자를 포함한 8자 이상 입력해주세요.</SubTitle>
            <ContentWrap>
                <Input placeholder={'비밀번호'} />
            </ContentWrap>

            <Title size={24}>비밀번호 확인</Title>
            <ContentWrap>
                <Input placeholder={'비밀번호 확인'} />
            </ContentWrap>

            <Title size={24}>닉네임</Title>
            <SubTitle>다른 사용자와 겹치지 않도록 입력해주세요.</SubTitle>
            <ContentWrap>
                <Input placeholder={'별명 (2~15자)'} />
            </ContentWrap>

            <ContentWrap>
                <Button>회원가입</Button>
            </ContentWrap>
        </>
    );
}

export default SignUpForm;

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

const Button = styled.button`
    border: none;
    border-radius: 9px;
    background-color: #b8b6b6;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    padding: 10px 45px;
    width: 300px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 30px;

    cursor: pointer;

    :hover {
        background-color: #1d2133;
    }
`;

const EmailWrap = styled.div`
    display: flex;

    align-items: center;
    gap: 7px;
`;

const Select = styled.select`
    width: 130px;
    height: 5rem;
    border-radius: 9px;
    font-size: 14px;
    border-color: #96a6cc;
    /* color: #96a6cc; */
    padding-left: 18px;

    /* 기본 화살표를 제거하기 위한 코드 */
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;

    /* SVG 화살표 이미지를 설정하는 코드 */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>');
    background-repeat: no-repeat;
    background-position: calc(100% - 1.5rem) center !important;
    background-size: 16px; /* 원하는 크기로 조정하세요 */
`;
