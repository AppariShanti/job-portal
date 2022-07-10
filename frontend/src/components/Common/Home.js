import React, {Component} from 'react';
import axios from 'axios';

export default class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:''

        }
        document.body.style = 'background: #F6CDDD;';

    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                Happy Coding! {};
           </div>
        )
    }
}