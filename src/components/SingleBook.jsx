import { Card } from 'react-bootstrap'

const SingleBook = ({ setSelected, selected, book }) => {
  return (
    <>
      <Card
        onClick={() => setSelected(book.asin)}
        style={{
          border: selected === book.asin ? '3px solid red' : 'none',
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleBook
