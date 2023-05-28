import { MouseEventHandler } from 'react';
import styled from 'styled-components';

type ButtonProps = {
	cancel?: boolean;
	submit?: boolean;
};

type ConfirmPopupProps = {
	title: string; // 1. 등록하시겠습니까?
	onClose: (boolean: boolean) => void;
	onSubmit: () => void;
};

const ConfirmPopup = ({ title, onClose, onSubmit }: ConfirmPopupProps) => {
	return (
		<>
			<Backdrop onClick={() => onClose(false)} />
			<Modal>
				<header>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'
						onClick={() => onClose(false)}
					>
						<path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
					</svg>
				</header>
				<div>{title}</div>
				<footer>
					<Button cancel onClick={() => onClose(false)}>
						뒤로가기
					</Button>
					<Button submit onClick={onSubmit}>
						등록하기
					</Button>
				</footer>
			</Modal>
			;
		</>
	);
};

export default ConfirmPopup;

// styles
const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 10;
	background: rgba(0, 0, 0, 0.75);
`;

const Modal = styled.div`
	background-color: #fff;
	position: fixed;
	top: 30vh;
	left: 50%;
	transform: translate(-50%, 0);
	width: 40%;
	z-index: 100;
	overflow: hidden;
	border-radius: 9px;

	header {
		padding: 15px;
		display: flex;
		justify-content: end;

		svg {
			width: 28px;
			height: 28px;
			stroke: #495480;
			cursor: pointer;
		}
	}

	div {
		color: #495480;
		font-size: 36px;
		font-weight: 600;
		text-align: center;
		padding: 15px 0 50px 0;
	}

	footer {
		display: flex;
	}
`;

const Button = styled.button<ButtonProps>`
	border: none;
	background-color: ${(props) => {
		if (props.cancel) {
			return '#ef7c73';
		}
		if (props.submit) {
			return '#495480';
		}
	}};
	color: #fff;
	font-size: 18px;
	font-weight: 500;
	padding: 16px 0;
	width: 100%;
	cursor: pointer;
	:hover {
		background-color: #979797;
	}
`;
