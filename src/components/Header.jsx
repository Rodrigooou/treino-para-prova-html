import styled from "styled-components"
import { Link } from "react-router-dom";
import "./styled.css"


const Cabecalho = styled.div `
    *{
        margin: 0px;
        padding: 0px;
        
    }
`



function Header(){
    return(
        <>
            <Cabecalho>
                <h1 className="titulo">Sorveteria Delicia</h1>
                <nav>
                    <ul>
                        <li><Link to="/" class="a" >Home</Link></li>
                        <li><Link to="/sorvetes" class="a">Sorvetes</Link></li>
                    </ul>
                </nav>
            </Cabecalho>
        </>
    )
}


export default Header