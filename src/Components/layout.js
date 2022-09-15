import styled from 'styled-components'

const LayoutStyled = styled.main`
    //Estilos que afectan a toda la pagina, no importa el tamaño =======
    min-block-size: 100vh;
    //wrapper: margin and max inline
    margin: auto;
    max-inline-size: 75rem;
    //Nos ayuda a colocar un padding en la versión movil
    //En escritorio casi no se nota
    padding-inline: 1.25rem;
    @media screen and (min-width: 768px){
        //Estilos que se aplicarán después de 768px, pantallas =======
        display: grid;
        grid-template-columns: 17.5rem 1fr;
        grid-template-rows: auto 1fr;
        column-gap: 2rem;
        grid-template-areas: "profile filter" "profile repolist";
    }

`
//Colocamos children debido a que queremos que todos los estilos
//que colocamos arriba sus hijos se vean afectados
function Layout({children}) {
    return (
        <LayoutStyled>
            {children}
        </LayoutStyled>
    )
}

export default Layout
