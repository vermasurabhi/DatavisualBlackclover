import React from 'react'
import { FaChartPie } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa6";
import { TbChartSankey } from "react-icons/tb";
import { TbChartBubble } from "react-icons/tb";
import { TbChartLine } from "react-icons/tb";
import { FaChartArea } from "react-icons/fa";



const IconCom = () => {
  return (
    <>
    <FaChartPie  size = {70} />
    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg>
    <FaChartBar  size = {70} /><TbChartSankey  size = {70} /><TbChartBubble  size = {70} /><TbChartLine  size = {70} /><FaChartArea  size = {70} />
    
    {/* <TbChartSankey  size = {70} /><TbChartBubbleFilled  size = {70} /> */}
    </>
  )
}

export default IconCom