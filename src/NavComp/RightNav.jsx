import { FaGoogle, FaGithub, FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import qZonePic1 from '../assets/qZone1.png'
import qZonePic2 from '../assets/qZone2.png'
import qZonePic3 from '../assets/qZone3.png'

const RightNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl font-semibold">Login with</h2>
                <div>
                    <button className="btn btn-outline btn-primary w-full">
                        <FaGoogle className="text-[#3cba54]"></FaGoogle>
                        Login With Google
                    </button>
                </div>
                <div>
                    <button className="btn btn-outline btn-default  w-full">
                        <FaGithub className="text-black "></FaGithub>
                        Login With Github
                    </button>
                </div>
            </div>
            <div className="p-4 mb-6">
                <h2 className="text-3xl font-semibold mb-3">Find Us On</h2>
                <a className="flex p-4 gap-2 items-center text-xl font-semibold border rounded-t-lg " href="">
                    <FaFacebookSquare className="text-[#1877F2]"></FaFacebookSquare>
                    Facebook
                </a>
                <a className="flex p-4 gap-2 items-center text-xl font-semibold border-x rounded-t-lg " href="">
                    <FaTwitter className="text-[#1DA1F2]"></FaTwitter>
                    Twitter
                </a>
                <a className="flex p-4 gap-2 items-center text-xl font-semibold border rounded-b-lg " href="">
                    <FaInstagram className="text-[#8a3ab9]"></FaInstagram>
                    Instagram
                </a>
            </div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl font-semibold">Q Zone</h2>
                <img src={qZonePic1} alt="" />
                <img src={qZonePic2} alt="" />
                <img src={qZonePic3} alt="" />
            </div>
        </div>
    );
};

export default RightNav;