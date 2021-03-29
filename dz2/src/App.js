
import React, { Component } from 'react'
import './App.css'
import  CheckBox  from './CheckBox'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todosData: [
        {id: 1, value: "Take out the trash", isChecked: false},
        {id: 2, value: "Grocery shoppinge", isChecked: false},
        {id: 3, value: "Clean gecko tank", isChecked: false},
        {id: 4, value: "Mow lawn", isChecked: false},
        {id: 5, value: "Catch up on Arrested Development", isChecked: false}
      ]
    }
  }
  
  handleAllChecked = (event) => {
    let todosData = this.state.todosData
    todosData.forEach(todosData => todosData.isChecked = event.target.checked) 
    this.setState({todosData: todosData})
  }

  handleCheckChieldElement = (event) => {
    let todosData = this.state.todosData
    todosData.forEach(todosData => {
       if (todosData.value === event.target.value)
       todosData.isChecked =  event.target.checked
          
    })
    this.setState({todosData: todosData})
  }

  render() {
    return (
      <div  >
      {/* <h1> Check and Uncheck All Example </h1> */}
      <div className="Container">
      <input type="checkbox" onClick={this.handleAllChecked}  value="checkedall" />   <h2> Check/Uncheck </h2>
        <span >
        {
          this.state.todosData.map((todosData) => {
            return (<CheckBox  handleCheckChieldElement={this.handleCheckChieldElement}  {...todosData} />)
          })
        }
        </span>
        </div>
      </div>
    );
  }
}

export default App
