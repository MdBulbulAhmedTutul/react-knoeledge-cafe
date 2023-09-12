import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog,  handleAddToBookMark }) => {
    console.log(blog);
    const { title, cover, reading_time, author_img, author, posted_time, hashtags } = blog;
    return (
        <div className='my-7 border-b-2'>
            <img className='w-full h-72' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center my-6'>
                    <div>
                        <img src={author_img} alt="" />
                    </div>
                    <div className='ml-6'>
                        <p className='text-xl font-medium'>{author}</p>
                        <p><small>{posted_time}</small></p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <p>{reading_time}min read</p>
                    <button onClick={handleAddToBookMark} className='text-red-600 ml-2 text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-3xl font-semibold'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hashtags}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;