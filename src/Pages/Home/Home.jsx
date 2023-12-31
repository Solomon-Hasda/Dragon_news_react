import { useLoaderData } from "react-router-dom";
import LeftNav from "../../NavComp/LeftNav";
import RightNav from "../../NavComp/RightNav";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import BreakingNews from "./BreakingNews";
import NewsCard from "../NewsCard/NewsCard";


const Home = () => {

    const news = useLoaderData()
    console.log(news);

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
           
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftNav></LeftNav>
                </div>
                <div className="md:col-span-2 ">
                   
                    {
                        news.map(aNews =><NewsCard 
                            key={aNews._id}
                            news={aNews}
                            ></NewsCard>)
                    }
                </div>
                <div >
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
}; 

export default Home;