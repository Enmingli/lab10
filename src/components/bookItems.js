import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from "axios";

export class BookItems extends React.Component{

    constructor(){
        super();
        this.DeleteBook = this.DeleteBook.bind(this);
    }

    DeleteBook(e){
        e.preventDefault();

        axios.delete('http://localhost:4000/api/book/'+this.props.book._id)
        .then(()=>{this.props.ReloadData()})
        .catch();
    }
    render(){
        return(
            <div>
                <center>
                <Card style={{ width: '18rem' }}>
                <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                        <img src={this.props.book.cover}></img>
                        <footer>
                        {this.props.book.author}
                        </footer>
                        </blockquote>
                        <Button variant="primary">Learn more..</Button>
                    </Card.Body>
                    <Link to={"/edit/"+this.props.book._id} className="btn btn-primary">Edit</Link>
                    <br></br>
                    <Button variant="danger" onClick={this.DeleteBook}>Delete</Button>
                 </Card>
                 <br/>
                 </center>
            </div>
        );
    }
}