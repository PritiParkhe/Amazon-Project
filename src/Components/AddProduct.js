import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components'

function AddProduct() {
    // to store the typed inside the input tag in state variable using  usestate hook 
const [title, setTitle]  = useState("");
const [imageURL, setImageURL]  = useState("");
const [price, setPrice]  = useState("0");
const [rating, setRating]  = useState("0");


const addProduct = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/products/add', { title, imageURL, price, rating }).then(() =>{
    setTitle('');
    setImageURL('');
    setPrice(0);
    setRating(0);
}).catch((error)=> alert (error.message));


};
  return (
    <Container>
      <Logo>
        <img src='amazon_logo.png' alt=''/>
      </Logo>
      
      <FormContainer>
        <h3>Add Product</h3>

        <InputContainer onChange={(e) => setTitle(e.target.value)} value = {title}>
          <p>Title</p>
          <input type='text' />
        </InputContainer>

        <InputContainer  onChange={(e) => setImageURL(e.target.value)} value = {imageURL}>
          <p>ImageURL</p>
          <input type='text'  /> 
        </InputContainer>
        
        <InputContainer onChange={(e) => setPrice(e.target.value)} value = {price}>
          <p>Price</p>
          <input type='number'  /> 
        </InputContainer>

        <InputContainer onChange={(e) => setRating(e.target.value)} value = {rating}>
          <p>Rating</p>
          <input type='number'  /> 
        </InputContainer>
        
        <Button onClick={addProduct}>Add Product</Button>

                    
        
      </FormContainer>
    </Container>
  )
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
  height: fit-content;
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

const Button = styled.button`
  width: 70%;
  height: 35px;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;

export default AddProduct
