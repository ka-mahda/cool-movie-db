import styled from "styled-components";

let ActorBiographyStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 20px;
  background:var(--bg-color);
  border-top: 2px solid var(--border-color);

  .titleNameOfActor h2{
    font-family: Rubik, cursive;
    font-size: 2rem;
    text-align: center;
    color: var(--text-color);
    padding:2rem 0;
  }
  .titleNameOfActor h2 span {
    font-family: "Rubik Dirt", cursive;
    font-size: 2rem;
    text-align: center;
    color:var(--text-color);
    padding:2rem 0;
  }
  .actorInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .actorInfo .actorData{
    position:relative
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    height:460px;
    background: rgba(69,162,158,0.5);
    padding: 0 20px;
    margin: 3.8rem;
    border-radius:12px;
  }

  .actorInfo .actorData img{
    transform: translateY(-60px);
    border-radius: 12px;
    height: 300px;
  }

  .actorInfo .actorData h4{
    font-family: Rubik, cursive;
    font-size: 1.25rem;
    text-align: center;
    color: #66fcf1;
    transform: translateY(-60px);
    margin-top:1.5rem;
  }

  .actorInfo .actorData ul{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transform: translateY(-40px);
    margin:0 auto;
    padding:0;
  }

  .actorInfo .actorData ul li{
    list-style: none;
    padding-bottom:1rem;
    text-align:center;
  }

  .actorInfo .actorData ul li h5{
    font-size: 1rem;
    margin:0;
    color: var(--overview-color);
  }

  .actorInfo .actorData ul li span{
    margin:0;
    color: #66fcf1;
  }
  .actorInfo .actorBio{
    background: rgba(69,162,158,0.5);
    margin-right:3rem;
    border-radius: 12px;
    padding:1rem;
    line-height:2rem;
    height:460px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .actorInfo .actorBio h4{
    font-family: Rubik, cursive;
    font-size: 1.25rem;
    color: #66fcf1;
    padding-left:1.5rem;
  }
  .actorInfo .actorBio p{
    overflow:auto;
    font-family: Rubik, cursive;
    font-size: 1rem;
    color:  var(--overview-color);
    text-align:justify;
    padding:1.5rem;
    padding:top:0;
  }
 .actorFilmography{
    display: flex;
    flex-direction: column;
  }
  .actorFilmography .filmography{
    font-family: Rubik, cursive;
    font-size: 2rem;
    text-align: center;
    color: var(--text-color);
    padding:2rem 0;
  }
  .actorFilmography .filmographyCard{
    display:flex;
    justify-content:space-evenly;
    flex-wrap: wrap;  
  }

  @media only screen and (max-width: 448px) {
    .actorInfo{
      flex-direction:column;
    }
    .actorInfo .actorBio{
      margin:1rem;
    }
  }
`;

export default ActorBiographyStyle;
