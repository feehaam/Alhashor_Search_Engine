function IndexRow({id, item, count, updateHadisList}){
    return (
        <div onClick={()=>{updateHadisList(id)}}>
            {item}-------({count})<br></br>
        </div>
    );
}
export default IndexRow;