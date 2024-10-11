import DataTable from "../components/DataTable"
import { dataArray } from "../data/data"

const HomePage = () => {
  return (
    <DataTable dataArray={dataArray} page='HomePage'/>
  )
}

export default HomePage