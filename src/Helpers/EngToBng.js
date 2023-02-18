export function getNum(num){
    const B = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    let s = "";
    for(let i=0; i<num.length; i++){
        let c = num[i] - '0';
        s += B[c];
    }
    return s;
}
export default getNum;

export function getBook(tag){
    if(tag.includes("BUK")) return "বুখারি শরীফ - হাদীস নং ";
    if(tag.includes("MUS")) return "মুসলিম শরীফ - হাদীস নং ";
    if(tag.includes("TIR")) return "তিরমিজি শরীফ - হাদীস নং ";
    if(tag.includes("DAU")) return "আবু দাউদ শরীফ - হাদীস নং ";
    if(tag.includes("MAJ")) return "সুনানু ইবনে মাজাহ - হাদীস নং ";
    if(tag.includes("NAS")) return "সুনানু নাসাঈ শরীফ - হাদীস নং ";
}