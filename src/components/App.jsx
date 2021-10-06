import React, { Component } from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';


class App extends Component {
    constructor(props){
        super(props);
        this.books = [
            {title: "Jurassic Park", author: "Michael Crichton" },
            {title: "Jurassic Park: Lost World", author: "Michael Crichton" },
            {title: "Andromeda Strain", author: "Michael Crichton" },
            {title: "Timeline", author: "Michael Crichton" },
            {title: "Micro", author: "Michael Crichton" },
        ];
        this.state = {
            bookNumber: 0
        };
    }

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="row">
                    <div className="col-md-4">
                        {/*Button here to move to the previous book viewed*/}
                    </div>
                    <div className="col-md-4">
                        {/*Display book with cover here*/}
                        <h1>{this.books[this.state.bookNumber].title}</h1>
                        <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>
                    <div className="col-md-4"></div>
                        {/*Button here to move to the next book viewed*/}
                </div>    
            </div>
        )
    }
}

export default App;