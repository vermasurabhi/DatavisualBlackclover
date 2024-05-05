import React from 'react'

function Displaydata({pestle, news}){
    return (<>
    <div className="card m-1" style={{width: "fit-content", minWidth: "10rem"}}>
  <div className="card-header text-bg-primary">
    {pestle}
  </div>
  <div className="card-body">
    <h5 className="card-title text-center">{news}</h5>
  </div></div>
    </>)
}

const Pestelchart = ({pestledata}) => {
    console.log(pestledata)
  return (
    <>
    <div className='d-flex flex-wrap justify-content-center'>
    {pestledata.map((item)=>(<Displaydata pestle={item["pestle"]} news={item["newss"]}></Displaydata>))}


    </div>
    
    </>
  )
}

export default Pestelchart

