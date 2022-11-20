import { useState } from "react";
import Highlight from "./Highlight";
import 'bootstrap/dist/css/bootstrap.min.css';
import './HadisView.css'
import getNum, { getBook } from "./EngToBng";

var limit = 600;
function HadisView(props) {
    const [hadisText, setHadisText] = useState("");
    const [toShow, setToShow] = useState("");
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
            if(hadisText.length < limit) setToShow(hadisText);
            else setToShow(hadisText.substring(0, limit)+"....");
        });
    }

    function expand(){
        limit = hadisText.length+4;
        setToShow(hadisText);
    }

    return (
        <div className="hvc">
            {getHadisText(props.tag)}
            <br></br>
            <div className="card text-dark bg-light m-1">
                <h5 class="card-header">{getBook(props.tag)}{getNum(props.tag.substring(4, props.tag.length))}</h5>
                <div class="card-body">
                    <div className="h-text">
                        {toShow.split(" ").map(word => <Highlight word={word} mark={words} />)}
                        {toShow.length !== hadisText.length ? <div className="more" onClick={expand}>সম্পূর্ণ হাদীস দেখুন</div> : ""}
                    </div>
                </div>
                <div class="card-footer">
                    <div className="op">Copy</div>
                    <div className="op">Listen</div>
                </div>
            </div>
        </div>
    );
}

export default HadisView;