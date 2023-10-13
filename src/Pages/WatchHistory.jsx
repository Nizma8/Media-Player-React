import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getHistory } from '../Services/allAPi'


function WatchHistory() {
  const[history,setHistory]=useState([])

  const getWatchHistory =async()=>{

    const {data} = await  getHistory ()
    setHistory(data)
  }

  useEffect(()=>{
    getWatchHistory()
  },[])

  const removeHistory=async(id)=>{
    await deleteHistory(id)
    getWatchHistory()
  }
  return (
    <div>
      <div className="d-flex justify-content-between container align-items-center mt-5">
 <h4>Watch History</h4>
 <Link to={'/home'} style={{textDecoration:'none',color:'white'}}> 
 <i className="fa-solid fa-arrow-left"></i> 
 Back to home
 </Link>
      </div>

      <div className='container mt-5 '>
       
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URl</th>
              <th>Time</th>
              <th></th>
             
            </tr>
          </thead>
          <tbody>
          {history.length>0?
         ( history.map((item,index)=>{
            return(
            
              <tr key={index} >
                <td>{item?.id}</td>
                <td>{item?.caption}</td>
                <td><a href={item?.EmbbedLink} target='_blank'>{item?.EmbbedLink}</a></td>
                <td>{item?.formattedDateTime}</td>
                <td><button style={{border:'none',background:'black'}} onClick={()=>{
                  removeHistory(item?.id)
                }}> <i className="fa-solid fa-trash text-danger"></i> </button></td>
              
              </tr>
           
            )
          })):(
            <p className='fw-bolder fs-5 text-danger mt-3'>Sorry nothing to display!!</p>
          )
        }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default WatchHistory
