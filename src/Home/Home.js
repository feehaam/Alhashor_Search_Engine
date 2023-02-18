import { Link } from "react-router-dom";
import './Home.css'

function Home(props) {
    return (
        <div className="homeCont">
            <div class="row">
                <div class="col-sm-6" >
                    <Link to={'/search'} className='link'>
                        <div class="card m-2">
                            <h5 class="card-header">Search Hadis</h5>
                            <div class="container">
                                <div class="row">
                                    <div class="col img-container">
                                        <img src="/photos/search.png" alt="search" class="card-img-top card-pic"></img>
                                    </div>
                                    <div class="col">
                                        <div class="card-body">
                                            <p class="card-text">হাদীসের ক্রম কিংবা বর্ণনাকারীর নাম দিয়ে হাদীস খুঁজুন। অথবা যেকোনো শব্দ/বিষয় কিংবা হাদীসের অংশ লিখে সার্চ করে সেই বিষয়ের সমস্ত হাদীস দেখুন। </p>
                                            <div onClick={() => {
                                                props.setDisplay(1);
                                            }} class="btn btn-success btn-full">হাদীস সার্চ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div class="col-sm-6">
                    <div class="card m-2">
                    <Link to={'/topics'} className='link'>
                        <h5 class="card-header">Hadis by topics</h5>
                        <div class="container">
                            <div class="row">
                                <div class="col img-container">
                                    <img src="/photos/topics.jpg" alt="topics" class="card-img-top card-pic"></img>
                                </div>
                                <div class="col">
                                    <div class="card-body">
                                        <p class="card-text">বিভিন্ন বিষয়-ভিত্তিক হাদীস এর তালিকা। নামাজ, রোজা, ভাগ্য, পবিত্রতা, সুন্নাহ, ঈমান, আমল ইত্যাদি সহ আরও শতাধিক বিষয়ে সকল হাদীস একসাথে তালিকায়।  </p>
                                        <div onClick={() => {
                                            props.setDisplay(2);
                                        }} class="btn btn-primary btn-full p-1">বিষয়ভিত্তিক হাদীস </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col-sm-6">
                    <div class="card m-2">
                    <Link to={'/books'} className='link'>
                        <h5 class="card-header">Books</h5>
                        <div class="container">
                            <div class="row">
                                <div class="col img-container">
                                    <img src="/photos/book.jpg" alt="book" class="card-img-top card-pic"></img>
                                </div>
                                <div class="col">
                                    <div class="card-body">
                                        <p class="card-text">সিহাহ সিত্তাহ (বুখারি, মুসলিম, তিরমিজি, আবুদাউদ, ইবন্‌ মাজাহ, নাসা'ঈ) শুরু হতে শেষ পর্যন্ত সকল হাদীস পড়ুন অথবা ওডিও তে শুনুন। </p>
                                        <div onClick={() => {
                                            props.setDisplay(3);
                                        }} class="btn btn-warning btn-full">হাদীসের বই</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="card m-2">
                        <h5 class="card-header">More...</h5>
                        <div class="container">
                            <div class="row">
                                <div class="col img-container">
                                    <img src="/photos/cs.jpg" alt="coming soon" class="card-img-top card-pic"></img>
                                </div>
                                <div class="col">
                                    <div class="card-body">
                                        <p class="card-text">ইসলামের বিভিন্ন বিষয়ে আরও নতুন বই (তাফসির, সিরাত, বিধান, ইতিহাস) শীগ্রই আসছে ইনশাল্লাহ। (জ্ঞান হোক সকলের জন্য উন্মুক্ত)। </p>
                                        <div class="btn btn-info btn-full">Coming soon</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;