  import React, { Component } from 'react';
  import styled from 'styled-components';
  import AfterSearch from './after_url';
  import {title,ogDes,ogimage,ogurl} from '../funcs/test3'; 

 
 class Search extends Component {
  constructor(props){
    super(props);
    this.state = { 
    url:'',
    searchResult:'',
    image:'',
    description:'',
    topic:'',
   };
   this.changeUrl=this.changeUrl.bind(this);
  }
  
  componentDidUpdate(prevProps, prevState){
      // console.log(this.state.url)
        return <AfterSearch state={this.state} url={this.state.url}/>
  }

  changeUrl(event){
      this.setState({url: event.target.value});
      
  }
  returnState(){
    
  }
  render(){
    let searchResult=this.state.searchResult;
    return(
       <div className="center">
            <form>
              <Input placeholder="Enter an url"  id="url" onChange={this.changeUrl} />
            </form> 
            <AfterSearch url={this.state.url}/>          
      </div>
      );
  }
 };
 
 const Input = styled.input.attrs({
  // we can define static props
  type: "url",

  // or we can define dynamic ones
  margin: props => props.size || "1em",
  padding: props => props.size || "1em"
})`
  color: black;
  font-size: 1em;
  border: 2px solid green;
  border-radius: 3px;
  size:"2em";
  height:25px;
  width:600px;

  /* here we use the dynamically computed props */
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

 export default Search;



