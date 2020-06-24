import React, { Component } from 'react';

const ResultsList = (props) => {
    let resultListJSX = null

    if(props.result !== null){

    let titleJSX = <li>{`Title: ${props.results.title}`}</li>;
    let authorJSX = <li>{`Author: ${props.results.author}`}</li>;
    let createdJSX = <li>{`Published Date: ${props.results.created_at}`}</li>;
    let urlJSX = <li>{`URL: ${props.results.url}`}</li>;

    resultListJSX = <ul><header className="formButton">Search Results</header>
    <ul>{titleJSX}</ul>
    <ul>{authorJSX}</ul>
    <ul>{createdJSX}</ul>
    <ul> {urlJSX}</ul>
    </ul>
    }

    return resultListJSX;
}

class ResultPanel extends Component {

    constructor(props){
        super(props);
    
        this.state= {

        };
      }

    render(){
        console.log(this.props.result);
        return <div>
            <ul><ResultsList results={this.props.result}/></ul>
            
        </div>
    }

}

export default ResultPanel;