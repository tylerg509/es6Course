import React, {Component} from 'react';
import {FormGroup, FormControl, InputGroup, Button} from 'react-bootstrap'
import Gallery from './Gallery';

class Global extends Component{
    constructor(props){
        super(props);
        this.state = {
            query: '',
            items: []
        }
    }

    search() {
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
        fetch(`${BASE_URL}${this.state.query}`, {method: 'GET'} )
        .then(response => response.json())
        .then(json => {
            let {items} = json;
            this.setState({items})
        });
    }
    
    render() {
        return (
            <div className="Global">
                <h2>Book Explore</h2>
                <FormGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search Books!"
                            aria-label="Search Books!"
                            aria-describedby="basic-addon2"
                            onChange={event=>this.setState({query: event.target.value})}
                            onKeyPress={event =>{
                                if(event.key ==='Enter') {
                                    this.search();
                                }

                            }}
                        />
                        <InputGroup.Append onClick={()=>this.search()} >
                            <Button variant="outline-secondary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </FormGroup>
                <Gallery items={this.state.items}></Gallery>
            </div>
        )
    }
}

export default Global;