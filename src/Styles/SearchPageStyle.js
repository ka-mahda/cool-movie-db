import styled from "styled-components";

let SearchPageStyle = styled.div`
  width: 100%;
  background-color: var(--bg-color);
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
    color: var(--text-color);
  }
  .searchResultContainer .searchCardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 48px;
  }

  @media only screen and (max-width: 768px) {
    .searchContainer .leftSideSearchContainer, .searchContainer .rightSideSearchContainer{
     display:none;
    }
    .searchContainer .middleSearchContainer{
      width:100%;
    }
  }
  @media only screen and (max-width: 448px) {
    .searchContainer{
      height:200px;
    }
    .searchContainer .middleSearchContainer{
      margin:0 1rem;
    }
    .searchContainer .middleSearchContainer h2, .searchContainer .middleSearchContainer h2 span{
      font-size: 0.75rem;
    }
  }
`;
export default SearchPageStyle;
