import { createGlobalStyle } from 'styled-components';
import { Header } from './components/Header';
import { Main } from './Views/Main';
import { Footer } from './components/Footer';
import { Fragment } from 'react';
export const App = () => {
    return (
        <Fragment>
            <GlobalStyle />ß
            <Header />
            <Main />
            <Footer />
        </Fragment>
    );
};

const GlobalStyle = createGlobalStyle`
:root {
    --blue: #3590f3;
    --white: #fff;
    --active-blue: #52a3fadc;
}

/*
  1. Use a more-intuitive box-sizing model.
*/
*,
*::before,
*::after {
    box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
    margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html,
body,
#root {
    height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img,
picture,
video,
canvas,
svg {
    display: block;
    max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input,
button,
textarea,
select {
    font: inherit;
}
/*
  8. Avoid text overflows
*/
p,
h1,
h2,
h3,
h4,
h5,
h6 {
    overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root,
#__next {
    isolation: isolate;
}

a {
    text-decoration: none;
    color: inherit;
}
`;
