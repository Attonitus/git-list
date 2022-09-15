//Realizamos este componente con el fin de utilizarlo para guardar
//estilos globales, como styles al root, body, etc
import {createGlobalStyle} from 'styled-components'

const GlobalStylesStyled = createGlobalStyle`
    :root{
        --primary: #57a6ff; 
        --white: #fffffe; 
        --black: #141414; 
        --grey: #8b949e; 
        --bg: #0d1117; 
        --buttonBG: #22262c; 
        --grey-2: #c5ced7; 
        --pink: #cc68a0; 
        --yellow: #f1e05a; 
        --purple: #563d7c; 
        --black-2: #171b21; 
        --inter: 'Inter', sans-serif;
        --headline1: 600 1.625rem/2rem var(--inter); 
        --button: 500 0.875rem/1.5rem var(--inter); 
        --headline2-semi-bold: 600 1.25rem/1.5rem var(--inter); 
        --headline2-ligth: 300 1.25rem/1.5rem var(--inter); 
        --body1-regular: 400 1rem/1.5rem var(--inter); 
        --body1-semi-bold: 700 1rem/1.5rem var(--inter); 
        --body2-regular: 400 0.875rem/1.5rem var(--inter); 
        --body2-semi-bold: 600 0.875rem/1.5rem var(--inter); 
        --caption-regular: 400 0.75rem/1.125rem var(--inter); 
        --caption-medium: 500 0.75rem/1.125rem var(--inter); 
    }
    
    body {
        background: var(--bg);
        color: var(--grey);
        font: var(--body1-regular);
        margin: 0;

    }
`

export default GlobalStylesStyled
