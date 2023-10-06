import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center space-y-5 py-6'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-2xl font-semibold'>Journalism without fear and favour</p>
            <p className='text-xl font-semibold'>{moment().format("dddd, MMMM, d, YYYY")}</p>
        </div>
    );
};

export default Header;