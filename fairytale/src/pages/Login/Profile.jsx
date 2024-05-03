import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import styled from 'styled-components';
import { useEffect } from 'react';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #0b002a;
  height: 150vw;
  align-items: center;
  padding-bottom: 4vw;
`;

const ProfileText = styled.p`
  color: #fefefe;
  font-family: Pretendard;
  font-size: 3vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  margin-bottom: 1.85vw;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  height: 30vw;
`;

const RowContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2vw;
  width: 60%;
  height: 30vw;
  background-color: green;
`;

const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2vw;
  padding-left: 1vw;
  width: 50%;
  background-color: rgb(105, 105, 105);
`;

const DragDropContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2vw;
  padding-left: 1vw;
  width: 50%;
  background-color: rgb(105, 105, 105);
  justify-content: flex-start;
  padding-right: 1vw;
`;
const UploadText = styled.p`
  color: #ffffff;

  font-family: Pretendard;
  font-size: 1.7vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  margin-bottom: 1vw;
`;

const DetailText = styled.p`
  color: #ffffff;
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  margin-bottom: 4vw;
`;

const UploadButton = styled.label`
  background-color: #f5f5f5;
  border: none;
  color: black;
  padding: 1vw 2vw; /* 패딩을 조절하여 버튼 크기 조정 가능 */
  font-family: Pretendard;
  font-size: 1vw;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
  width: 10vw; /* 버튼 너비를 15vw로 설정 */
  display: block; /* 블록 레벨 요소로 만들어 너비 적용 */
  margin: 0 auto; /* 가운데 정렬 */
`;

const HiddenInput = styled.input`
  display: none;
`;

const ImagePreview = styled.img`
  margin-top: 0.5vw;
  width: 12vw;
  height: 12vw;
  border-radius: 10px;
  object-fit: cover;
`;

const DragDropArea = styled.div`
  border: 2px dashed #fff; /* 점선 테두리 */
  border-radius: 10px;
  color: #fff;
  padding: 4vw;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.2); /* 반투명 배경 */
  margin-bottom: 2vw;
  font-size: 1vw;
`;

const AudioPreview = styled.audio`
  margin-top: 2vw;
  max-width: 100%; /* 오디오 플레이어의 최대 너비 설정 */
`;

const Profile = () => {
  // 이미지 관련 상태
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [imageName, setImageName] = useState('이미지를 여기로 드래그하세요');

  // 음성 관련 상태
  const [audioFile, setAudioFile] = useState(null);
  const [audioSrc, setAudioSrc] = useState('');
  const [audioName, setAudioName] = useState('음성파일을 여기로 드래그하세요');

  useEffect(() => {
    if (audioSrc) {
      return () => URL.revokeObjectURL(audioSrc);
    }
  }, [audioSrc]);

  const handleDragOver = (e) => e.preventDefault();
  const handleDropImage = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setImageName(file.name); // 드래그 앤 드롭으로 이미지 업로드 시 파일 이름 업데이트
    }
  };
  const handleDropAudio = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && /audio\/(mp3|wav|m4a)$/.test(file.type)) {
      setAudioFile(file);
      setAudioSrc(URL.createObjectURL(file)); // Update the source for audio preview
      setAudioName(file.name); // Update the audio file name
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setImageName(file.name);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setPreview(URL.createObjectURL(file));

      const formData = new FormData();
      formData.append('file', file);

      const authToken = localStorage.getItem('authToken');

      try {
        const response = await fetch(
          'http://13.125.16.41:8080/faceSwap/uploadImg',
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${authToken}`,
              // 'Authorization-Refresh': `Bearer ${refreshToken}`,
            },
            body: formData,
          }
        );
        if (response.ok) {
          console.log('Image upload successful');
          const responseData = await response.text();
          console.log(responseData);
        } else {
          const errorText = await response.text();
          console.error('Error uploading image:', errorText);
          alert('Error occurred: ' + errorText);
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const handleAudioUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('sample', file);

      const authToken = localStorage.getItem('authToken');
      const refreshToken = localStorage.getItem('refreshToken');

      try {
        const response = await fetch('http://13.125.16.41:8080/api/voice', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${authToken}`,
            // 'Authorization-Refresh': `Bearer ${refreshToken}`,
          },
          body: formData,
        });

        if (response.ok) {
          console.log('Audio upload successful');
          const responseData = await response.text();
          console.log(responseData);

          setAudioSrc(URL.createObjectURL(file));
          setAudioName(file.name);
        } else {
          const errorText = await response.text();
          console.error('Error uploading audio:', errorText);
          alert('Error occurred: ' + errorText);
        }
      } catch (error) {
        console.error('Error uploading audio:', error);
      }
    }
  };

  return (
    <>
      <Header />
      <Container>
        <ProfileContainer>
          <ProfileText>My Page</ProfileText>
          <RowContainer>
            <ImageUploadContainer>
              <UploadText>이미지 업로드</UploadText>
              <DetailText>
                얼굴 합성을 사용하려면 정면에서 촬영한 <br />
                얼굴이 가려지지 않은 사진을 업로드해주세요.
                <br />
                업로드 가능한 파일 형식은 JPG와 JPEG입니다.
                <br />
                파일 크기는 최대 5MB까지 가능합니다.
              </DetailText>
              <UploadText>미리보기</UploadText>
              {preview && <ImagePreview src={preview} alt="Image preview" />}
            </ImageUploadContainer>
            <DragDropContainer>
              <DragDropArea
                onDragOver={handleDragOver}
                onDrop={handleDropImage}
              >
                {imageName}
              </DragDropArea>
              <UploadButton htmlFor="image-upload">업로드하기</UploadButton>
              <HiddenInput
                id="image-upload"
                type="file"
                accept="image/jpeg, image/jpg"
                onChange={handleImageUpload}
              />
            </DragDropContainer>
          </RowContainer>
          <RowContainer2>
            <ImageUploadContainer>
              <UploadText>음성 업로드</UploadText>
              <DetailText>
                음성 파일을 업로드하여 AI 음성 합성 기능을 활용해보세요.
                <br />
                음성 데이터가 충분할수록 결과물의 질이 향상되므로, 최소 1분
                분량의 녹음을 권장합니다.
                <br />
                업로드 가능한 파일 형식은 .mp3, .wav, .m4a입니다.
                <br />
                파일 크기는 최대 2MB까지 가능합니다.
              </DetailText>
              <UploadText>미리듣기</UploadText>
              {audioSrc && <AudioPreview src={audioSrc} controls />}
            </ImageUploadContainer>
            <DragDropContainer>
              <DragDropArea
                onDragOver={handleDragOver}
                onDrop={handleDropAudio}
              >
                {audioName}
              </DragDropArea>
              <UploadButton htmlFor="audio-upload">업로드하기</UploadButton>
              <HiddenInput
                id="audio-upload"
                type="file"
                accept="audio/mp3, audio/wav, audio/mp4, audio/x-m4a"
                onChange={handleAudioUpload}
              />
            </DragDropContainer>
          </RowContainer2>
        </ProfileContainer>
      </Container>
    </>
  );
};

export default Profile;
