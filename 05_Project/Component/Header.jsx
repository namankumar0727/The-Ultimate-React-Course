const Header = ({header}) => {
  return (
    <div className="heading">
        <h2 className="description">{header[0]}</h2>
        <h3>{header[1]}</h3>
    </div>
  )
}
export default Header