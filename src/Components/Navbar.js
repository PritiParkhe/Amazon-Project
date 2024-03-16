import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { useStateValue } from '../StateProvider'; // Assuming it's named useStateValue
import { useNavigate } from 'react-router-dom'; // Importing useNavigate instead of Navigate

function Navbar() {
  const [{ basket }] = useStateValue();
  const navigate = useNavigate(); // Renamed to navigate
  return (
    <Container>
      <Inner>
        <Logo>
          <img src='amazon_logo1.png' alt=''/>
        </Logo>
        <SearchBar>
          <input type='text' placeholder='Search...'/>
          <SerchIcon onClick={() => navigate("/addproduct")}>
            <FontAwesomeIcon icon={faSearch} />
          </SerchIcon>
        </SearchBar>
        <RightContainer>
          <NavButton>
            <p>Hello,</p>
            <p>Guest</p>
          </NavButton>
          <NavButton>
            <p>Return</p>
            <p> & Orders</p>
          </NavButton>
          <BasketButton onClick={() => navigate('./checkout')}> {/* Changed Navigate to navigate */}
            <FontAwesomeIcon icon={faShoppingBasket} className="basket-icon" />
            <p>{basket?.length}</p>
          </BasketButton>
        </RightContainer>
      </Inner>
      <MobileSearchBar>
          <input type='text' placeholder='Search...'/>
          <SerchIcon onClick={() => navigate("/addproduct")}>
            <FontAwesomeIcon icon={faSearch} />
          </SerchIcon>
        </MobileSearchBar>
        
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #131921;
  display: flex;
  align-items: center;
  position: relative;
  
  
  @media only screen and (max-width: 767px) {
    height: 120px;
    flex-direction: column;

    
  }
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media  only screen and (max-width: 767px){
    justify-content: space-between;
    
  }
`;

const Logo = styled.div`
  margin-left: 20px;
  cursor: pointer;
  img{
    width: 100px;
    margin-top: 10px;
  }
`;

const SearchBar = styled.div`
  height: 35px;
  flex: 1;
  margin: 0px 15px;
  display: flex;
  align-items: center;
  input{
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;
    &::placeholder{
      padding-left: 5px;
    }
  }
  @media only screen and (min-width: 767px){
    display: none;
  }
  `;

const SerchIcon = styled.div`
  background-color: #febd69;
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 5px 0px ;
  svg {
    color: #fff;
    font-size: 18px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-around;
  height: 100%;
  padding: 5px 15px;

  
`;

const NavButton = styled.div`
  color: #fff;
  padding: 5px;
  height: 80%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-right: 15px;
  p {
    &:nth-child(1){
      font-size: 12px;
    }
    &:nth-child(2){
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

const BasketButton = styled.div`
  display: flex;
  align-items: center;
  height: 90%;
  cursor: pointer;
  .basket-icon {
    width: 30px;
    height: 100%;
    color: #fff;
    margin-right: 10px;
    background-color: #131921;
  }
  p{
    color: #fff;
    font-weight: 600;
  }
`;
const MobileSearchBar = styled.div`
  height: 35px;
  width: 90%;
  display: flex;
  align-items: center;
  padding: 10px;
  input{
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;
    &::placeholder{
      padding-left: 10px;
    }
  }
  @media only screen and (max-width: 767px){
    display: none;
    
  }
`;

export default Navbar;


