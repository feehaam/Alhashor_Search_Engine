import { useState } from "react";
import getNum, { getBook } from "./EngToBng";
import HadisView from "./HadisView";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Book.css'

function Books() {
    const [b, setB] = useState(0);
    const [page, setPage] = useState(0);
    const [show, setShow] = useState([]);
    const books = ["BUK", "MUS", "TIR", "MAJ", "DAU", "NAS"];
    const totals = [7053, 7281, 3500, 4341, 5184, 5758];
    let l = totals[b];

    function chageBook(nb) {
        setB(nb);
        setPage(0);
        let toDisplay = [];
        for (let i = 0; i < 20 && i < l; i++) {
            toDisplay[i] = books[nb] + "-" + (i + 1);
        }
        setShow(toDisplay);
    }

    function multiPage(c) {
        if (c > 0) {
            c = page + c;
            setPage(page + 10);
            if (page >= l) setPage(l - 1);
            let toDisplay = [];
            let p = 0;
            for (let i = c * 20; i < c * 20 + 20 && i < l; i++) {
                toDisplay[p++] = books[b] + "-" + (i + 1);
            }
            setShow(toDisplay);
        }
        else {
            if (page - 10 < 0) {
                setPage(0);
                c = 0;
            }
            else {
                c = page - 10;
                setPage(page - 10);
            }
            let toDisplay = [];
            let p = 0;
            for (let i = c * 20; i < c * 20 + 20 && i < l; i++) {
                toDisplay[p++] = books[b] + "-" + (i + 1);
            }
            setShow(toDisplay);
        }
    }

    function changePage(c) {
        c = page + c;
        if (c * 20 > l) return;
        else if (c === -1) return;
        setPage(c);
        let toDisplay = [];
        let p = 0;
        for (let i = c * 20; i < c * 20 + 20 && i < l; i++) {
            toDisplay[p++] = books[b] + "-" + (i + 1);
        }
        setShow(toDisplay);
    }

    return (
        <div>
            {show.length === 0 ? <div className="select">নিচে থেকে যেকোনো একটি বই ক্লিক করুন</div> : ""}
            <div className="bcontainer">
                {show.length > 0 && b === 0 ?
                    <button className="book-on" onClick={() => { chageBook(0) }}>বুখারি&nbsp;শরীফ</button> :
                    <button className="book" onClick={() => { chageBook(0) }}>বুখারি&nbsp;শরীফ</button>
                }
                {show.length > 0 && b === 1 ?
                    <button className="book-on" onClick={() => { chageBook(0) }}>মুসলিম&nbsp;শরীফ</button> :
                    <button className="book" onClick={() => { chageBook(1) }}>মুসলিম&nbsp;শরীফ</button>
                }
                {show.length > 0 && b === 2 ?
                    <button className="book-on" onClick={() => { chageBook(0) }}>তিরমিজি&nbsp;শরীফ </button> :
                    <button className="book" onClick={() => { chageBook(2) }}>তিরমিজি&nbsp;শরীফ </button>
                }
                {show.length > 0 && b === 3 ?
                    <button className="book-on" onClick={() => { chageBook(0) }}>আবু&nbsp;দাউদ&nbsp;শরীফ </button> :
                    <button className="book" onClick={() => { chageBook(3) }}>আবু&nbsp;দাউদ&nbsp;শরীফ </button>
                }
                {show.length > 0 && b === 4 ?
                    <button className="book-on" onClick={() => { chageBook(0) }}>সুনানু&nbsp;ইবনে&nbsp;মাজাহ </button> :
                    <button className="book" onClick={() => { chageBook(4) }}>সুনানু&nbsp;ইবনে&nbsp;মাজাহ </button>
                }
                {show.length > 0 && b === 5 ?
                    <button className="book-on" onClick={() => { chageBook(0) }}>সুনানু&nbsp;নাসাঈ&nbsp;শরীফ </button> :
                    <button className="book" onClick={() => { chageBook(5) }}>সুনানু&nbsp;নাসাঈ&nbsp;শরীফ </button>
                }
            </div>
            {show.length !== 0 ?
                <div className="headline">
                    <div className="title">
                        {getBook(books[b]).substring(0, getBook(books[b]).indexOf("-"))}
                    </div>
                    <div class="tcontainer">
                        <div class="titem">
                            <div onClick={() => { multiPage(-10) }}>-10</div>
                        </div>
                        <div class="titem">
                            <div onClick={() => { changePage(-1) }}>&#171; Prev</div>
                        </div>
                        <div class="titem">পৃষ্ঠা {getNum((page + 1).toString())}/{getNum(l.toString())}</div>
                        <div class="titem"><div onClick={() => { changePage(1) }}>Next &#187;</div></div>
                        <div class="titem">
                            <div onClick={() => { multiPage(10) }}>+10</div>
                        </div>
                    </div>
                </div> : ""}
            {show?.map(
                (hadis) => (
                    <HadisView tag={hadis} words={[]} />
                )
            )}
        </div>
    );
}
export default Books;