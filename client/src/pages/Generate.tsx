import { useParams } from "react-router-dom"

const Generate = () => {

  const{id}=useParams();
  const{i}=useParams();
  return (
    <div>Generate</div>
  )
}

export default Generate