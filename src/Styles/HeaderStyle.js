import styled from 'styled-components';

let HeaderStyle = styled.header`
width : 100%;
height : 90px;
background-color: #1f2833;
margin: 0px;
padding: 0 24px;
display:flex;
justify-content: space-between;
align-items: center;

 .rightSideHeader{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.rightSideHeader .paletteMode{
    display:flex;
    justify-content:center;
    align-items: center;
    margin-right:1rem;
}
 .rightSideHeader .paletteMode select{
    display:none;
}
.rightSideHeader .paletteMode select option{

    
}
.rightSideHeader .assortment{
   display:flex; 
   justify-content:center;
   align-items: center;
}
`;


export default HeaderStyle;
