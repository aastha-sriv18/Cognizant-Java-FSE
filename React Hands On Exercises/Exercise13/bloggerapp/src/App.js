import "./App.css";

import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

import { books, blogs, courses } from "./data";

function App() {

  // Change these flags to demonstrate different
  // conditional rendering techniques

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  // Element Variable Method
  let bookComponent = null;

  if (showBooks) {
    bookComponent = <BookDetails books={books} />;
  }

  return (

    <div className="container">

      <div className="box">

        {bookComponent}

      </div>

      <div className="box">

        {/* Ternary Operator */}

        {showBlogs ? <BlogDetails blogs={blogs} /> : <h2>No Blogs</h2>}

      </div>

      <div className="box">

        {/* Logical AND */}

        {showCourses && <CourseDetails courses={courses} />}

      </div>

    </div>

  );

}

export default App;