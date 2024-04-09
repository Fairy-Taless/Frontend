import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/images/fairytale.png';
const HeaderContainer = styled.div`
  width: 100%;
  height: 8vw;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  box-shadow: 0 8px 6px -6px #00000029;
  background-color: #0b002a;
`;

const StyledNavLink = styled(NavLink)`
  color: #ffffff;
  font-family: Pretendard;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:hover {
    opacity: 0.8;
  }
`;

const HeaderLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 3.4vw;
  margin-left: 3vw;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 3.4vw;
  margin-right: 3vw;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 1.45vw;
  width: 100%; /* 너비를 100%로 설정하여 더 많은 공간을 활용하세요. */
  align-items: center;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <NavContainer>
          <LeftSection>
            <HeaderLogo>
              <img
                src={Logo}
                style={{ width: '5.2vw', height: '5.2vw' }}
                alt="FairyTale Logo"
              />
            </HeaderLogo>
            <StyledNavLink to="/">홈</StyledNavLink>
          </LeftSection>
          <RightSection>
            <StyledNavLink to="/profile">마이페이지</StyledNavLink>
            <StyledNavLink to="/login">로그인</StyledNavLink>
            <StyledNavLink to="/signup">회원가입</StyledNavLink>
          </RightSection>
        </NavContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
