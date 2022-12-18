import React from "react";
import { BookItems } from "./bookItems";

export class Books extends React.Component{
    render(){
        // acquire the data pass from the parent.
        // map function to collect data.
        return this.props.books.map( (book)=>{
            // pass each book to each one of the bookitem
            return <BookItems book={book} key={book.id} ReloadData={this.props.ReloadData}></BookItems>
        }



        );

        
    }
}