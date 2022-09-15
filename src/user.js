import {useState} from 'react'
import styled from 'styled-components'

const Avatar = styled.img`
    border: 10px solid black;
`

function User({name, avatar, counter}) {
    const [calculetedName, setCalculatedName] = useState(name)


    const newName = `${calculetedName} es feo`
    
    function showMessage() {
        setCalculatedName('Pikachu')
        console.log(`holap, soy ${name}`)
    }

    return (
        <div className="User" onClick={showMessage}>
            <Avatar className="avatar" src={avatar} alt={name} title={name} />
            <p>{newName} hemos dado click: {counter} veces</p>
        </div>
    )
}


export default User