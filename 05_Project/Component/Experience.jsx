const Experience = ({experience}) => {

    const {year,company,role}=experience[0]
  return (
    <div>
        <ul><h2 className="heading">Experience</h2>
        <li className="description">{year}</li>
        <li className="description">{company}</li>
        <li className="description">{role}</li>
        </ul>
    </div>
  )
}
export default Experience