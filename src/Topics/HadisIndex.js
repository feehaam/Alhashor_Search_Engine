import './HadisIndex.css'

function HadisIndex({ selectTopic, setTopic, setPage }) {
    const index = [
        "ঈমান",
        "নামায",
        "হজ্জ ",
        "রোজা",
        "কবর",
        "কিয়ামত ",
        "আখিরাত",
        "জান্নাত",
        "জাহান্নাম",
        "সাওম ",
        "পবিত্রতা ",
        "বিশ্বাস ",
        "বিতর নামায",
        "কদর "
    ]
    index.sort();
    return (
        <>
            <div class="scroller">
                {index.map((item) => {
                    return <div className='item' onClick={() => { selectTopic(item); setTopic(item); setPage(0) }}>{item}</div>
                })}
            </div>
        </>
    );
}
export default HadisIndex;