import styled from "styled-components";

let MovieDetailStyle = styled.section` 
    width : 100%;
    background-color:#1f2833;
    margin: 0px;
    padding: 1rem 1.5rem;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
}
.detailBoxSection{
width: 100%;
}
.detailBoxSection .titleOfDetails{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.detailBoxSection .titleOfDetails h3{
   margin-right:1rem; 
   color:#66fcf1;
   font-size:1.25rem;
   font-weight:300;
}
.detailBoxSection .titleOfDetails .line{
    border-bottom: 1.25px solid #66fcf1;
    flex-grow:1;
}
.showingDetails{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding:1rem;
    padding-left:0;
    
}
.showingDetails .splitter{
    padding:1rem;
    padding-left:1rem;
    border-right: 3px solid #66fcf1;
}
.showingDetails .posterMovie{
    max-width: 200px;
    max-height: 300px;
    height: auto;
    filter:blur(2px);
}

.showingDetails .trailerBox{
    padding-left:25%;
}

.castShow{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:1rem;
}

}

 `;

export default MovieDetailStyle;
