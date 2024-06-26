import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
height: calc(100vh - 56px);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: ${({theme})=>theme.text};

`
const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: ${({theme})=>theme.bglighter};
padding: 20px 50px;
border: 1px solid ${({theme})=>theme.soft};
gap: 10px;
`

const Title = styled.h1`
font-size:24px;

`

const SubTitle = styled.h2`
font-size:20px;
font-weight: 300;
`

const Input = styled.input`
border: 1px solid ${({theme})=>theme.soft};
border-radius: 3px;
padding: 10px;
background-color: transparent;
width: 100%;
`

const Button  = styled.button`
border-radius: 3px;
border: none;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
background-color:${({theme})=>theme.soft} ;
color: ${({theme})=>theme.textSoft};
`

const More = styled.div`
display: flex;
font-size: 12px;
margin-top: 10px;
color: ${({theme})=>theme.textSoft};

`

const Links = styled.div`
margin-left: 50px;
`

const Link = styled.span`
margin-left: 30px;
`

const SignIn = () => {

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to wd</SubTitle>
        <Input placeholder='username'/>
        <Input placeholder='password'/>
        <Button>Sign in</Button>
        <Title>or</Title>
        <Input placeholder='username'/>
        <Input placeholder='emai'/>
        <Input placeholder='password'/>
        <Button>Sign up</Button>
        
      </Wrapper>
      <More>
        English(usa)
      <Links>
     <Link>Help</Link>
     <Link>Privacy</Link>
     <Link>Terma</Link>
     </Links>
     </More>
    </Container>
 
  )
}

export default SignIn