import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=> Response.json())
        .then(users => this.setState({ robots: users }));
        
    }

    onSearchChange = (event)=> {
        this.setState({ searchField: event.target.value })
    }
        
    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return (!robots.length) ? <h1 className='tc light-blue'>Loading...</h1> :
            (
                <div className='tc'>
                <h1 className='f1 light-yellow'>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <Cardlist robots={filteredRobots} />
                </Scroll>
                </  div>
            );
    }     
}

export default App