import { useState } from "react";
import HadisDisplay from "./HadisDisplay";
import HadisIndex from "./HadisIndex";
import './Topics.css'

function Topics() {

    let results = new Map();
    const [topic, setTopic] = useState("সূচিপত্র"); 
    const [allResults, setAllResults] = useState([]);
    const [page, setPage] = useState(0);
    const [displayHadis, setDisplayHadis] = useState([]);
    const [resultCount, setResultCount] = useState(0);

    async function selectTopic(userText) {
        if (userText[0] === ' ') userText = userText.substring(1, userText.length);
        if (userText[userText.length - 1] === ' ') userText = userText.substring(0, userText.length - 1);
        let words = userText.split(" ");
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            const tags = new Set();
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
            }).then(async () => {
                if (words.length < 8) {
                    let subPath = "json/substring/" + word.substring(0, 2) + ".json";
                    await fetch(subPath).then((res) => res.json()).then(async (data) => {
                        const submap = new Map(Object.entries(data));
                        let parents = submap.get(word);
                        if (parents != null) {
                            for (let i = 0; i < parents.length; i++) {
                                let par = parents[i];
                                let parPath = "json/tags/" + par.substring(0, 2) + ".json";
                                await fetch(parPath).then((res) => res.json()).then((data) => {
                                    const parTagMap = new Map(Object.entries(data));
                                    let parTagArray = parTagMap.get(par);
                                    for (let j = 0; j < parTagArray.length; j++) {
                                        let parTag = parTagArray[j];
                                        tags.add(parTag);
                                    }
                                });
                            }
                        }
                    });
                }
            }).then(async () => {
                for (const tag of tags) {
                    let freq = 0;
                    if (results.has(tag)) freq = results.get(tag);
                    freq++;
                    results.set(tag, freq)
                }
            }).then(async () => {
                results[Symbol.iterator] = function* () {
                    yield* [...this.entries()].sort((a, b) => b[1] - a[1]);
                }
                let hadisSet = new Set();
                for (let [key, value] of results) {
                    // The only difference against search is - this condition
                    if (value === words.length)
                        hadisSet.add(key);
                    value = value + 1;
                }
                let ar = Array.from(hadisSet)
                setAllResults(ar);
                let toDisplay = [];
                for (let i = 0; i < 20 && i < ar.length; i++) {
                    toDisplay[i] = ar[i];
                }
                setDisplayHadis(toDisplay);
                setResultCount(ar.length);
            });
        }
    }

    return (
        <div>
            <div className="row">
                <div className="left">
                    <div className="idx">
                        {topic}
                    </div>
                    <HadisIndex setTopic={setTopic} selectTopic={selectTopic} />
                </div>
                <div className="right">
                    <HadisDisplay hadisList={displayHadis} page={page} setPage={setPage} allResults={allResults} setDisplayHadis={setDisplayHadis} resultCount={resultCount} />
                </div>
            </div>
        </div>
    );
} export default Topics;
