import styled from "styled-components"
import "./styled.css"


const Footer = styled.div `
    *{
        margin: 0px;
        padding: 0px;
        
    }
`


export default function Rodape(){
    return(
        <>
            <Footer>
                <div className="rodape">
                <p>Av. Paulista</p>
                <p>Contato: 90028922</p>
                </div>
            </Footer>
        </> 
    )
}