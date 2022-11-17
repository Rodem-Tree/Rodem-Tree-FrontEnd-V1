import styled from "@emotion/styled";
import { mentalFoodDocs } from "docs/MentalFoodDocs";

export default function MentalFood() {
  return (
    <Container>
      <Wrapper>
        <Title>
          <span>로뎀나무</span>
          <h2>마음의 양식을 채웁니다</h2>
        </Title>
        <Shortcut>
          {mentalFoodDocs.map((food, i) => (
            <Frame key={i}>
              <img src={food.img} alt="" />
              <p>{food.title}</p>
              <span>{food.content}</span>
            </Frame>
          ))}
        </Shortcut>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 200px 0 0;
  background-color: #f5f5f5;
`;

const Wrapper = styled.div`
  width: 80vw;
`;

const Title = styled.div`
  margin: 60px 0 50px 0;
  & > span {
    color: #e64980;
    font-size: 20px;
    font-weight: 600;
    line-height: 40px;
  }
  & > h2 {
    margin: 0;
    font-size: 40px;
  }
`;

const Shortcut = styled.div`
  margin: 0 0 60px;
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Frame = styled.div`
  width: 500px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  & > img {
    width: 100%;
  }
  & > p {
    margin: 10px 0 0 0;
    font-size: 20px;
    font-weight: 600;
  }
  & > span {
    font-size: 18px;
  }
`;
