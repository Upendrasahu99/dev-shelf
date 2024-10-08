import DataTable from '../components/DataTable'
import { dataArray } from '../data/data.js'

const CssPage = () => {

  return (
    <DataTable dataArray={dataArray} page='CssPage'/>
  )
}

export default CssPage