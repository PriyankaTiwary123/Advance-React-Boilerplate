import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const DetailContainer = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  display: flex;
  margin-top: 32px;
  justify-content: space-around;
  @media (max-width: ${breakpoints.mobile}) {
    display: block;
  }
`;

export const AvatarImage = styled.img`
  border-radius: 20px;
  object-fit: cover;
  height: 450px;
  width: 50%;
  @media (max-width: ${breakpoints.mobile}) {
    object-fit: cover;
    border-radius: 0;
    height: 350px;
    width: 100%;
  }
`;

export const PetDetailsContainer = styled.div`
  width: 40%;
`;
export const PetDetailsContent = styled.div`
display: flex; 
line-height: 2;
justify-content: space-between;
flex-wrap: wrap; 
width: 100%; 
display: flex;
`
