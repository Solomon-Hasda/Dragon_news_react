import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex  ">
            <button className='btn btn-secondary'>Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12 "> <p className="text-purple-500 text-2xl mr-10 border-dotted  font-semibold">I can be a React component, multiple React components....</p></Link>
                <br />
                <Link className="mr-12 "> <p className="text-purple-500 text-2xl mr-10 border-dotted  font-semibold">I can be a React component, multiple React components....</p></Link>
                <br />
                <Link className="mr-12 "> <p className="text-purple-500 text-2xl mr-10  border-dotted font-semibold">I can be a React component, multiple React ....</p></Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;