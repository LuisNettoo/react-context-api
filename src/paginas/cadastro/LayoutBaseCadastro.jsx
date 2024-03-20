import { Col, Row } from "react-grid-system"
import { Card } from "../../componentes/Card/Card"

export const LayoutBaseCadastro = () => {
  return (
    <Row justify="center">
        <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12} style={{ margin: '80px 0' }}>
          <Card></Card>
        </Col>
    </Row>
  )
}