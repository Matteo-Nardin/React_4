import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component{
    state = {
        // salvare nello state il GET
        reservations: []
    }

    //const data = this.setState({ reservations: data })

    // https://striveschool-api.herokuapp.com/api/books/0316438960/comments troverà i commenti di un singolo libro.
    // { "comment": string, "rate": string, "elementId": string }

// author: "ihor99@outlook.it"
// comment: "WOW MIRACOLO"✅
// createdAt: "2024-01-09T19:26:06.431Z"
// elementId: "0316438960"✅
// rate: 1✅
// updatedAt: "2024-01-09T19:26:06.431Z"
// __v: 0
// _id: "659d9dcef8349700195ac43e"

    // componentDidMount(){
    //     fetch("https://striveschool-api.herokuapp.com/api/books/0316438960/comments", {
    //         headers: {
    //         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVmNTI2NzYxNDAwMTgzYzJkYjciLCJpYXQiOjE3MDQ5MDUyMTAsImV4cCI6MTcwNjExNDgxMH0.kq-wHEZPNBUL_ib8RccoKE_bcvNcerSolelwctvtv2w"
    //         }
    //     })
    //     .then(response => {
    //         response.json();
    //         this.setState({ reservations: response.json() })
    //         }
    //     )
    //     .then(json => console.log(json))
    //     .catch(err => console.log(err))
    // }

    componentDidMount = async () => {
        try {
            const response = await fetch("https://striveschool-api.herokuapp.com/api/books/"+this.props.pippo+"/comments",{
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVmNTI2NzYxNDAwMTgzYzJkYjciLCJpYXQiOjE3MDQ5MDUyMTAsImV4cCI6MTcwNjExNDgxMH0.kq-wHEZPNBUL_ib8RccoKE_bcvNcerSolelwctvtv2w"
                }
            })
            if(response.ok) {
                const data = await response.json();
                this.setState({ reservations: data })
            } else {
                console.log('error while fetching')
            }
        }
        catch(e) { console.log(e) }
        
    }

    render(){
        return(
            <>
                <AddComment pippo={this.props.pippo} />
                <h3>Commenti:</h3>
                <CommentList commenti={this.state.reservations}></CommentList>
            </>
        )
    }
}

export default CommentArea