import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Ramlat" age={20} isStudent={true}/>
      <Student name="Abdulmalik" age={28} isStudent={false}/>
      <Student name="Lukman" age={25} isStudent={true}/>
      <Student name="Naja'atu" age={23} isStudent={true}/>
      <Student name="GULLAH"/>
    </>
  )

}

export default App