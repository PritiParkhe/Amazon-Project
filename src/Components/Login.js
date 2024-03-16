import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
      <Logo>
        <img src='amazon_logo.png' alt=''/>
      </Logo>
      
      <FormContainer>
        <h3>Sign In</h3>

        <InputContainer>
          <p>Email</p>
          <input type='email' placeholder='expample@example.com'/>
        </InputContainer>

        <InputContainer>
          <p>Password</p>
          <input type='password' placeholder='********' /> 
        </InputContainer>
        
        <LoginButton>Login</LoginButton>

        <InfoText>
          By continuing, you agree to Amazon's 
          <span> Conditions of Use </span>and
          <span> Privacy Notice </span> 
        </InfoText>               
        
      </FormContainer>
      <CreateAccountButton>Create Account in Amazon</CreateAccountButton>
    </Container>
  );
}

const Container = styled.div`
  width: 40%;
  min-width: 450px;
  height: fit-content;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  img{
        width: 120px;
        margin-bottom: 20px;

    };
`;

const FormContainer = styled.div`
  border: 1px solid lightgray;
  width: 55%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;
`;

const LoginButton = styled.button`
  width: 70%;
  height: 35px;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;

const InfoText = styled.div`
  font-size: 12px;
  width: 100%;
  word-wrap: normal;
  word-break: normal;
  margin-top: 20px;

  span {
    color: #426bc0;
  }
`;

const CreateAccountButton = styled.button`
  width: 55%;
  height: 35px;
  font-size: 12px;
  margin-top: 20px;

  &:hover {
    background-color: #dfdfdf;
    border: 1px solid gray;
  }
`;

export default Login;
