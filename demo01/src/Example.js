import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"

function Index() {
    useEffect(()=>{
        console.log('useEffect=>老弟你来了!Index页面');
        return ()=>{
            console.log('老弟，你走了!Index页面');
        }
    },[])
    return <h2>Sana.com</h2>;
}
function List() {
    useEffect(()=>{
        console.log('useEffect=>老弟,你来了!List页面');
    },[])
    return <h2>List-Page</h2>;
}

function Example(){
    const [ count , setCount ] = useState(0);
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`);
        return ()=>{
            console.log('====================');
        }
    },[count]);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            <Router>
                <ul>
                    <li> <Link to="/">首页</Link> </li>
                    <li><Link to="/list/">列表</Link> </li>
                </ul>
                <Routes>
                    <Route path="/" element={<Index/>} />
                    <Route path="/list/" element={<List/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default Example;