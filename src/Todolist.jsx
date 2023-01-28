import React, { useState } from "react";
import "./todolist.css"

function Todolist(){
    const [activity,setactivity]=useState("");
    const [listdata,setlistdata]=useState([]);
    function addactivity(){
        setlistdata((listdata)=>{
            const updatedlist=[...listdata,activity]
            console.log(updatedlist)
            setactivity("")
            return updatedlist
        })
    }

    function removeactivity(i){
        const updatedlistdata=listdata.filter((elements,id)=>{
            return i!=id;
        })
        setlistdata(updatedlistdata);
    }

    function removeall(){
        setlistdata('')
    }

    return(
        <>
        <div className="container">
            <div className="header">Todoliiist</div>
            <input type='text' placeholder="add activity" value={activity} onChange={(e)=>setactivity(e.target.value)}/>
            <button onClick={addactivity}>add</button>
            <p className='list-heading'>here is your list</p>
            {listdata!=[] && listdata.map((data,i)=>{
                return (
                    <>
                    <p key={i}>
                        <div className="listdata">{data}
                        <div> <button onClick={()=>removeactivity(i)}>remove</button></div>
                        
                        

                        </div>
                        
                        </p> 
                    </>
                )
            })}

        </div>

       {listdata.length>=1 &&  <button onClick={removeall}>remove all</button>}
         </>
         
    )
};

export default Todolist