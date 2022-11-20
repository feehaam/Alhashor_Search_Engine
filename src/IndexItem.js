import { useState } from "react";
import IndexRow from "./IndexRow";

function IndexItem({ index, results }) {
    const [display, setDisplay] = useState(0);
    const [hadisList, setHadisList] = useState([]);
    let hadis = []
    let x = []
    for (let i = 0; i < index.length; i++) {
        hadis[i] = results.get(index[i])
        x[i] = i
    }

    function updateHadisList(id){
        setDisplay(1);
        setHadisList(hadis[id])
    }

    return (
        <>
            <div>

                {display === 0 ?
                    <div>
                        <div></div>
                        <div>
                            {x.map((i) => {
                                return <IndexRow id={i} item={index[i]} count={hadis[i].length} updateHadisList={updateHadisList} />
                            })}
                        </div>
                    </div>
                    : 
                    <div>
                        <div onClick={()=>setDisplay(0)}>Return to previous pagae</div>
                        <div>
                            {hadisList}
                        </div>
                    </div>
                }
            </div>
        </>
    );
}
export default IndexItem; 