import Header from '@/components/headers/Header';
import Logo from '@/components/navbar/Logo';
import Button from '@/components/ui/Button';
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
				<Button
					type={'submit'}
					onClick={(event) => onSaveHanlder(true, event)}
				>
					임시 저장
				</Button>
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
