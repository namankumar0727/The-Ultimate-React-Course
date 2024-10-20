// JSX is a code in which we can write the html and the javascript code in the single file earlier before react we had to make the things different in the different files

const App = () => {

  const t="red"

  return (
    // <> This is called as  a react fragment this is used we if we don't want to create  a parent like div then we can make the use of this react fragment</>
    <>
    {/* In the react there is only usage using the camelCase */}
    <h1 className={t} style={{backgroundColor:"blue"}}>Hello ji</h1>
    </>
  )
}
export default App