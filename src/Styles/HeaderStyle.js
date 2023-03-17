import styled from 'styled-components';

let HeaderStyle = styled.header`
width : 100%;
height : 90px;
background-color: var(--bg-color);
margin: 0px;
padding: 0 24px;
display:flex;
justify-content: space-between;
align-items: center;

 .leftSideHeader{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.leftSideHeader .header-toggle-buttons button{
  background:transparent;
  border:2px solid var(--text-color);
  color:var(--text-color);
  margin-left:1rem;
  font-size:1.15rem;
  border-radius:0.5rem;
}
 .leftSideHeader div.MuiBox-root.css-1n3h4wo{
  background:yellow !important;
 }
`;


export default HeaderStyle;
