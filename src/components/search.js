import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
state = { search: [] };

  componentDidMount() {
    var self = this;
    axios
      .get('https://blog.aadeshshrestha.com.np/ruby,%20rails/2016/10/02/How-to-install-Ruby-on-Rails-in-Linux.html')
      .then(function(resp) {
        self.setState({ search: resp.data });
      });
      
  }


	handle(e)
	{   
		this.setState({
			data:e.target.value
		})
	}
  render() {
    const url = this.state.search;
  	return (
    	<div>
    	 <input type="text" onChange={this.handle.bind(this)} />
    	 <h1>{ url }</h1>
    	</div>
    );
  }
}

export default Search;

