import DataTable from "../components/DataTable"
import { dataArray } from "../data/data"

const NodePage = () => {
  return (
    <DataTable dataArray={dataArray} page='NodePag'/>
  )
}

export default NodePage