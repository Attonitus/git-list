import { isValidElement } from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
    display: inline-flex;
    gap: .5rem;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    background: var(--buttonBG);
    color: var(--white);
    border: 1px solid var(--grey);
    min-inline-size: 8.5rem;
    justify-content: center;
    border-radius: .5rem;
    padding-block: .25rem;
    font: var(--button);
    &:hover {
        background: var(--white);
        color: var(--button);
    }

`

function Button({text, link, className, icon}) {
    const component = link ? 'a' : 'button'
    let iconComponent = null
    if(icon) {
        if(isValidElement(icon)){
            iconComponent = icon
        }
    }
    return (
        <ButtonStyled as={component} href={link} className={className}>
            {iconComponent}
            {text}
        </ButtonStyled>
    )
}

export default Button
