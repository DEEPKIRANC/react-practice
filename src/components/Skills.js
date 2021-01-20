import React from 'react'

function Skill(props)
{
return (
    <div>
        <input type="checkbox" checked={props.item.completed} onChange={()=> props.handleChange(props.item.id)}/>
        <p>{props.item.tag}</p>        
    </div>
)

}

export default Skill