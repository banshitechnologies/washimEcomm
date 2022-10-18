import styled from 'styled-components';

const Container = styled.div`
   width: 100%;
   height: 100vh;
   background-color: coral;
   
   position: relative;
    display: flex;
`

const LeftArrow = styled.div`
    background-color: white;
    padding: 16px;
    display: flex;
    height: 30px;
    width: 70px;
    align-items: center;
    justify-content: center;
   position: absolute;
   top: 0;
   bottom: 0;
    left : 10px;
   margin: auto;
   cursor: pointer;
   opacity: 0.5
`

const RightArrow = styled.div`
    background-color: white;
    padding: 16px;
    display: flex;
    height: 30px;
    width: 70px;
    align-items: center;
    justify-content: center;
   position: absolute;
   top: 0;
   bottom: 0;
    right : 10px;
   margin: auto;
   cursor: pointer;
   opacity: 0.5
`

const Wrapper = styled.div`
  width: 100%;

`
const Slide = styled.div`
    display: flex;
    align-items: center;

`
const ImageContainer = styled.div`
    flex: 1;
    height: 100vh
`
const Image = styled.img`
  width: 100%;
`
const InfoContainer = styled.div`
    flex: 1;
`
function Slider() {
  return (
    <Container>
      <LeftArrow direction="left">
        NEXT
      </LeftArrow>
        <Wrapper>
          <ImageContainer>
            <Image src='https://www.thedollarbusiness.com/assets/articles/2015/04/Khadi-The-Dollar-Business.jpg'/>
          </ImageContainer>
          <InfoContainer></InfoContainer>
        </Wrapper>
      <RightArrow direction="right">
        NEXT
      </RightArrow>
    </Container>
  )
}

export default Slider