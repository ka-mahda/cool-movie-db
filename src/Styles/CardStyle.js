import styled from "styled-components";

let CardStyle = styled.div`
position:relative
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-item: center;
  width: 240px;
  background: transparent;
  padding: 0 20px;
  margin: 3.8rem 0px 0px;
  transition: 0.6s;
  height:480px;

  :hover {
    background-color: rgba(69, 162, 158, 0.35);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    backdrop-filter: blur(15px);
  }

  .posterNameMovie {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .posterNameMovie img {
    transition: 0.6s;
    border-radius: 50%;
    border: 8px solid #66fcf1;
    z-index: 10;
    overflow: hidden;
    width: 200px;
    height: 200px;
    transition: 0.6s;
  }
  .posterNameMovie h4 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #66fcf1;
    text-align: center;
    margin-top: 1rem;
  }
  :hover img {
    transform: translateY(-60px);
    border-radius: 24px;
    height: 300px;
  }
  :hover h4 {
    transform: translateY(-60px);
  }

  :hover .overview {
    opacity: 1;
    transform: translateY(-50px);
  }
  .movieName {
    text-align: center;
    background-color: #66fcf1;
  }

  .overview {
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height:40%;
  }
  
  .overview p {
    font-size: 0.8rem;
    font-weight: 400;
    color: #fff;
    text-align: justify;
    text-justify: inter-character;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

  }
  .overview .rating {
    margin:0 auto;
  }

`;

export default CardStyle;
