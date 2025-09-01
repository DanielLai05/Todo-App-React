import React, { useContext } from 'react'
import { Badge, Col, Container, Row, Card } from 'react-bootstrap'
import { TodoContext } from '../context/TodoContext'

function Home() {
  const { todos } = useContext(TodoContext);
  return (
    <Container>
      <h1 className='my-3'>Your Todos</h1>
      <Row>
        <CardGroup todos={todos}></CardGroup>
      </Row>
    </Container>
  )
}

function CardGroup({ todos }) {
  console.log(todos);
  return todos.map((todo) => {
    const { completed } = todo;
    const bg = completed ? 'success' : 'danger';

    return (
      <Col md={4} key={todo.id}>
        <Card className='my-3'>
          <Card.Body>
            <Card.Title>{todo.title}</Card.Title>
            <Card.Text>{todo.description}</Card.Text>
            <Badge bg={bg}>{!completed && 'Not'} Completed</Badge>
          </Card.Body>
        </Card>
      </Col>
    );
  });
}

export default Home