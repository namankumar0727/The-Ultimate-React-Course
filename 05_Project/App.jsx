import Skill from './Component/Skill'
import Header from './Component/Header'
import Interest from './Component/Interest'
import Experience from './Component/Experience'
import Education from './Component/Education'
import Extracurricular from './Component/Extracurricular'


const App = () => {

    const resume={
      name:['Naman Kumar','Technocrats Institue of Technology'],
      interest:['dancing','singing','competitive programming','maths'],
      experience : [ { year:2012, company:'xyz', role:'something' }],
      education:[ 'Technocrats Institute of Technology Excellence','Divine Public School'],
      skills : [ 'react js', 'node js','javascript'],
      extra:['coding','eating','sleeping']
      }

  return (
    <div className='Parent'>
    <Header  header={resume.name}/>
    <Interest  interest={resume.interest}/>
    <Skill  skills={resume.skills}/>
    <Experience experience={resume.experience}/>
    <Education education={resume.education}/>
    <Extracurricular extra={resume.extra}/>

    </div>
  )
}
export default App