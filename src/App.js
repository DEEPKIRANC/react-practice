
import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import ProfileCard from './components/MainContent'
import Users from './components/UserProfile'
import Skills from './components/Interests'
import Skill from './components/Skills'
class App extends React.Component {

 constructor()
 {
   super()
   this.state={
     skills:Skills
   }
this.handleChange=this.handleChange.bind(this)
 }
 handleChange(id)
 {
   this.setState(prevState=>{
     const updatedSkills=prevState.skills.map(skill=>
       {
         if(skill.id===id)
         {
           skill.completed=!skill.completed
         }
         return skill
       })
       return {
         skills:updatedSkills
       }
   })
 }
 render(){

 
  const Profiles=Users.filter(user=> user.role !== undefined).map(user => <ProfileCard key={user.id} profile={user}/>)
  const skillSet=this.state.skills.map(skill => <Skill key={skill.id} item={skill} handleChange={this.handleChange}/>)
  return (
    <div>
      <Header/>
      <br/>
    
     

      {Profiles}
      <br/>
      {skillSet}
      <Footer />
    </div>
  );
}
}
export default App;
