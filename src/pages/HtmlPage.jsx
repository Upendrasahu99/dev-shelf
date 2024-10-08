import DataTable from "../components/DataTable"
import { dataArray } from "../data/data"

const HtmlPage = () => {
  return (
    <DataTable dataArray={dataArray} page='HtmlPage'/>
  )
}

export default HtmlPage