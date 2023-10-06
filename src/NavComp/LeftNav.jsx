import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="p-4">

            <h2 className="text-3xl font-bold">All Categories</h2>
            <div className="space-y-6 p-4">
                {
                    categories.map(category =>
                        <NavLink
                            className="text-xl hover:text-purple-600 font-semibold block"
                            key={category.id}
                            to={`/category/${category.id}`}
                        >{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNav;