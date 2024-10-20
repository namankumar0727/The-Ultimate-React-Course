const Education = ({education}) => {
  return (
    <ul><h2 className="heading">Education</h2>
              <li className="description">{education[0]}</li>
              <li className="description">{education[1]}</li>
          </ul>
  )
}
export default Education