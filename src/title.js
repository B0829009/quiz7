import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>CGU Todo List</h1>
        </header>
    )
}

const headerStyle = {
    background: '#598',
    color: '#fff',
    textAlign: 'center',
    padding: '20px'
}


export default Header;