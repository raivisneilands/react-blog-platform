import React from 'react'
import './Menu.css'

function Menu(){
    return (
    <div className='menu'>
        <h2>Personal Blog</h2>
        <h4>If you have a thought, why not write it down?</h4>
        <hr></hr>
        <div className='inside-menu'>
            <h6>New Post</h6>
            <h6>View Posts</h6>
        </div>
        <hr></hr>
        <h2>Think it, Express it!</h2>
    </div>
    )
}

export default Menu;