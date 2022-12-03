import HadisView from "../HadisView";
import Loading from "../Loading";
import NextPrev from "../NextPrev";

function HadisDisplay({ topic, hadisList, page, setPage, allResults, setDisplayHadis, resultCount }) {
    return (
        <div>
            {(hadisList === null || hadisList.length === 0) && topic === "সূচিপত্র" ? <div className="select">সূচিপত্র হতে যেকোনো বিষয় নির্বাচন করুন</div> :
                (hadisList === null || hadisList.length === 0) ? <Loading /> :
                    <div>
                        <NextPrev page={page} setPage={setPage} allResults={allResults} setDisplayHadis={setDisplayHadis} resultCount={resultCount} />
                    </div>
            }
            {
                hadisList?.map(
                    (hadis) => (
                        <HadisView tag={hadis} words={topic.split(" ")} />
                    )
                )
            }
        </div>
    );
}
export default HadisDisplay;