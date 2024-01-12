import SingleComment from "./SingleComment"
import ListGroup from 'react-bootstrap/ListGroup';

//array come props

// const CommentList = ({commenti}) => (
const CommentList = (props) => (
    <ListGroup as="ol" numbered>
        {props.commenti.map((b)=>{
        console.log(b);
        return <SingleComment pluto={b} ></SingleComment>
        })}
       
    </ListGroup>
  )
  
  export default CommentList