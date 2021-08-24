import books from "../data/romance.json"
import {Card, Col, ListGroup, ListGroupItem} from 'react-bootstrap'


function LatestRealease () {
    return (
        <div className="container">
            <div className="row">
                {books.map(book=>(
                <Col className="my-3" xs={3}>
                    <Card className="mx-3 w-100 h-100">
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{book.category}</ListGroupItem>
                        <ListGroupItem>{book.price}$</ListGroupItem>
                        <ListGroupItem>Asin number:{book.asin}</ListGroupItem>
                    </ListGroup>
                    </Card>
                </Col>
                ))}
            </div>
        </div>
    )
}

export default LatestRealease