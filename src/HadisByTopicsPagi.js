import HadisView from "./HadisView";

function HadisByTopicPagi({ hadisList, setPage }) {
    
    return (
        <div>
            {hadisList?.map(
                (hadis) => (
                    <HadisView tag={hadis} words={[]} />
                )
            )}
        </div>
    );
}
export default HadisByTopicPagi;