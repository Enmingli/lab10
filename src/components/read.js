import React from "react";
import { Books } from "./books";
import axios from "axios";

export class Read extends React.Component {


    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    ReloadData() {
        // axios makes http request instead of using hard code.
        axios.get('http://localhost:4000/api/books')
            // drag http response back and then assign the local variables to it.
            .then((response) => {
                this.setState({ books: response.data})
            })
            // catch errors.
            .catch((error) => {
                console.log(error);
            })
    }

    componentDidMount() {
        // axios makes http request instead of using hard code.
        axios.get('http://localhost:4000/api/books')
            // drag http response back and then assign the local variables to it.
            .then((response) => {
                this.setState({ books: response.data})
            })
            // catch errors.
            .catch((error) => {
                console.log(error);
            })
    }
    // store variables in the array.
    state = {
        books:
            [

            ]
    };

    render() {
        return (
            <div>
                <h3>Hello from my Read component!</h3>
                <Books books={this.state.books} ReloadData={this.ReloadData}></Books>
            </div>
        );

    }
}
