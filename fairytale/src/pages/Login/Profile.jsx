import Header from '../../components/Header/Header';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  /* background-color: yellow; */
  margin-top: 4vw;
  height: 50vw;
  align-items: center;
`;

const ProfileText = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 3vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  margin-bottom: 1.85vw;
`;

const ProfileImage = styled.div`
  width: 12vw;
  height: 12vw;
  flex-shrink: 0;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  background-image: url('https://via.placeholder.com/150'); // 임시 이미지 URL, 실제 프로필 이미지 URL로 교체 필요
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
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

const Field = styled.div`
  width: 25vw;
  height: 2.4vw;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #e1e1e1;
  background: #f7f7f7;
  color: var(--6, #414141);
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  align-items: center;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.35vw;
  align-items: center;
  margin-bottom: 2vw;
  margin-top: 3.9vw;
`;

const IdField = styled.input`
  width: 25vw;
  height: 2.4vw;
  flex-shrink: 0;
  border-radius: 0.2vw;
  border: 0.1vw solid #e1e1e1;
  background: #f7f7f7;
  padding-right: 6vw;
`;

const AllFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  background: #0034ed;
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
  margin-top: 2vw;
`;

const Profile = () => {
  return (
    <>
      <Header />
      <Container>
        <ProfileContainer>
          <ProfileText>Profile</ProfileText>
          <ProfileImage>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 240 240"
              fill="none"
            >
              <circle
                cx="120"
                cy="120"
                r="119.5"
                fill="white"
                stroke="#C2C2C2"
              />
            </svg>
          </ProfileImage>
          <AllFieldContainer>
            <FieldContainer>
              <Text>닉네임</Text>
              <IdField />
            </FieldContainer>
            <FieldContainer>
              <Text>비밀번호</Text>
              <IdField />
            </FieldContainer>
            <FieldContainer>
              <Text>한 줄 소개</Text>
              <IdField />
            </FieldContainer>
          </AllFieldContainer>
          <ButtonContainer>
            <CancelButton>취소하기</CancelButton>
            <SubmitButton>저장하기</SubmitButton>
          </ButtonContainer>
        </ProfileContainer>
      </Container>
    </>
  );
};

export default Profile;
