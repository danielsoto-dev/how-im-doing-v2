import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import "@fontsource/open-sans";
export const GlobalStyle = createGlobalStyle`

:root {
    --blue: #3590f3;
    --white: #fff;
    --darker-white: #f2f2f2;
    --active-blue: #52a3fadc;
    --red: #f35835;
    --darker-red: #dc330d;
    --dark: #002143;
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
    font-family: 'Open Sans';
    font-size:20px;
    color: var(--dark);
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

@keyframes shake {
    0% { transform: translate(30px); }
			20% { transform: translate(-30px); }
			40% { transform: translate(15px); }
			60% { transform: translate(-15px); }
			80% { transform: translate(8px); }
			100% { transform: translate(0px); }
		}

.shake{
    animation: shake 500ms ;
}
`;
export const Wrapper = styled.div`
    padding: 1.5rem;
    min-height: calc(100% - 160px);
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;