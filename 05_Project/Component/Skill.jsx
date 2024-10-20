const Skill = ({skills}) => {
  return (
    
          <ul><h2 className="heading">Skills</h2>
              <li className="description">{skills[0]}</li>
              <li className="description">{skills[1]}</li>
              <li className="description">{skills[2]}</li>
              
          </ul>
        )
}
export default Skill