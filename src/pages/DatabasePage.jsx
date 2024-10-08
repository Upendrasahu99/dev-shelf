import DataTable from "../components/DataTable"
import { dataArray } from "../data/data"

const DatabasePage = () => {
  return (
    <DataTable dataArray={dataArray} page='DatabasePage'/>
  )
}

export default DatabasePage