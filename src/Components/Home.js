import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Card from './Card';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/products/get");
        setProducts(response.data);
        console.log('products>>>>', response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div>
      <Container>
        <Navbar />
        <Banner>
          <img src="./banner.jpg" alt="" />
          <img src="./mobile_banner.jpg" alt="" />
        </Banner>
        <Main>
          {products && products.map((product) => (
            <Card
              key={product._id} // Added key prop for optimization and to remove ESLint warning
              id={product._id}
              image={product.imageURL}
              price={product.price}
              rating={product.rating}
              title={product.title}
            />
          ))}
        </Main>
      </Container>
    </div>
  );
}



const Container = styled.div`
    width: 100%;
    background-color: rgb(234,237,237);
    max-width: 1400px;
    margin: auto;
    height: fit-content;

`;
const Banner = styled.div`
  width: 100%;
  img {
    width: 100%;
    mask: linear-gradient(to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0)
    );
    &:nth-child(2){
      display: none;
    }
    @media only screen and (max-width: 767px) {
      &:nth-child(1){
        display: none;
      }
      &:nth-child(1){
        display: block;
        mask:none
      }
      
    }
}

`;
const Main =styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;

  grid-auto-rows: 420px;
  grid-template-columns: repeat(4,300px);
  grid-gap: 20px;
  /* For mobiles */
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2,50%);
    grid-gap: 0;
    
  }
  /* For Tablets */
  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3,30%);
    
    
  }
  /* for dekstop */
  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0px;
    
  }

`;

export default Home;
