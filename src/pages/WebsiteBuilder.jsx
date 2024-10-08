import DataTable from "../components/DataTable"
import { dataArray } from "../data/data"

const WebsiteBuilder = () => {
  return (
    <DataTable dataArray={dataArray} page='WebsiteBuilder'/>
  )
}

export default WebsiteBuilder