import React from "react";
import axios from "axios";


export class Create extends React.Component {

    // important bind events from each onChange attributes
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);


        this.state = {
            title: '',
            cover: '',
            author: ''
        }
    }

    // taking event when click the submit button in the form
    handleSubmit(e) {
        e.preventDefault();
        console.log(`Button clicked
       Title: ${this.state.title}
        Cover: ${this.state.cover}
        Author: ${this.state.author}`);

        const book = {
            title: this.state.title,
            cover: this.state.cover,
            author: this.state.author
        }

        // make http request and construct some data and pass the data to the server
        axios.post('http://localhost:4000/api/books',book)
        .then()
        .catch();


        this.setState({
            title: '',
            cover: '',
            author: ''
        })
    }

    // when the value in the field changes, this event will triger.
    onChangeBookTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    // launch book cover event
    onChangeBookCover(e) {
        this.setState({
            cover: e.target.value
        })
    }

    // launch book auther event
    onChangeBookAuthor(e) {
        this.setState({
            author: e.target.value
        })
    }

    render() {
        return (
            // Insert HTML code in the div element
            <div >
                <h3>Hello from my Create component!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>
                    <br></br>
                    <input type="submit" value="Add Book" />
                </form>

            </div>


        )
    }
}