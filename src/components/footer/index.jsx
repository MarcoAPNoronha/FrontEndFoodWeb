import { Container } from "./styles";
import Polygon from "../../assets/Polygon.png"
import PolygonGray from "../../assets/PolygonGray.png"



export function Footer(){
    return(
      <Container>
      <div>
      <img src={PolygonGray}/>
      <h2>team food</h2>
      </div>
      <p>© 2025 - Todos os direitos reservados.</p>
      </Container>

    )
}