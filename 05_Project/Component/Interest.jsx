const Interest = ({interest}) => {
  return (
       
    <ul ><h2 className="heading">Interest</h2>
        <li className="description">{interest[0]}</li>
        <li className="description">{interest[1]}</li>
        <li className="description">{interest[2]}</li>
        <li className="description">{interest[3]}</li>
    </ul>
  )
}
export default Interest