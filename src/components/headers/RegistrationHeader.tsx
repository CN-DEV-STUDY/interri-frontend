import Header from '@/components/headers/Header';
import Logo from '@/components/navbar/Logo';
import styled from 'styled-components';

interface RegistrationHeaderProps {
	onSave: (isTempSave: boolean) => void;
}

/**
 * @description 디자인 요청 등록 페이지 헤더
 */
const RegistrationHeader = ({ onSave }: RegistrationHeaderProps) => {
	// event
	const onSaveHanlder = (
		isTempSave: boolean,
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
		onSave(isTempSave);
	};

	// view
	return (
		<Header>
			<Logo />
			<ButtonWrapper>
				<OutlinedButton
					type={'submit'}
					onClick={(event) => onSaveHanlder(true, event)}
				>
					임시 저장
				</OutlinedButton>
				<Button
					type={'submit'}
					onClick={(event) => onSaveHanlder(false, event)}
				>
					등록하기
				</Button>
			</ButtonWrapper>
			
		</Header>
	);
};

export default RegistrationHeader;

// STYLED COMPONENTS
const ButtonWrapper = styled.div`
	display: flex;
	gap: 20px;
`;

const Button = styled.button`
	border: none;
	border-radius: 9px;
	background-color: #1D2133;
	color: #fff;
	font-size: 18px;
	font-weight: 500;
	padding: 16px 48px;
	cursor: pointer;

	:hover {
		background-color: #fff;
		color: #1D2133;
		box-shadow: inset 0 0 0 0.5px #1D2133; /* inset: 그림자가 요소 안쪽으로 추가된다. */
	}
`;

const OutlinedButton = styled.button`
	border: 1px solid #1D2133;
	border-radius: 9px;
	background-color: #fff;
	color: #1D2133;
	font-size: 18px;
	font-weight: 500;
	padding: 16px 48px;
	cursor: pointer;

	:hover {
		background-color: #495480;
		color: #fff;
	}
`;

