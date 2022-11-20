import { useEffect, useState } from "react";
import IndexItem from "./IndexItem";

function Topics() {

    let results = new Map();
    let [res, setRes] = useState(new Map());

    useEffect(() => {
        loadIndex();
    }, [])

    const index = [
        "ঈমান",
        "নামায",
        "জুমার"
    ];

    /*
        Pre defined array
           For each item in array
                fetch an array form a json file
                for each item in that array,
                    add a component
    */


    async function loadIndex() {
        for (let i = 0; i < index.length; i++) {
            let words = index[i].split(" ");
            let tags = new Set();
            for (let word of words) {
                let wordPath = "json/tags/" + word.substring(0, 2) + ".json";
                await fetch(wordPath).then((res) => res.json()).then((data) => {
                    const tagMap = new Map(Object.entries(data));
                    let tagArray = tagMap.get(word);
                    if (tagArray != null) {
                        for (let i = 0; i < tagArray.length; i++) {
                            let tag = tagArray[i];
                            tags.add(tag);
                        }
                    }
                }).then(() => {
                    let ar = Array.from(tags)
                    results.set(word, ar);
                    setRes(results)
                    if (i == index.length - 1) {
                        // console.log("Done..............");
                        // console.log(res); 
                    }
                })
            }
        }
    }

    return (
        <div>
            <div class="container">

                <IndexItem index={index} results={res} />

            </div>
        </div>
    );
}
export default Topics;