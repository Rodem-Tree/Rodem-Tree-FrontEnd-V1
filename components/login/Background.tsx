import styled from "@emotion/styled";

export default function Background() {
  return (
    <>
      <Container>
        <Circle1 />
        <Deco>
          <Circle2 />
          <Circle3 />
        </Deco>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Circle1 = styled.div`
  position: absolute;
  top: -100px;
  right: -220px;
  width: 500px;
  height: 500px;
  border-radius: 250px;
  background-color: #e64980;
  opacity: 0.7;
`;

const Deco = styled.div`
  width: 100%;
  height: 100%;
`;

const Circle2 = styled.div`
  position: absolute;
  bottom: 300px;
  left: -40px;
  width: 170px;
  height: 170px;
  border-radius: 250px;
  background-color: #e64980;
  opacity: 0.7;
`;

const Circle3 = styled.div`
  position: absolute;
  bottom: -100px;
  left: -170px;
  width: 470px;
  height: 470px;
  border-radius: 250px;
  background-color: #e64980;
  opacity: 0.7;
`;
