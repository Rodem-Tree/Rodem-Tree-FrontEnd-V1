import styled from "@emotion/styled";

export default function Introduction() {
  return (
    <Container>
      <Title>
        <span>로뎀나무</span>
        <h2>나의 생각과</h2>
        <h2>나의 마음을</h2>
        <h2>시로 표현해보세요</h2>
        <p>모든 사람의 가치 있는 생각을 시로 기록합니다.</p>
      </Title>
      <Shortcut>
        <PoemRoute>
          <span>시 작성하기</span>
          <p>#나도_신인_작가</p>
          <p>#생각을_공유하다</p>
          <p>#마음을_표현하다</p>
          <p>#일상을_기록하다</p>
        </PoemRoute>
        <Image src="/img/main/WritePoem.png"></Image>
      </Shortcut>
    </Container>
  );
}

const Container = styled.div`
  width: 80vw;
  margin-top: 200px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Title = styled.div`
  color: #000;
  & > span {
    margin: 0 0 6px 0;
    color: #e64980;
    font-size: 20px;
    font-weight: 600;
  }
  & > h2 {
    margin: 0;
    font-size: 44px;
    line-height: 80px;
  }
  & > p {
    margin: 20px 0 0 0;
    font-size: 22px;
  }
`;

const Shortcut = styled.div`
  position: relative;
  width: 600px;
  height: 560px;
`;

const PoemRoute = styled.div`
  width: 320px;
  height: 380px;
  padding: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border-radius: 26px;
  color: #fff;
  background-color: #e64980;
  & > span {
    margin: 0 0 10px 0;
    font-size: 30px;
    font-weight: 600;
  }
  & > p {
    margin: 0;
    font-size: 24px;
    line-height: 50px;
    color: #e7e7e7;
  }
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60%;
`;
