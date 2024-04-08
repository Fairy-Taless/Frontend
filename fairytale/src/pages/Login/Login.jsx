import Header from '../../components/Header/Header';
import styled from 'styled-components';
// import kakao from '../../assets/images/kakao.png';
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  /* background-color: yellow; */
  margin-top: 4vw;
  height: 40vw;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.9vw;
  gap: 1.5vw;
  margin-bottom: 1vw;
`;

const InputField = styled.input`
  width: 40vw;
  height: 3.2vw;
  border-radius: 5px;
  border: 1px solid var(--Gray-Gray-300, #d1d1d1);
  padding-left: 0.8vw;
  font-size: 1vw;

  ::placeholder {
    color: var(--6, #414141);
    font-family: Pretendard;
    font-size: 1vw;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const LoginText = styled.p`
  color: #0b002a;
  font-family: Pretendard;
  font-size: 3vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
`;

const FindText = styled.p`
  color: var(--6, #414141);
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const LoginBtn = styled.button`
  margin-top: 2vw;
  width: 40vw;
  height: 3vw;
  flex-shrink: 0;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.9vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 0.5vw;
  background: var(--MAIN, #0b002a);
  margin-bottom: 0.8vw;
`;

const JoinBtn = styled.button`
  width: 40vw;
  height: 3vw;
  flex-shrink: 0;
  border-radius: 0.5vw;
  border: 1px solid var(--MAIN, #0b002a);
  color: #000;
  font-family: Pretendard;
  font-size: 0.9vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Simplecontainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2vw;
`;

const SimpleStroke = styled.div`
  width: 16vw;
  height: 0px;
  flex-shrink: 0;
  stroke-width: 1px;
  stroke: var(--2, #902a2a);
`;

const KakaoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2vw;
  margin-top: 1.2vw;
`;
const SimpleText = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <LoginContainer>
          <LoginText>Login</LoginText>
          <InputContainer>
            <InputField placeholder="아이디를 입력해주세요"></InputField>
            <InputField placeholder="비밀번호를 입력해주세요"></InputField>
          </InputContainer>
          <LoginBtn>로그인하기</LoginBtn>
          <JoinBtn>회원가입하기</JoinBtn>
        </LoginContainer>
      </Container>
    </>
  );
};

export default Login;
