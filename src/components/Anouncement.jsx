import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500
`
function Anouncement() {
  return (
    <Container>Super Deal 50% Off On Every Product</Container>
  )
}

export default Anouncement