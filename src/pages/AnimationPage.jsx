import DataTable from "../components/DataTable"
import { dataArray } from "../data/data"

const AnimationPage = () => {
  return (
    <DataTable dataArray={dataArray} page='AnimationPage'/>
  )
}

export default AnimationPage