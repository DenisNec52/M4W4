import { Col, Row, Container} from 'react-bootstrap'
import fantasy from '../data/fantasy.json'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'
import { useState } from 'react'
import MyNav from './MyNav'
import Welcome from './Welcome'
import MyFooter from './MyFooter'
const AllTheBooks = () => {
  const [selected, setSelected] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  return (

    <>
    <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <Container>
      <Welcome />
    <Row>
      <Col md={8}>
        <Row className="g-2 mt-3">
          {fantasy
            .filter((b) => b.title.toLowerCase().includes(searchQuery))
            .map((book) => {
              return (
                <Col xs={12} md={4} key={book.asin}>
                  <SingleBook
                    book={book}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </Col>
              )
            })}
        </Row>
      </Col>
      <Col md={4}>
        <CommentArea asin={selected} />
      </Col>
    </Row>
    <MyFooter />
    </Container>
    </>
  )
}

export default AllTheBooks
