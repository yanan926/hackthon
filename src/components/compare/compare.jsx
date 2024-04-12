
import "./compare.scss";
const Compare=({person})=>{
  let {name, value} = person
    return (
        <>
        <div>
        <h2>You looks like: <span>{name.toUpperCase()}</span></h2>
        <h2>The similarity is <span>{value.toFixed(4)* 100}%</span> </h2>
      </div>
        </>
    )
}

export default Compare;