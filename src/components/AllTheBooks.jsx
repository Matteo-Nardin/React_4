import { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'
import { authorizationBearer, urlApi } from '../data/dati'

const AllTheBooks = () => {
  console.log(fantasy)

  //let state = useState("")

  const [books, setBooks]= useState([])

  useEffect(()=> {

  },[])

  return (
    <Row>
      {fantasy.map((book) => {
        return (
          <Col xs={12} md={4} key={book.asin}>
            <Card className="book-cover">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default AllTheBooks
