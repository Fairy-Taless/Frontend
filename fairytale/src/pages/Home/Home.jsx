import styled from 'styled-components';
import Header from '../../components/Header/Header';
import HomeBanner from '../../assets/images/fairybanner.png';
import Character from '../../assets/images/CinderellaPortrait.png';
import Fairy from '../../pages/Fairy/Fairy.jsx';
import { useNavigate } from 'react-router-dom';

const BannerContainer = styled.div`
  width: 100%;
  height: 27vw;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledBannerContainer = styled.div`
  width: 100%;
  height: 23vw;
  background-image: url(${HomeBanner});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CreatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-top: 7.65vw;
  margin-bottom: 7.5vw;
  height: 72vw;
  align-items: center;
`;

const Travelo = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const AlbumContainer = styled.div`
  margin-top: 2.4vw;
  display: flex;
  flex-direction: row;
  gap: 2.2vw;
  flex-wrap: wrap;
`;

const Album = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2vw;
  width: calc((100% - 2.2vw) / 2);
`;

const Detail = styled.div`
  width: 100%;
  height: 7.4vw;
  flex-shrink: 0;
  background: #0b002a;
  padding: 1.6vw 1.4vw 0.85vw 1.3vw;
  border-radius: 0 0 10px 10px; // 아래쪽 모서리만 둥글게
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AlbumImage = styled.img`
  width: 100%;
  height: 21vw;
  border-radius: 10px 10px 0 0;
`;

const Title = styled.p`
  color: #ffffff;
  font-family: Pretendard;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Made = styled.p`
  color: #ffffff;
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 1.5vw;
  margin-bottom: 1.3vw;
`;

const HashTag = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2vw; /* 171.429% */
`;

const AlbumData = [
  { id: 1, title: '신데렐라', hashtag: '#공주' },
  { id: 2, title: '앨범제목 2', hashtag: '#해시태그2' },
];

const Home = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 생성

  const handleAlbumClick = (albumId) => {
    if (albumId === 1) {
      // 첫 번째 앨범인 경우
      navigate('/Fairy'); // 다른 컴포넌트로 경로 이동
    }
  };

  return (
    <>
      <Header />

      <StyledBannerContainer></StyledBannerContainer>

      <Container>
        <CreatesContainer>
          <AlbumContainer>
            {AlbumData.map((album) => (
              <Album key={album.id} onClick={() => handleAlbumClick(album.id)}>
                <AlbumImage src={Character} alt="Album Image" />
                <Detail>
                  <TitleContainer>
                    <Title>{album.title}</Title>
                  </TitleContainer>
                  <Made>{album.hashtag}</Made>
                </Detail>
              </Album>
            ))}
          </AlbumContainer>
        </CreatesContainer>
      </Container>
    </>
  );
};

export default Home;
