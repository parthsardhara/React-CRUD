import React, { Component } from 'react';
import axios from 'axios';

class Api extends Component {

    state = {
        userData: []
    };

    apiHandler = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log('res', res)
            this.setState({ userData: res.data });
        }).catch(err => {
            console.log('err', err);
        });
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={() => this.apiHandler()}>API</button>
                {
                    this.state.userData.map(e => {
                        return (
                            <div key={e.id} className="card mt-2 mb-2 p-2">
                                <p><b>Id:-</b> {e.id}</p>
                                <p><b>Title:-</b> {e.title}</p>
                                <p><b>Body:-</b> {e.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

}
export default Api;