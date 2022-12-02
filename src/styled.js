import styled, {keyframes} from 'styled-components';


const foggyKeyframes = keyframes`
  0% {
    translate: 0px 0 0px;
  }
  50% {
    translate: -100px 0 0px;
  }
  100% {
    translate: 0px 0 0px;
  }
`;

const MainContainer = styled.div`
  background-color: #b2adad;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const FoggyBackground = styled.img`
  width: 150%;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  animation-name: ${foggyKeyframes};
  animation-iteration-count: infinite;
  animation-duration: 5s;
  animation-timing-function: linear;
`;

const IconImage = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 0.75s, transform 0.25s;
  top: ${({top}) => top && (top)};
  bottom: ${({bottom}) => bottom && (bottom)};
  left: ${({left}) => left && (left)};
  right: ${({right}) => right && (right)};

  &:hover {
    opacity: 1;
    transform: scale(1, 1);
  }
`;

export {
  FoggyBackground,
  IconImage,
  MainContainer,
}