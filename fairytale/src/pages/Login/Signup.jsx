import React, { useState } from 'react';
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
  padding: 1vw;
`;

const RadioButton = styled.input.attrs({ type: 'radio' })`
  margin-right: 0.5vw;
  appearance: auto;
`;

const RadioButtonLabel = styled.label`
  margin-right: 2vw;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2vw;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const SubmitButton = styled.button`
  width: 7vw;
  height: 2.8vw;
  flex-shrink: 0;
  border-radius: 0.2vw;
  background: #5e81ff;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2vw;
  cursor: pointer;
`;

const Signup = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('MALE');

  const handleSignup = async () => {
    const requestBody = {
      loginId,
      password,
      gender,
      username,
    };

    try {
      const response = await fetch('http://13.125.16.41:8080/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error('Failed to signup:', error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <SignupContainer>
          <SignupText>Sign Up</SignupText>
          <FieldContainer>
            <Text>아이디</Text>
            <IdField
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
            />
          </FieldContainer>
          <FieldContainer>
            <Text>비밀번호</Text>
            <IdField
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FieldContainer>
          <FieldContainer>
            <Text>닉네임</Text>
            <IdField
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FieldContainer>
          <FieldContainer>
            <Text>성별</Text>
            <RadioButton
              name="gender"
              value="MALE"
              checked={gender === 'MALE'}
              onChange={() => setGender('MALE')}
            />
            <RadioButtonLabel>남성</RadioButtonLabel>
            <RadioButton
              name="gender"
              value="FEMALE"
              checked={gender === 'FEMALE'}
              onChange={() => setGender('FEMALE')}
            />
            <RadioButtonLabel>여성</RadioButtonLabel>
          </FieldContainer>
          <ButtonContainer>
            <SubmitButton onClick={handleSignup}>가입하기</SubmitButton>
          </ButtonContainer>
        </SignupContainer>
      </Container>
    </>
  );
};

export default Signup;
