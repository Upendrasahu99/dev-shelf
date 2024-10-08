import DataTable from "../components/DataTable"
import { dataArray } from "../data/data"

const DesignPage = () => {

  return (
    <DataTable dataArray={dataArray} page='DesignPage'/>
  )
}

export default DesignPage