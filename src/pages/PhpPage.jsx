import DataTable from "../components/DataTable"
import { dataArray } from "../data/data"

const PhpPage = () => {
  return (
    <DataTable dataArray={dataArray} page='PhpPage'/>
  )
}

export default PhpPage