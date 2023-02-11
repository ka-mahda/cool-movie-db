import styled from 'styled-components';

let FooterStyle = styled.footer`
width : 100%;
height : 280px;
background-image: linear-gradient(to right, #45a29e, #66fcf1);
margin: 0px;
padding: 0 24px;
display:flex;
justify-content: space-between;
align-items: center;

 .rightSideFooter{
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
}
.rightSideFooter .developerInfo{
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;
   
}
.rightSideFooter .developerInfo .devName p{
    font-size:1rem;
    color:#1f2833;
    margin-bottom:0.5rem;
    font-weight:600;
}
.rightSideFooter .developerInfo .devName .nameDeveloper{
    font-size:1.2rem;
    font-weight:bold;
    color:#45a29e;
    text-align:center;
}
.rightSideFooter .developerInfo .links{
    margin-top:0.75rem;
    display: flex;
    align-items:center;
    justify-content: space-between;
}
`;


export default FooterStyle;
