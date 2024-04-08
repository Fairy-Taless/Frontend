import Header from '../../components/Header/Header';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  /* background-color: yellow; */
  margin-top: 4vw;
  height: 50vw;
  align-items: center;
`;

const SignupText = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 3vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  margin-bottom: 5.65vw;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7.25vw;
  align-items: center;
  margin-bottom: 4vw;
`;

const Text = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 15%;
`;

const IdField = styled.input`
  width: 33.6vw;
  height: 2.4vw;
  flex-shrink: 0;
  border-radius: 0.2vw;
  border: 0.1vw solid #e1e1e1;
  background: #f7f7f7;
  padding-right: 6vw;
`;

const CheckButton = styled.button`
  position: absolute;
  right: 0.2vw;
  top: 0.2vw;
  width: 7vw;
  height: 2vw;
  border-radius: 0.2vw;
  border: none;
  border-radius: 4px;
  background: #0b002a;
  color: white; // 버튼 글자색
  cursor: pointer;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2vw;
`;

const AllFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IdFieldContainer = styled.div`
  position: relative;
  width: 33.6vw;
  height: 2.4vw;
`;

const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2vw;
`;

const CancelButton = styled.button`
  width: 7vw;
  height: 2.8vw;
  flex-shrink: 0;
  border-radius: 0.2vw;
  background: var(--2, #e1e1e1);
  color: #000;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2vw;
`;

const SubmitButton = styled.button`
  width: 7vw;
  height: 2.8vw;
  flex-shrink: 0;
  border-radius: 0.2vw;
  background: #0b002a;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2vw;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2vw;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Signup = () => {
  return (
    <>
      <Header />
      <Container>
        <SignupContainer>
          <SignupText>Sign Up</SignupText>
          <AllFieldContainer>
            <FieldContainer>
              <Text>아이디</Text>
              <IdField />
            </FieldContainer>
            <FieldContainer>
              <Text>비밀번호</Text>
              <IdField />
            </FieldContainer>
            <FieldContainer>
              <Text>닉네임</Text>
              <IdField />
            </FieldContainer>
          </AllFieldContainer>
          <ButtonContainer>
            <CancelButton>취소하기</CancelButton>
            <SubmitButton>가입하기</SubmitButton>
          </ButtonContainer>
        </SignupContainer>
      </Container>
    </>
  );
};

export default Signup;
