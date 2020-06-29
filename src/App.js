import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Scroll from './Scroll';
import CourseList from './CourseList';
import About from './components/About/About';
import SearchBox from './searchbox';
import Navigation from './components/Navigation/Navigation';
import {list} from './list.js';
import './App.css';

const particlesOptions = {
    particles: {
      line_linked: {
        shadow: {
          enable: true,
          color: "#fff1ed",
          blur: 5
        }
      }
    }
  }

class  App extends Component   {
    constructor() {
        super()
        this.state= {
            list: list,
            searchfield:'',
        }
    }

    onSearchChange=(event) =>{
       this.setState({searchfield: event.target.value});
    }

    render() {
        const filteredCourses = this.state.list.filter(list => {
            return list.course.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='App'>
             <Particles className='particles'
              params={particlesOptions} 
                />
            <Navigation />
            <Scroll>
            <About />
                <h1 className='f1 white'>Course  provide:</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CourseList list={filteredCourses} />
            </Scroll> 
        </div>
        );

    }
    
       
        
    }

       


                                                                
export default App;