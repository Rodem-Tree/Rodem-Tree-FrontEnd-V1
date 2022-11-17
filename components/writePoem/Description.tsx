import styled from "@emotion/styled";

export default function Description() {
  return (
    <Container>
      <h2>시 작성하기🪶</h2>
      <Warning>
        <p>
          선정성, 폭력성 등을 포함, 부적절하다고 판단되었을 시 통보없이 삭제될
          수 있습니다.
        </p>
      </Warning>
      <Tip>
        <img src="/img/writepoem/bell.svg" alt="" />
        <p>작품 정보는 추후 수정이 가능합니다.</p>
      </Tip>
    </Container>
  );
}

const Container = styled.div`
  width: 66vw;
  margin-top: 50px;
`;

const Warning = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 40px;
  padding-left: 20px;
  border-left: 3px solid #e64980;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #f5f5f5;
  & > p {
    color: #5b5b5b;
  }
`;

const Tip = styled.div`
  gap: 14px;
  margin-top: 30px;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & > img {
    width: 4%;
  }
`;
