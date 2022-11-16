import { useEffect, useState } from "react";
import HadisView from "./HadisView";

function Search() {

    let results = new Map()
    const [findHadis, setFindHadis] = useState([]);

    const scan = (event) => {
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
        for (let i = 0; i < words.length; i++) {
            addToResults(words[i]);
            if (i == words.lengh - 1) sortResults();
        }
        sortResults();
    };

    function addToResults(word) {
        console.log(word);
        let fileName = "json/tags/" + word.substring(0, 2) + ".json";
        fetch(fileName).then((res) => res.json()).then((data) => {
            const wordMapObj = new Map(Object.entries(data));
            let tagArray = wordMapObj.get(word);
            for (let i = 0; i < tagArray.length; i++) {
                let tag = tagArray[i];
                let freq = 1;
                if (results.has(tag)) freq = results.get(tag) + 1
                results.set(tag, freq)
            }
            sortResults();
        });
    }

    function sortResults() {
        results[Symbol.iterator] = function* () {
            yield* [...this.entries()].sort((a, b) => b[1] - a[1]);
        }
        let hadisSet = new Set();
        for (let [key, value] of results) {
            hadisSet.add(key);
        }
        let allResults = Array.from(hadisSet)
        let toDisplay = [];
        for(let i=0; i<20 && i<allResults.length; i++){
            toDisplay[i] = allResults[i];
        }
        setFindHadis(toDisplay);
    }

    // RETURN 
    return (
        <div>
            <form onSubmit={scan}>
                <input name="search" type={"text"}></input>
                <input type="submit" value="Upgraded search" />
            </form>
            {findHadis?.map(
                (hadis) => (
                    <HadisView tag={hadis} />
                )
            )}
        </div>
    );
}
export default Search;