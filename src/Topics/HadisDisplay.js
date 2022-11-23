import HadisView from "../HadisView";
import NextPrev from "../NextPrev";

function HadisDisplay({ hadisList, page, setPage, allResults, setDisplayHadis, resultCount }) {
    return (
        <div>
            {hadisList === null || hadisList.length === 0 ? <div className="select">সূচিপত্র হতে যেকোনো বিষয় নির্বাচন করুন</div> :
                <div>
                    <NextPrev page={page} setPage={setPage} allResults={allResults} setDisplayHadis={setDisplayHadis} resultCount={resultCount} />
                </div>
            } 
            {
                hadisList?.map(
                    (hadis) => (
                        <HadisView tag={hadis} words={[]} />
                    )
                )
            }
        </div>
    );
}
export default HadisDisplay;