// 
import React, { Component } from "react";
import jy from "./data.json";
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      getdata:''
    };
  }
   componentDidMount() {
    this.setState({data:jy})
  }
  searchdata=(event)=>{
    const getdata=event.target.value.toLowerCase()
    this.setState({getdata:getdata})
  
  }
  

  render() {
  const filtereddata=jy.filter((JsonData)=>(
   JsonData.name.toLocaleLowerCase().includes(this.state.getdata)
  ))

    return( <div>
      <div className='p-3'><input type='text' placeholder="find your country..... " className='h-6' onChange={this.searchdata} /></div>
    <div className='grid grid-cols-4   justify-end p-6 w-full mt-8'>
    
      {console.log(this.state.getdata)}
    
      {filtereddata.map((dataitem)=>(
      
        <div className='bg-white-600'>
       <img src={dataitem.flag} className='h-20 p-3 '></img>
          <p>{dataitem.name}</p>
          <p>population:{dataitem.population}</p>
          <p>region:{dataitem.region}</p>
          <p>capital:{dataitem.capital}</p>
          
        </div>
        
      ))}
      </div>
    </div>)
  }
}
export default App;
