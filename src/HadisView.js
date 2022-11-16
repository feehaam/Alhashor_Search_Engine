import { useState } from "react";
import Highlight from "./Highlight";

function HadisView(props) {
    const [hadisText, setHadisText] = useState("");
    const words = props.words;
    const getHadisText = (tag) => {
        let book = tag.substring(0, 3);
        let hadis = tag.substring(4, tag.length);
        while (hadis.length < 4) hadis = "0" + hadis;
        let books = ["Bukhari", "Daud", "Majah", "Muslim", "Nasae", "Tirmiji"];
        for (let i = 0; i < books.length; i++) {
            if (books[i].toUpperCase().slice(0, 3) === book) {
                book = books[i];
                break;
            }
        }
        let url = "json/hadis/" + book + "/" + hadis + "/text.txt";
        fetch(url).then((res) => res.json()).then((data) => {
            setHadisText(data);
        });
    }

    return (
        <div>
            <br></br>
            {getHadisText(props.tag)}
            {props.tag}
            <br></br>
            {hadisText.split(" ").map(word => <Highlight word={word} mark={words} />)}
        </div>
    );
}

export default HadisView;