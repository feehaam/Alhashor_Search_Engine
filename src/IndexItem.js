import { useState } from "react";
import HadisByTopicPagi from "./HadisByTopicsPagi";
import IndexRow from "./IndexRow";

function IndexItem({ index, results, count }) {
    const [display, setDisplay] = useState(0);
    const [hadisList, setHadisList] = useState([]);
    const [td, setTd] = useState([]);

    let x = []
    for (let i = 0; i < index.length; i++) {
        x[i] = i
    }

    function updateHadisList(id) {
        setDisplay(1);
        setHadisList(results.get(id));
    }

    return (
        <>
            <div>
                {display === 0 ?
                    <div>
                        <div></div>
                        <div>
                            {x.map((i) => {
                                return <IndexRow item={index[i]} count={count[i]} updateHadisList={updateHadisList} />
                            })}
                        </div>
                    </div>
                    :
                    <div>
                        <div onClick={() => setDisplay(0)}>Return to previous pagae</div>
                        <div>
                            <HadisByTopicPagi hadisList={hadisList} />
                        </div>
                    </div>
                }
            </div>
        </>
    );
}
export default IndexItem; 