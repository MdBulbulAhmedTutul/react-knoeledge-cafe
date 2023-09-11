import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex items-center justify-between border-b-2 py-2 max-w-7xl mx-auto px-3'>
            <h1 className='text-4xl font-semibold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;