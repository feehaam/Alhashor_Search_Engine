function NextPrev({ page, setPage, allResults, setDisplayHadis, resultCount }) {

    function prev() {
        if (page < 1) return;
        if (page * 20 >= resultCount) {
            page--;
        }
        let toDisplay = [];
        if (page > 0)
            page--;
        setPage(page);
        for (let i = page * 20; i < page * 20 + 20 && i < resultCount; i++) {
            toDisplay[i - page * 20] = allResults[i];
        }
        setDisplayHadis(toDisplay);
        document.documentElement.scrollTop = 0;
    }

    function next() {
        if (page * 20 >= resultCount || (page + 1) * 20 >= resultCount) return;
        let toDisplay = [];
        page++;
        setPage(page);
        for (let i = page * 20; i < page * 20 + 20 && i < resultCount; i++) {
            toDisplay[i - page * 20] = allResults[i];
        }
        setDisplayHadis(toDisplay);
        document.documentElement.scrollTop = 0;
    }

    return (
        <div>
            <button type='button' onClick={prev}>Prev</button>
            <button type='button' onClick={next}>Next</button>
        </div>
    );
}

export default NextPrev;