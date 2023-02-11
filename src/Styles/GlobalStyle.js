import { createGlobalStyle } from "styled-components";



// font-family: 'Rubik', sans-serif;
//font-family: 'Rubik Dirt', cursive;

const GlobalStyles = createGlobalStyle`
:root,:root.cool{
  --bg-color: #1f2833 ;
  --text-color: #66fcf1 ;
  --bg-url:url(../assets/images/galaxy.webp);
}
:root.snow{
  --bg-color: ;
  --text-color: ;
  --bg-url: ;
}
:root.sleek{
  --bg-color: ;
  --text-color: ;
  --bg-url: ;
}

*,*::after,*::before {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Rubik';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    --primary-dark : #1c1f54;
    --primary-dark-faded : #1c1f5460;
    --primary-light: #26c897;
    --primary-background: #191923;
    --secondary-light: #279ba1;
    --primary-button: #298cbe;
    --primary-purple: #5b326d;
    --primary-red: #a72a3c;
    --primary-link: #7bb0e8;
    --primary-text: #fff;
    --card-background:rgba(255,255,0255,0.25);
    --secondary-text:rgba(255,255,255,0.45);
    background-color: var(--primary-background);
    color: var(--primary-text);
  }
  .container {
    width: 100%;
    max-width: 1310px;
    margin: 0 auto;
  }
  h2, h3, h4,p {
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

`;

export default GlobalStyles;
