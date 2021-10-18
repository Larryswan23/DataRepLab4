import React from 'react';
import { Component } from 'react';
import {Card } from "react-bootstrap";

 class MovieItem extends Component {
    render() {
        return (
            <div>
                 <Card>
                    <Card.Header>{this.props.myfilm.Title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.myfilm.Poster}></img>
                            <footer>
                                {this.props.myfilm.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
                
            </div>
        );


    }
}
export default MovieItem;