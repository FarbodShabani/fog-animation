import "./styles.css";
import { MainContainer, FoggyBackground, IconImage } from "./styled";

export default function App() {
  const iconArray = [
    { top: "100px", left: "50px", right: null, bottom: null },
    { top: "230px", left: "430px", right: null, bottom: null },
    { top: "150px", left: null, right: "50px", bottom: null },
    { top: "200px", left: "500px", right: null, bottom: null },
    { top: null, left: "50px", right: null, bottom: "100px" },
    { top: null, left: null, right: "320px", bottom: "100px" },
    { top: null, left: null, right: "750px", bottom: "350px" }
  ];

  return (
    <MainContainer>
      Can you find all of the CSS icons?
      <FoggyBackground
        src="https://www.transparentpng.com/thumb/fog/fog-png-pictures-4.png"
        alt="foggy background"
      />
      {iconArray.map((iconPosition, index) => (
        <IconImage
          src="https://img.icons8.com/color/512/css3.png"
          top={iconPosition.top}
          bottom={iconPosition.bottom}
          left={iconPosition.left}
          right={iconPosition.right}
          key={index}
        />
      ))}
    </MainContainer>
  );
}
