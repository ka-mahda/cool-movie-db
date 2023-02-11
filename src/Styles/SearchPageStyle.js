import styled from "styled-components";

let SearchPageStyle = styled.div`
  width: 100%;
  background-color: #1f2833;
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  .searchResultContainer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
  }
  .searchResultContainer h2 {
    margin-top: 36px;
    font-family: "Rubik Dirt", cursive;
    font-size: 1.75rem;
    text-align: center;
    color: #66fcf1;
  }
  .searchResultContainer .searchCardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 48px;
  }
`;
export default SearchPageStyle;
