import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBarPage from './NavBarPage'
import BarChart from './barchart'
import BubbleChart from './BubbleChart'
import { LineChart, LineCharttwo } from './linechart'
import { Sankeychart } from './sankeychart'
import { CalenderChart } from './calenderchart'
import Pestelchart from './pestelchart'
import { PieChart } from './piechart'

import IconCom from './IconCom'
import Headmain from './headmain'

const MainPage = () => {
  let [bubdata, setbubdata]=useState([["country", "relevance","lilehood","Region","intensity"]])
    let [linedata, setlinedata]=useState([[{ type: "date", label: "Day" },"intensity","total-news"]])
    let[twolinedata, settwolinedata]=useState([[{ type: "date", label: "Day" },"likelihood","total-news"]])
    let [newdata, setdata]=useState([["Element","Intensity",{ role: "style" },{sourceColumn: 0,role: "annotation",type: "string",calc: "stringify",},]])
    let [sankdata, setsankdata]=useState([ ["From", "To", "revelence"],])
    let [caldata, setcaldata]=useState([ [{ type: "date", id: "Date" },{ type: "number", id: "Won/Loss" }],])
    let [pestledata, setpestledata]=useState([])
    let [piedata, setpiedata]=useState([["Pizza", "Popularity"]])
    function randomCol() {
        let maxVal = 0xFFFFFF; 
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`
    }

    const forbarchart=(filt)=>{
      let ktt=[["Pizza", "Popularity"]]
      setpiedata(ktt);
      let kt=["Element","Intensity",{ role: "style" },{sourceColumn: 0,role: "annotation",type: "string",calc: "stringify",},]
      setdata([kt])
        let k = [];
        for (let i of filt) {
          if (!k.includes(i["sector"])) {k.push(i["sector"]);}};
      for (let i  of k) {
          let t = 0;
      let cnt = 0;
      for (let j of filt) {
          if (j["sector"] === i) {
              cnt++;
              t += j["intensity"];
              if (i === "") {i = "other"};
          }
      };
      let pick=randomCol();
      let rr=[i, t/cnt, pick, null];
      setdata(newdata => [...newdata, rr])
      let r = [i,cnt];  
      setpiedata(piedata => [...piedata, r])
      }

    };

    const forbubblechart=(filt)=>{
      let cntry=[]
      for (let i of filt) {if (!cntry.includes(i["country"])){cntry.push(i["country"])}};
      for (let i  of cntry) {
        let ints = 0;
        let likh=0;
        let revl=0;
    let cnt = 0;
    let regi=""
    for (let j of filt) {
        if (j["country"] === i) {
            cnt++;
            ints += j["intensity"];
            likh += j["likelihood"];
            revl += j["relevance"];
            cnt+=1
            regi=j["region"]
        }       
    };
    let rr=[i,revl/cnt,likh/cnt,regi,ints/cnt]
    setbubdata(bubdata => [...bubdata, rr])
    }
    }

    const forlinechart=(filt)=>{
      let kt=[[{ type: "date", label: "Day" },"intensity","total-news"]]
      let ktt=[[{ type: "date", label: "Day" },"likelihood","total-news"]]
      settwolinedata(ktt)
      setlinedata(kt)
      let dd=[]
      let pt=[]
      for (let i of filt) {
        let p=i["added"].split(", ")
        let da=p[1].split(" ")
        let sett=p[0]+", "+da[0]+" "+da[1]
        if (!dd.includes(sett)){
        dd.push(sett)}};
        let cot=0
      for (let i  of dd) {
        let count=0
        let ints=0
        let likelihood=0
        for (let j of filt) {if (j["added"].includes(i)) {count=count+1; ints=ints+j["intensity"]; likelihood=likelihood+j["likelihood"]}};
        if (i.includes("2017")){
        let stt=i
        let p=stt.split(", ")
        let da=p[1].split(" ")
        let arr=[new Date(i), ints/count, count]
        let arrtwo=[new Date(i),likelihood/count, count]
        if (!pt.includes(arr)){
          cot=cot+1
          setlinedata(linedata => [...linedata, arr])
          settwolinedata(twolinedata => [...twolinedata, arrtwo])
        } 
        }   
    }
    }

    const forsankchart=(filt)=>{
      let kt=[["From", "To", "revelence"],]
      setsankdata(kt)
    let k = [];
for (let i of filt) {
    if (!k.includes(i["pestle"]) && i["pestle"] !== "") {k.push(i["pestle"]);}}
for (let i of k) {
    let p = [];
    for (let j of filt) {
        if (j["pestle"] === i) {
            if (!p.includes(j["sector"]) && j["sector"] !== "") {p.push(j["sector"]);}}
        }
    for (let sector of p) {
        let ct = 0;
        for (let l of filt) {if (l["sector"] === sector && l["pestle"] === i) {ct += l["relevance"];}}
        let rr=[i,sector+" ", ct]
      setsankdata(sankdata => [...sankdata, rr])
    }
}
    }

    const forcalenderchart=(filt)=>{
      let ktt=[[{ type: "date", id: "Date" },{ type: "number", id: "Won/Loss" }]]
      setcaldata(ktt)
      const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      let dd=[]
      let dt=[]
    for (let i of filt) {
        let p=i["added"].split(", ")
        let da=p[1].split(" ")
        let mth=months.indexOf(p[0])+1
        let sett=p[0]+", "+da[0]+" "+da[1]+", "+(months.indexOf(p[0])+1)
        let setyle=[da[1],mth,da[0]]
        if (!dd.includes(sett)){
        dd.push(sett) 
        dt.push(setyle)
      } 
    };
    let felt=[]
    for (let i of filt) {
      let p=i["added"].split(", ")
        let da=p[1].split(" ")
        let mth=months.indexOf(p[0])+1
        let setyle=da[1]+", "+mth+", "+da[0]
      let newsave={"date":setyle, "relevance":i["relevance"]}
      felt.push(newsave)
  };
  let ind=[]
  for (let i of felt) {
    if (!ind.includes(i["date"])){
      ind.push(i["date"])
    }
};
          let store=[]
      for (let i of ind) {
        let ct=0;
        let rev=0;
        for (let j of felt){if (j["date"]==i){ct=ct+1;rev=rev+j["relevance"];}}
        let dis=i.split(", ")
        let arr=[new Date(parseInt(dis[0]), parseInt(dis[1]), parseInt(dis[2])), rev/ct]
        store.push(arr)
        setcaldata(caldata => [...caldata, arr])
      }
    }

  const forpestledata=(filt)=>{
    setpestledata([])
    let kk=[]
    let sect=[]
    for (let i of filt) {
      if (!kk.includes(i["pestle"])) {
        kk.push(i["pestle"])
      }
      if (!sect.includes(i["sector"])) {sect.push(i["sector"])}
    }
    for (let i of kk){ 
      let ct=0; 
      for (let j of filt){
        if(j["pestle"]==i){
          ct=ct+1
        }
      };   
          console.log(i, ct)
          if (i!=""){
            let ar={"pestle":i, "newss":ct}; 
            setpestledata(pestledata => [...pestledata, ar])}
          else {
            let ar={"pestle":"other", "newss":ct}; 
            setpestledata(pestledata => [...pestledata, ar])
          }
          
        };
    console.log(kk)
  }

  useEffect(()=>{
    async function fetchProducts() {
      const { data }= await axios.get('http://127.0.0.1:8000/alldata/');
    let filt=data
    forbubblechart(filt)
    forbarchart(filt)
    forlinechart(filt)
    forsankchart(filt)
    forcalenderchart(filt)
    forpestledata(filt)

    }
    fetchProducts()
    
  }, [])
  return (
    <>
    <div className='mt-5'>
    <div className='row m-0 p-0 mx-auto mb-5' style={{width:"100%"}}><Headmain></Headmain></div>
    <div className='row m-0 p-0 mx-auto' style={{width:"80%"}}>
    <div className='col-xxl-6 col-xl-6 col-sm-12 col-sm-12 m-0  p-1'>
    <div className="card m-0 ">
            <div className="card-body " style={{width: "100%"}}><h2 className="p-0 mt-1">Visualization of data for News from Aug 2016-Feb 2017</h2></div>
            <div className="card-body ">
            <h3>Data Visualized from the given data are</h3>

<ul>
  <li>Intensity</li>
  <li>Likelihood</li>
  <li>Total News</li>
  <li>Sectors</li>
  <li>Pestle</li>
  <li>Country</li>
  <li>Region</li>
  <li>Added Date</li>
  <li>Relevance</li>
</ul> 
            </div>
            <div className="card-body ">
            <h3>Types of Chart Used for Data Visualization</h3>
            <div className='d-flex flex-wrap justify-content-around'>
            <IconCom></IconCom>
            </div>
            </div>
            </div>
            
            </div> 
        <div className='col-xxl-6 col-xl-6 col-sm-12 col-sm-12 me-0  p-1'><div className="card" style={{height: "fit-content"}}>
            <div className="card-body"><h2>Total news for each sector</h2>
            <PieChart piedata={piedata}></PieChart></div>
            </div></div>
              
                  
        </div>
    <div className='row m-0 p-0 mx-auto' style={{width:"80%"}}>
    <div className='col-xxl-6 col-xl-6 col-sm-12 col-sm-12 m-0  p-1'>
    <div className="card m-0 ">
            <div className="card-body " style={{width: "100%"}}><h2 className="p-0 mt-1">Total news for each pestle</h2>
            <div style={{width: "100%"}}><Pestelchart pestledata={pestledata}></Pestelchart></div>
            </div>
            
            </div>
      <div className="card mt-2">
            <div className="card-body"><h2 className="p-0 m-0">Average revelance of news from 2016-Aug to 2017-Feb</h2></div>
            <CalenderChart caldata={caldata}></CalenderChart></div>
            
            </div> 
        <div className='col-xxl-6 col-xl-6 col-sm-12 col-sm-12 me-0  p-1'><div className="card" style={{height: "fit-content"}}>
            <div className="card-body"><h2>Total relevant news on each pestle, sector wise</h2></div>
            <Sankeychart sankdata={sankdata}></Sankeychart></div></div>
              
                  
        </div>
        <div className='row m-0 p-0 mx-auto' style={{width:"80%"}}>
            <div className='col-xxl-6 col-xl-6 col-sm-12 col-sm-12 me-0  p-1'><div className="card" style={{height: "fit-content"}}>
            <div className="card-body"><h2>Intensity of news on different sectors</h2></div>
              <BarChart newdata={newdata}></BarChart></div></div>
            <div className='col-xxl-6 col-xl-6 col-sm-12 col-sm-12 m-0  p-1'><div className="card">
            <div className="card-body"><h2 className="p-0 m-0">Overall Impact of news world wide</h2></div>
              <BubbleChart bubdata={bubdata}></BubbleChart></div></div>
        </div>
        <div className='row m-0 p-0 mx-auto' style={{width:"80%"}}>
        <div className='col-xxl-6 col-xl-6 col-sm-12 col-sm-12 me-0  p-1'><div className="card" style={{height: "fit-content"}}>
            <div className="card-body"><h2>Average Intensity and total news for January 2017</h2></div>
            <LineChart linedata={linedata}></LineChart></div></div>
            <div className='col-xxl-6 col-xl-6 col-sm-12 col-sm-12 m-0  p-1'><div className="card">
            <div className="card-body"><h2 className="p-0 m-0">Average Likelihood and total news for January 2017</h2></div>
            <LineCharttwo linedata={twolinedata}></LineCharttwo></div></div>          
        </div>
        
    </div>
    </>
  )
}

export default MainPage