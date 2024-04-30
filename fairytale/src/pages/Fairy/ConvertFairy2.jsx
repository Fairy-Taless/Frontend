import Header from '../../components/Header/Header';
import styled from 'styled-components';
import Cinderella from '../../assets/images/CinDetail.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftButtonImage from '../../assets/images/leftbutton.png';
import RightButtonImage from '../../assets/images/rightbutton.png';
import Cinscene1 from '../../assets/images/cinscene1.png';
import Scriptbg from '../../assets/images/scriptbackgr.png';
import CinGo from '../../assets/images/CinGo.png';

const LeftButton = styled.img`
  flex-shrink: 0;
  width: 3.9vw;
  height: 3.9vw;
  position: absolute;
  left: 18.9%;
  top: 61%;
  transform: translateY(-50%);
`;
const RightButton = styled.img`
  position: absolute;
  right: 19.2%;
  top: 61%;
  transform: translateY(-50%);
  width: 3.9vw;
  height: 3.9vw;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 13vw; // 상단으로부터의 거리
  right: 25.5vw; // 오른쪽으로부터의 거리
  background: none;
  border: none;
  color: white;
  font-size: 1.5vw;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 50vw;
  background-color: #0b002a;
`;

const CreatesContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 58%;
  margin-top: 3vw;
  margin-bottom: 7.5vw;
  height: 36vw;
  align-items: center;
  background-color: RGB(250, 237, 205);
  border-radius: 10px;
  box-shadow: 0px 0px 15px 5px rgba(255, 255, 255, 0.6); // 빛나는 테두리 효과 추가
`;

const DetailText = styled.p`
  color: #ececec;
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 1.3vw;
`;

const TextContainer = styled.div`
  width: 100%;
  padding-left: 1vw;
  padding-right: 1vw;
  align-items: center;
  text-align: center;
`;

const TitleP = styled.p`
  color: #ececec;
  font-family: Pretendard;
  font-size: 2vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 1.5vw;
  margin-bottom: 1.3vw;
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
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2vw;
  align-items: center;
  justify-content: center;
  margin-top: 1vw;
`;

const CheckboxLabel = styled.label`
  color: #ececec;
  font-family: Pretendard;
  font-size: 0.8vw;
  margin-left: 0.5vw;
`;

const CustomCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  position: absolute;
  width: 1px; // 수정됨
  height: 1px; // 수정됨
  margin: -1px; // 추가됨
  overflow: hidden; // 추가됨
`;

const StyledCheckbox = styled.div`
  width: 20px;
  height: 20px;
  background: ${(props) => (props.checked ? '#5e81ff' : 'transparent')};
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid #ececec;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  // 체크 표시 제거
  ${HiddenCheckbox}:checked + &::after {
    content: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 1vw;
`;

const LetterContainer = styled.div`
  position: relative; /* Add this line */
  width: 100%;
  height: 100%;
  border-radius: 0px 10px 10px 0px;
`;

const ImgContainer = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

const ScriptP = styled.p`
  margin-left: 2.5vw;
  margin-right: 2.5vw;
  position: absolute;
  top: 5vw;
  left: 0;
  padding: 1vw;
  color: #000000;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1.3vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5vw;
  z-index: 1;
`;

const ScriptP2 = styled.p`
  margin-left: 2.5vw;
  margin-right: 2.5vw;
  position: absolute;
  top: 10vw;
  left: 0;
  padding: 1vw;
  color: #000000;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1.3vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5vw;
  z-index: 1;
`;

const ScriptP3 = styled.p`
  margin-left: 2.5vw;
  margin-right: 2.5vw;
  position: absolute;
  top: 20vw;
  left: 0;
  padding: 1vw;
  color: #000000;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1.3vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5vw;
  z-index: 1;
`;

const ConvertFairy2 = () => {
  const navigate = useNavigate();
  const [voiceChecked, setVoiceChecked] = useState(false);
  const [faceChecked, setFaceChecked] = useState(false);
  const [image, setImage] = useState(null);
  const [audioFile, setAudioFile] = useState(null);

  const handleClose = () => {
    navigate('/');
  };

  const GoBack = () => {
    navigate('/ConvertFairy');
  };

  return (
    <>
      <Header />
      <Container>
        <CreatesContainer>
          <CloseButton onClick={handleClose}>X</CloseButton>
          <LeftButton
            onClick={GoBack}
            src={LeftButtonImage}
            alt="Left Button"
          />
          <img
            src={CinGo}
            style={{
              width: '27vw',
              height: '100%',
              borderRadius: '10px 0px 0px 10px',
            }}
          />

          <LetterContainer>
            <img
              src={Scriptbg}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '0px 10px 10px 0px',
              }}
            />
            <ScriptP>
              자정의 종소리가 긴박하게 울려퍼지자, 신데렐라는 급히 무도회장을
              빠져 나가야 한다는 것을 깨달았습니다. 그녀는 왕자와의 춤을 멈추고,
              급히 사람들을 해치며 대담하게 달려나갑니다.
            </ScriptP>
            <ScriptP2>
              <br />
              <br />
              <br /> "아, 안돼, 벌써 자정이라니!... 이 모든 것이 끝나기 전에
              저는 이만 가봐야해요...정말 미안해요..."
            </ScriptP2>

            <ScriptP3>
              <br />
              발길을 재촉하는 가운데, 신데렐라는 불안하고 초조한 눈빛으로 뒤를
              한번 돌아보고는 어둠 속으로 사라집니다.
            </ScriptP3>
          </LetterContainer>
          <RightButton src={RightButtonImage} alt="Right Button" />
        </CreatesContainer>
      </Container>
    </>
  );
};
export default ConvertFairy2;
