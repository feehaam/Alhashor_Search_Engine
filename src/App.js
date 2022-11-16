import { useEffect, useState } from "react";
import "./App.css";
import HadisView from "./HadisView";
import Search from "./Search";

function App() {
  const [wordmap, setWordmap] = useState({});
  const [substring, setSubstring] = useState({});
  const [findHadis, setFindHadis] = useState([]);

  useEffect(() => {
    let url = "wordmap.json";
    fetch(url).then((res) => res.json()).then((data) => {
      setWordmap(data);
    });
  }, []);

  useEffect(() => {
    let url = "substring.json";
    fetch(url).then((res) => res.json()).then((data) => {
      setSubstring(data);
    });
  }, []);

  const wordMapObj = new Map(Object.entries(wordmap));
  const substringObj = new Map(Object.entries(substring));

  const hadisSet = new Set();
  let absoluteResult;

  const find = (event) => {
    event.preventDefault();
    hadisSet.clear();
    let userText = event.target.search.value;
    let words = userText.split(" ");
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      addHadisTagInResult(word);
      absoluteResult = hadisSet.length;
      addSubstringWords(word);
    }
    let hadisArray = Array.from(hadisSet);
    setFindHadis(hadisArray);
  };

  const addHadisTagInResult = (word) => {
    let hadisArray = wordMapObj.get(word);
    for (let j = 0; j < hadisArray.length; j++) {
      let tag = hadisArray[j];
      hadisSet.add(tag);
    }
  }

  const addSubstringWords = (word) => {
    let similarWords = substringObj.get(word);
    for (let i = 0; i < similarWords.length; i++) {
      addHadisTagInResult(similarWords[i]);
    }
  }

  return (
    <div className="App">
      <h2>Hadis Engine</h2>
      <Search />
    </div>
  );
}

export default App;