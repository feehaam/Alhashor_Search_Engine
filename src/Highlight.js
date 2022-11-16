function Highlight(props){
    let mark = props.mark;
    for(let i=0; i<mark.length; i++){
        if(props.word.includes(mark[i])){
            return (
                <b>
                    {props.word+" "}
                </b>
            )
        }
    }
    return (
        <normal>
            {props.word+" "}
        </normal>
    )
}
export default Highlight;