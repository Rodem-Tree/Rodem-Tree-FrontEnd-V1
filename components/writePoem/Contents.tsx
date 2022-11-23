import styled from "@emotion/styled";

export default function Contents() {
  return (
    <Container>
      <Title>
        <p>시 제목</p>
        <input type="text" placeholder="시 제목을 입력해주세요" />
      </Title>
      <Content>
        <p>시 내용</p>
        <textarea placeholder="시 내용을 입력해주세요"></textarea>
      </Content>
      <Button>시 등록하기</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 66vw;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.div`
  width: 100%;
  & > p {
    font-size: 16px;
    font-weight: 600;
  }
`;

const Title = styled(Input)`
  & > input {
    width: 100%;
    height: 58px;
    padding-left: 30px;
    outline: none;
    border-radius: 3px;
    border: 1px solid #979797;
    font-size: 15px;
    background-color: #f5f5f5;
  }
`;

const Content = styled(Input)`
  margin-top: 20px;
  & > textarea {
    width: 100%;
    height: 300px;
    padding: 30px 0 0 30px;
    outline: none;
    border-radius: 3px;
    border: 1px solid #979797;
    resize: none;
    font-size: 15px;
    background-color: #f5f5f5;
  }
`;

const Button = styled.button`
  width: 380px;
  height: 50px;
  margin-top: 40px;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 600;
  border-radius: 6px;
  color: #fff;
  background-color: #e64980;
`;
