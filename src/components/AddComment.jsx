import { Component } from "react"
import {Form, Button} from 'react-bootstrap';
import { authorizationBearer, urlApi } from '../data/dati'

class AddComment extends Component{

    state={
        reservation:{
            commValue: "",
            rateValue: 0
        }
       
    }

    postData () {
        try {
            const response = fetch("https://striveschool-api.herokuapp.com/api/books/"+this.props.pippo+"/comments",{
                method: "POST",
                body: JSON.stringify(this.state.reservation),
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVmNTI2NzYxNDAwMTgzYzJkYjciLCJpYXQiOjE3MDQ5MDUyMTAsImV4cCI6MTcwNjExNDgxMH0.kq-wHEZPNBUL_ib8RccoKE_bcvNcerSolelwctvtv2w"
                }
            })
            if(response.ok) {
                alert("ok")
                //const data = response.json();
                //this.setState({ reservations: data })
            }
        }
        catch(e) { console.log(e) }
        //if (response.ok) { alert('data saved successfully') } } catch (e) { console.log(e) } }
        
    }

    render(){
        return (
            <>
              <Form.Label htmlFor="inputPassword5">Comments</Form.Label>
              <Form.Control
                type="text"
                aria-describedby="passwordHelpBlock"
                value={this.state.reservation.commValue}
                onChange={(e) => {console.log(this.state); this.setState({reservation: {...this.state.reservation, commValue: e.target.value} } ) }}
              />
              <Form.Label htmlFor="inputPassword5">rate</Form.Label>
              <Form.Control
                type="number"
                aria-describedby="passwordHelpBlock"
                value={this.state.reservation.rateValue}
                onChange={(e) => {console.log(this.state); this.setState({reservation: {...this.state.reservation, rateValue: e.target.value} } ) }}
              />
              <Form.Text id="passwordHelpBlock" muted>
                scrivi responsbilmente
              </Form.Text>
              <Button variant="success" onClick={this.postData}>Post</Button>
            </>
        );
    }
        
    
}

export default AddComment