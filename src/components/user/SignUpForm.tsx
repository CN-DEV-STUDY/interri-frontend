import styled from 'styled-components';
import Input from '../ui/Input';
import toast, { ToastOptions, Toaster } from 'react-hot-toast';
import { useState, ChangeEvent } from 'react';
import { postCertEmail } from '@/api/desginReply';

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

interface UserSignUpRequest {
    email: string;
    nickname: string;
    password: string;
}
const toastConfig: ToastOptions = {
    duration: 4000,
    position: 'top-center',
    style: {
        fontSize: '15px',
        padding: '10px',
        // 기타 스타일 옵션 추가 가능
    },
    icon: '❌',
};
function SignUpForm() {
    // global

    // state
    const [userSignUpRequest, setUserSignUpRequest] =
        useState<UserSignUpRequest>({
            email: '',
            nickname: '',
            password: '',
        });
    const [selectedEmail, setSelectedEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [checkedPassword, setCheckedPassword] = useState<string>('');
    const [nickName, setNickName] = useState<string>('');

    // event
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setUserSignUpRequest((prevState) => ({
            ...prevState,
            email: e.target.value.concat(selectedEmail),
        }));
    };

    const onChangeSelectBox = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedEmail(e.target.value);
        setUserSignUpRequest((prevState) => ({
            ...prevState,
            email: prevState.email.split('@')[0].concat(e.target.value),
        }));
    };

    const onClickCertEmail = async () => {
        if (userSignUpRequest.email && selectedEmail) {
            try {
                await postCertEmail(userSignUpRequest.email);
                toast.success('Successfully sent to email', {
                    ...toastConfig,
                    icon: '✅',
                });
            } catch (error) {
                toast.error('Failed to send email', {
                    ...toastConfig,
                });
            }
        } else {
            toast.error('Please write the email', {
                ...toastConfig,
            });
        }
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;

        if (name === 'password') {
            setPassword(e.target.value);
        } else if (name === 'nickName') {
            setNickName(e.target.value);
        } else {
            setCheckedPassword(e.target.value);
        }
    };

    const onClickSignUP = () => {
        console.log('회원가입 정보:', userSignUpRequest);
    };

    return (
        <>
            <Title size={24} mt={30}>
                이메일
            </Title>

            <ContentWrap>
                <EmailWrap>
                    <Input
                        type='text'
                        value={userSignUpRequest.email.split('@')[0]}
                        onChange={onChangeEmail}
                        width={130}
                        placeholder={'이메일'}
                    />
                    <p>@</p>
                    <Select value={selectedEmail} onChange={onChangeSelectBox}>
                        <option value=''>선택하세요</option>
                        <option value='@naver.com'>naver.com</option>
                        <option value='@gmail.com'>gmail.com</option>
                    </Select>
                </EmailWrap>
            </ContentWrap>

            <Button onClick={onClickCertEmail}>이메일 인증하기</Button>
            <Toaster />

            <Title size={24}>비밀번호</Title>
            <SubTitle>영문, 숫자를 포함한 8자 이상 입력해주세요.</SubTitle>
            <ContentWrap>
                <Input
                    placeholder={'비밀번호'}
                    name='password'
                    value={password}
                    onChange={onChange}
                />
            </ContentWrap>

            <Title size={24}>비밀번호 확인</Title>
            <ContentWrap>
                <Input
                    placeholder={'비밀번호 확인'}
                    name='checkedPassword'
                    value={checkedPassword}
                    onChange={onChange}
                />
            </ContentWrap>

            <Title size={24}>닉네임</Title>
            <SubTitle>다른 사용자와 겹치지 않도록 입력해주세요.</SubTitle>
            <ContentWrap>
                <Input
                    placeholder={'별명 (2~15자)'}
                    name='nickName'
                    value={nickName}
                    onChange={onChange}
                />
            </ContentWrap>

            <ContentWrap>
                <Button onClick={onClickSignUP}>회원가입</Button>
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
