import { Col, Row } from "react-grid-system"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"

import clienteImg from "./assets/cliente.png"
import freelaImg from "./assets/freela.png"

export const SelecaoCliente = () => {
  return (
    <>
      <Tipografia variante="h1" componente="h1">
        Crie seu cadastro
      </Tipografia>
      <Tipografia variante="h3" componente="h2">
        Como podemos te ajudar?
      </Tipografia>
      <Row>
        <Col md={6} sm={12}>
          <img src={clienteImg}></img>
        </Col>
        <Col md={6} sm={12}>
          <img src={freelaImg }></img>
        </Col>
      </Row>
    </>
  )
}