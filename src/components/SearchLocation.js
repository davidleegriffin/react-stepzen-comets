import {useState} from 'react'
import {
  Form,
  Button,
  Container
} from 'react-bootstrap'

export default function SearchLocation() {
  const [location, setLocation] = useState('')
  const search = (e) => {
    e.preventDefault()
    
  }
  return (
    <Container>
      <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Enter a location below</Form.Label>
          <Form.Control
            type="input"
            placeholder="Address"
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
          />
      </Form.Group>
        <Button onClick={search} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}