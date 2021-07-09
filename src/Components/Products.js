import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import picpic from './picpic.jpg';

export default class Products extends Component {
    render() {
        return (
            <>
            <h1>Lucky Ticket</h1>
            <div className='container' style={{backgroundColor: '#cfe8fc', width:'100vh', padding: '8px', display: 'flex', justifyContent:'center'}}>
                <div className='details'>
                    <div className='image'><img src={picpic} alt="logo"width="193" height="130"></img></div>
                </div>
                <div className='productName'>Product Name</div>
                <div className='productDescription' style={{width:'100vh', display: 'flex', justifyContent:'center'}}>&nbsp;Product Description&nbsp;&nbsp;</div>
                
                <div className='buy'>
                    <div className='price'>$2</div>
                    <Button variant="contained" color="primary">BUY</Button>
                </div>
            </div>
            </>
        )
    }
}
