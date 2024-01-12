import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

//array come props
const SingleComment = (props) => (


    <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
    >
        <div className="ms-2 me-auto">
        <div className="fw-bold">{props.pluto.author}</div>
        {props.pluto.comment}
        </div>
        <Badge bg="primary" pill>
        {props.pluto.rate}
        </Badge>
    </ListGroup.Item>

  )
  
  export default SingleComment