import React,{useState} from "react";

const Tabs=()=>{
    let [numtab,setNumtab]=useState("Tab 1");

    function handleFnc(e){
     setNumtab(e.target.dataset.tab);
    }
    let[lettertab,setLettertab]=useState("Tab A");
    function handleFnc1(e){
        setLettertab(e.target.dataset.tab);
    }
    return (
        <div>
            <ul>
               <li data-tab="Tab 1" onMouseOver={handleFnc}>Tab 1</li>
               <li data-tab="Tab 2" onMouseOver={handleFnc}>Tab 2</li>
               <li data-tab="Tab 3" onMouseOver={handleFnc}>Tab 3</li>
            </ul>
            <p>Content for {numtab}</p>
            <ul>
            <li data-tab="Tab A" onMouseOver={handleFnc1}>Tab A</li>
               <li data-tab="Tab B" onMouseOver={handleFnc1}>Tab B</li>
               <li data-tab="Tab C" onMouseOver={handleFnc1}>Tab C</li>
            </ul>
            <p>Content for {lettertab}</p>
        </div>
    )
}

export default Tabs;