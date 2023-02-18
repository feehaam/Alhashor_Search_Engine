import './suggestions.css'
function Suggestions({setBox}) {
    const sug = [
        "রোজা",
        "নফল নামায",
        "লায়লাতুল কদর",
        "১৫০",
        "২৪২২",
        "আবু হুরায়রা",
        "আয়েশা (রাঃ)",
        "প্রত্যেক কাজ নিয়তের সাথে সম্পর্কিত",
        "ইসলামের ভিত্তি পাঁচটি"
    ];
    return (
        <div className='s-cont'>
            {sug?.map(
                (item) => (
                    <div className="s-item" onClick={() => setBox(item)}>{item}</div>
                )
            )}
        </div>
    );
}

export default Suggestions;