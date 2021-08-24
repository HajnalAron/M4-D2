import { Jumbotron, Container} from "react-bootstrap";

function Welcome () {
    return (
        <Jumbotron className="my-5" fluid>
            <Container>
                <h1>{"Aron's Books"}</h1>
                <p>
                Get the most recent romance books today!
                </p>
            </Container>
        </Jumbotron>
    )
}

export default Welcome
