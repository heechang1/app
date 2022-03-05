import React from 'react'
import axios from 'axios';

export default class App extends React.Component {

    componentDidMount(){
        // 기본 api url 주소
const URL_API = "http://localhost:8080/";

// hello api url 주소
const URL_HELLO = `${URL_API}`;

        const url = "/";
        axios.get(URL_HELLO)
        .then(function(response) {
            console.log(response.data);
            console.log("성공1");
        })
        .catch(function(error) {
            console.log("실패");
        })
    }
    render(){
        return(
            <div>
                <h1>My React App</h1>
            </div>
        )
    }
}