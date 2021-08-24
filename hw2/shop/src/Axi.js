import React, { Component } from 'react';
import axios from 'axios';

export default class Axi extends Component {
    state = {
        post: []
      };
      
      axiGet() {
        axios.get(`http://localhost:3000/db.json`)
        .then(res => {
            console.log("rkofkgoo");
          console.log(res);
          this.setState({post: res.data});
        } )
      }
    
    render() {
        return (
            <div>
                    <ul>{this.state.post.map(post => <li>{post.title}</li>)}</ul>
                    <button onClick="axiGet()"></button>
            </div>
        )
    }
}
