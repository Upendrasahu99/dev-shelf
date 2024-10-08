import DataTable from "../components/DataTable"
import { dataArray } from "../data/data"

const ReactPage = () => {
  return (
    <DataTable dataArray={dataArray} page='ReactPage'/>
  )
}

export default ReactPage