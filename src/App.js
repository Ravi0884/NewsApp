
import './App.css';
import React, { Component } from 'react'
import NavBar from './component/NavBar'
import News from './component/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

export class App extends Component {
  pageSize=8
  state={
    progress:10
  }
  setProgress=(progress) =>{
    this.setState({progress:progress})
  }
  render() {
    return (
      
      <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
      <Route  exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} category='general'/>}></Route>
      <Route  exact path="/general" element={<News setProgress={this.setProgress} key="allNews" pageSize={this.pageSize} category='general'/>}></Route>
      <Route  exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} category='science'/>}></Route>
      <Route  exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} category='sports'/>}></Route>
      <Route  exact path="/bussiness" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} category='business'/>}></Route>
      <Route  exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} category='entertainment'/>}></Route>
      <Route  exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} category='health'/>}></Route>
      <Route  exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} category='technology'/>}></Route>
      </Routes>
      </Router>
    )
  }
}

export default App
