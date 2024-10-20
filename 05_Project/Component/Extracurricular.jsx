const Extracurricular = ({extra}) => {
  return (
    <div>
        <ul><h2 className="heading">Extracurricular</h2>
        <li className="description">{extra[0]}</li>
        <li className="description">{extra[1]}</li>
        <li className="description">{extra[2]}</li>
        </ul>
        </div>
  )
}
export default Extracurricular