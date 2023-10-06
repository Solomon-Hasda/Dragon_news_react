import { useParams } from "react-router-dom";
import RightNav from "../../NavComp/RightNav";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";


const News = () => {
    const { id } = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                   <h2 className="text-xl">Details</h2>
                   <p>{id}</p>
                </div>
                <div>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default News;