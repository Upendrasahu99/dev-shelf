import DataTable from "../components/DataTable"
import { dataArray } from "../data/data"

const JavascriptPage = () => {
  return (
    <DataTable dataArray={dataArray} page='JavascriptPage'/>
  )
}

export default JavascriptPage