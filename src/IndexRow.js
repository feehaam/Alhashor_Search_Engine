import { useState } from "react";

function IndexRow({item, count, updateHadisList}){
    return (
        <div onClick={()=>{updateHadisList(item)}}>
            {item}-------({count})<br></br>
        </div>
    );
}
export default IndexRow;