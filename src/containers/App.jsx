import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList.jsx';
import SearchBox from '../components/SearchBox.jsx';
import Scroll from '../components/Scroll.jsx';
import './App.css';

function App (){
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count,setCount] = useState(0);

    useEffect(()=>{
           fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setRobots(users)})
    },[count])

    const onSearchChange = (event) => {
        //console.log(event.target.value);
        setSearchfield(event.target.value)
    }
    
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !robots.length?
    <h1>Loading</h1> :
    (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <button onClick={()=>setCount(count+1)}>Click me!</button>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
    );
    
}

export default App;