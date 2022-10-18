import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    display:flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`
const Lang = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-waight: bold;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    padding: 5px;
    margin-left: 10px;
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    padding-left: 25px;
    padding: 5px;
    margin-left: 10px;
`

const Input = styled.input`
    border: none;
    padding: 5px;
    outline: none;
`
const SearchText = styled.span`
    textalign: right;
    cursor: pointer;
    color: #8d918c;
    font-size: 14px;
    font-weight: bold;
`
function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Lang>ENG</Lang>
                    <SearchContainer>
                        <Input />
                        <SearchText> Search </SearchText>
                    </SearchContainer>

                </Left>
                <Center>
                    <Logo>PURE KHADI</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>CART</MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar