import React from 'react';
import axios from 'axios';
import Models from './Models'


class Makes extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      makes: [],
      models: [],
      theOBj: {}
    }
  }

  componentDidMount(){
    axios.get('http://marketcheck-prod.apigee.net/v1/search?api_key=0xjgQHUmuKh1YL3JeeKrIvtfF7yUtRDr&rows=0&facets=make|0|100')
      .then(res =>  this.setState({makes:res.data.facets.make}));

    // axios.get("http://marketcheck-prod.apigee.net/v1/search?api_key=0xjgQHUmuKh1YL3JeeKrIvtfF7yUtRDr>&rows=0&make=ford&facets=model|0|20")
  }

  render(){
   console.log('this.state.makes', this.state.makes);
    let theMakes = this.state.makes.map(make => (make.item));

    return(
      <div><Models makes={theMakes}/></div>
    );
  }
}
export default Makes;
