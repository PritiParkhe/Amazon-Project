import React from 'react';
import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';
import { useStateValue } from '../StateProvider'; // Assuming it's named useStateValue

function Card({ id, image, title, price, rating }) {
  const [{basket}, dispatch] = useStateValue(); // Destructuring the state, not using basket
  console.log("basket>>",basket);
  const addToBasket = (e) => {
    e.preventDefault();

    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        price,
        image,
        rating,
      },
    });
  };
  
  
  return (
    <Container>
      <Image>
        <img src={image} alt="" />
      </Image>
      <Decription>
        <h5>{title} </h5>
        <Rating name="half-rating" 
        defaultValue={rating} 
        precision={0.5} />
        <p>₹ {price}</p>
        <button onClick={addToBasket}>Add to Cart</button>
      </Decription>
    </Container>
  );
}
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
background-color: #fff;
z-index: 10;


  
`;
const Image = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 20px;
img{
    width: 180px;
    height: 200px;
    
}

`;
const Decription = styled.div`
width: 90%;
margin: auto;
display: flex;
flex-direction: column;
justify-content: space-evenly;
flex: 0.7;
h5{
    font-size: 16px;
    font-weight: 600;
}
p{
    font-weight: 600;

}
button{
    width: 100%;
    height: 33px;
    background-color: #fa8900;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}
  /* Your styles for the Card container */
`;

export default Card;
