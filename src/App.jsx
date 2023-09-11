import './App.css'
import Blogs from './components/blogs/blogs'
import Header from './components/header/header'
import Bookmarks from './components/bookmarks/bookmarks'
function App() {

  return (
    <>
      <Header></Header>
      <div className='max-w-7xl mx-auto px-3 my-16 md:flex md: items-center'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
