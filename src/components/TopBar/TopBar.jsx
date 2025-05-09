import React, { useCallback } from "react";
import { SECTION_ITEMS } from "../../constants/const";
import './TopBar.css';



const TopBar = () =>{

    const renderSectionItems = useCallback(() =>{
  return(
    <div className="topSection">
    {
       SECTION_ITEMS?.map((item) =>{
           return (
               <h1 id={item?.id} className='topSectionText'>
                   {item?.title}
               </h1>
           )
       })
    }
   </div>
  )
    },[])

    return(
        <div className="TopBar">
            <h1 id='topTitle'>My Portfolio</h1>
           {renderSectionItems()}
        </div>
    )
}

export default TopBar;