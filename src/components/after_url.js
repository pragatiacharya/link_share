import React, { Component } from 'react';
import styled from 'styled-components';
import {title,ogurl, ogDes,ogimage} from '../funcs/test3';

class AfterSearch extends Component {
	
	componentDidMount() {
		const url = this.props.url;
		
	}

	render(){
			let url = this.props.url;	
      return(
		     <div>
			     {title(url)}
			  </div>
			);
 	}
 }
  export default AfterSearch;
 


