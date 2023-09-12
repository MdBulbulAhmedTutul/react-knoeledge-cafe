import './App.css'
import Blogs from './components/blogs/blogs'
import Header from './components/header/header'
import Bookmarks from './components/bookmarks/bookmarks'
import { useState } from 'react'
import Blog from './components/si-blog/Blog'
function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const handleAddToBookMark = blog => {
    console.log('bookmark adding soon');
  }
  return (
    <>
      <Header></Header>
      <div className='max-w-7xl mx-auto px-3 my-16 md:flex '>
        <Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
