import React from 'react'

const DataTable = ({dataArray, page}) => {
  let count = 1;
  return (
    <div className='m-10'>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              dataArray.map((data) => {
                return( data.page === page &&                    
                <tr key={count++}>
                  <th>{count}</th>
                  <td><a href={data.link} className='link' target='_blank'>{data.name}</a></td>
                  <td>{data.detail}</td>
                </tr>)
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DataTable