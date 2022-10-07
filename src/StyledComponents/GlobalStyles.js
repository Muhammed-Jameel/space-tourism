import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap');

h1 { font-size: 80px;
    font-weight: 400;
    font-family: 'Bellefair', serif;
    color: #fff;
}

h2 {
    font-size: 100px;
    font-weight: 400;
    font-family: 'Bellefair', serif;
    color: #fff;
}

h3 {
    font-size: 56px;
    font-weight: 400;
    font-family: 'Bellefair', serif;
    color: #fff;
}

h4 {
    font-size: 32px;
    font-weight: 400;
    font-family: 'Bellefair', serif;
    color: #fff;
}

h5 {
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 4.75;
    font-family: 'Barlow Condensed', sans-serif;
    color: #D0D6F9;
}

p { 
    font-size: 15px;
    font-weight: 400;
    line-height: 32px;
    font-family: 'Barlow Condensed', sans-serif;
    color: #D0D6F9;
    
}

a:link { text-decoration: none;   display: block; }

a:hover { text-decoration: none;  display: block; }

a:active { text-decoration: none; display: block; }

.sub-heading {
    font-size: 28px;
    font-weight: 400;
    font-family: 'Bellefair', serif;
    color: #fff;
}

.sub-heading2 {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 2.35;
    font-family: 'Barlow Condensed', sans-serif;
    color: #fff;
}

.nav-text {
  font-size: 14px;
  font-weight: 400;
  font-family: 'Barlow Condensed', sans-serif;
  letter-spacing: 2.3;
  color: #fff;
  text-transform: uppercase;
  padding: 0 2rem;
  
}
@media screen and (min-width: 700px) {
    
    h1 {font-size: 150px;}
    p { font-size: 16px;}

    
    
  }

  @media screen and (min-width: 1200px) {
    text-align: left;

    h4 { font-size: 48px;}
    p { font-size: 18px; 
        text-align: left;}
    

    .nav-text { font-size: 16px; 
        letter-spacing: 2.7;}
    
  }
`;
