import { ROUTES_DESIGN_REQUEST_REGISTRATION } from '@/routes/routes';
import styled from 'styled-components';
import Logo from '@/components/navbar/Logo';
import Menu from '@/components/navbar/Menu';
import CustomLink from '@/components/ui/CustomLink';
import Header from '@/components/headers/Header';
import ButtonLink from '@/components/ui/ButtonLink';
import UserProfile from '../navbar/UserProfile';
import UserMenu from '../navbar/UserMenu';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Backdrop } from '@mui/material';

/**
 * @description 메인 헤더 컴포넌트
 */
const MainHeader = () => {
    // state
    const [showUserMenu, setShowUserMenu] = useState<boolean>(false);

    const onClickUserMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        setShowUserMenu((prevState) => !prevState);
    };

    // view
    return (
        <>
            <Backdrop
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={showUserMenu}
                onClick={onClickUserMenu}
                invisible={true}
            />
            <Header>
                <NavLink to={'/'}>
                    <Logo />
                </NavLink>
                <Menu />
                <Wrapper>
                    <ButtonLink to={ROUTES_DESIGN_REQUEST_REGISTRATION}>
                        글 쓰기
                    </ButtonLink>
                    <UserProfile onClick={onClickUserMenu} />

                    {showUserMenu && <UserMenu />}
                </Wrapper>
            </Header>
        </>
    );
};

export default MainHeader;

// STYLED COMPONENTS
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    position: relative;
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;
