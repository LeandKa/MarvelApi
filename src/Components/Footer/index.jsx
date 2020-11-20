import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
   display:flex;
   justify-content:center;
   flex-direction:row;
`
const Link = styled.a`
  text-decoration:none;
  color:black;
  margin-left:0.2rem;
  &:hover{
    color:black;
    text-decoration:none;
  }
`

export default function index() {
    return (
        <Container>
            2020, made by <Link href="https://github.com/LeandKa">Leandro Cavalcanti</Link>
        </Container>
    )
}
