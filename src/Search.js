import { useState } from "react";
import HadisView from "./HadisView";
import NextPrev from "./NextPrev";
import React from 'react';
import "./Search.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import getNum from "./EngToBng";

function Search() {

    let results = new Map();
    const [allResults, setAllResults] = useState([]);
    const [page, setPage] = useState(0);
    const [displayHadis, setDisplayHadis] = useState([]);
    const [resultCount, setResultCount] = useState(0);
    const [searchedWords, setSearchedWords] = useState([]);

    /*
        Clean the input
        Store all searched words
        For every word
            Collect all corresponding hadis tags
            Add all tags in a set
            If input doesn't have too many words
                Collect all parent strings 
                For each parent tag
                    Collect all corresponding hadis tags
                    Add all tags in a set
            For each tags in set
                If the tag already exist in map, increase frequency
                Else add the tag in map with frequecy = 1
            Sort the map
            Add all item of map into a set
            Turn the set into an ARRAY
        Display items from ARRAY based on page number
    */

    const scan = async (event) => {
        setPage(0);
        event.preventDefault();
        let userText = event.target.search.value;
        if (userText == null || userText.lengh < 1)
            return;
        results.clear();
        userText = userText.replace(/[&/#^+()$~%.'":*?<>{}!@,;।]/g, '');
        while (userText.includes("  ")) {
            userText = userText.replace("  ", " ");
        }
        if (userText[0] === ' ') userText = userText.substring(1, userText.length);
        if (userText[userText.length - 1] === ' ') userText = userText.substring(0, userText.length - 1);
        let words = userText.split(" ");
        setSearchedWords(words);
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
    };

    let lastHadisIdx = 0;

    // RETURN 
    return (
        <div>
            <form onSubmit={scan} className="sc">
                <div className="info">হাদীসের ক্রম কিংবা বর্ণনাকারীর নাম দিয়ে হাদীস খুঁজুন। অথবা যেকোনো শব্দ/বিষয় কিংবা হাদীসের অংশ লিখে সার্চ করুন।</div>
                <hr></hr>
                <input name="search" type={"text"} className={"sb"} /><br></br>
                <input type="submit" className="s" value="Search" />
            </form>
            {resultCount > 0 ? <div className="count">{"মোট " + getNum(resultCount.toString()) + " টি হাদিস পাওয়া গেছে "}
                <br /><b>
                {getNum((page * 20 + 1).toString()) + " - " + getNum((page * 20 + 20).toString()) + " পর্যন্ত দেখানো হচ্ছে"} </b></div> : ""}
            {displayHadis?.map(
                (hadis) => (
                    <HadisView tag={hadis} words={searchedWords} />
                )
            )}
            {lastHadisIdx < resultCount ? <NextPrev page={page} setPage={setPage} allResults={allResults} setDisplayHadis={setDisplayHadis} resultCount={resultCount} /> : ""}
        </div>
    );
}
export default Search;