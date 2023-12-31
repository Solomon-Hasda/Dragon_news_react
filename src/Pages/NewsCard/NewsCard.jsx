import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {

    const { title, image_url,details,_id} = news;

    return (
        <div>
            <div className="card md:w-full bg-base-100 shadow-xl mb-10 border-b-2">
                <figure><img src={image_url
                } alt="image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>

                    {details.length > 200 ? <p>{details.slice(0,200)}<Link to={`/news/${_id}`} className="text-blue-500 hover:text-indigo-700"> Read More...</Link></p>:
                        <p>{details}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default NewsCard;