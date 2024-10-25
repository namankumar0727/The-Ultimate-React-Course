import { useEffect, useState } from "react"

const App = () => {

  const [text,setText]=useState('')

  const [name,setName]=useState('Naman')

  //Variation 1

  // useEffect(()=>{
  //   console.log("UI Rendering Done")
  // })

  //Variation 2
  
  // useEffect(()=>{
  //   console.log("UI Rendering Done")
  // },[])

  //Variation-3

  //Only when there is first render and when the dependicies will change

  
  // useEffect(()=>{
  //   console.log("UI Rendering Done")
  // },[text])

  // useEffect(()=>{
  //   console.log('getting changed')
  // },[name])

  //Variation-4
  
  //To handle the unmounting of an event

  
  useEffect(()=>{
    console.log('Listener Added')
    return ()=>{

      console.log("Listener removed")

    }
  },[text])


  function changeHandler(event){

    console.log(text)
    setText(event.target.value)

  }
  return (
    <div className="App">

      <input type="text" onChange={changeHandler}/> 

    </div>
  )
}
export default App