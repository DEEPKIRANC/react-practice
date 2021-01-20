import React from "react"

function ProfileCard(props)
{
    const playerNames=[];
    const random=Math.floor(Math.random()*100)
    function checkedBox()
    {
        let state=document.getElementById(random);
        let name=document.getElementById(random).value;
        if(state.checked)
        {
            playerNames.push(name);
            console.log("Players List : "+ playerNames);

        }
        else{
            playerNames.pop();
            console.log("Players List Updated : "+ playerNames);
        }
            }
    return (
        <center>
        <div style={{width:200,borderWidth:5,borderStyle:"solid",borderColor:"#0FF000",padding:5}}>
            <input type="checkbox" id={random} onChange={checkedBox} value={props.profile.name}/>
            <p>Name : {props.profile.name}</p>
            <p>Role : {props.profile.role}</p>
            <button id="btn" >GitHub Profile</button>
        </div>
        </center>
    )
};

export default ProfileCard