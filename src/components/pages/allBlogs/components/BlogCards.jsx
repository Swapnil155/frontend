import React, {useState} from 'react'
import BlogCard from '../../../cards/Blog'
import Pagination from '../../../layout/Pagination';
import { Link } from 'react-router-dom';

const data = [
    {
      id: 1,
      type: "Living",
      blogName: "Blog name",
      blogImg: "./images/State-1.jpg",
    },
    {
      id: 2,
      type: "Living",
      blogName: "Blog name",
      blogImg: "./images/State-2.jpg",
    },
    {
      id: 3,
      type: "Travel",
      blogName: "Blog name",
      blogImg: "./images/State-3.jpg",
    },
    {
      id: 4,
      type: "Living",
      blogName: "Blog name",
      blogImg: "./images/State-4.jpg",
    },
    {
      id: 5,
      type: "Travel",
      blogName: "Blog name",
      blogImg: "./images/State-1.jpg",
    },
    {
      id: 6,
      type: "Living",
      blogName: "Blog name",
      blogImg: "./images/State-2.jpg",
    },
    {
      id: 7,
      type: "Travel",
      blogName: "Blog name",
      blogImg: "./images/State-3.jpg",
    },
    {
      id: 8,
      type: "Living",
      blogName: "Blog name",
      blogImg: "./images/State-4.jpg",
    },
  ];
const BlogCards = () => {

    const [showPerPage, setShowPerPage] = useState(6)
    const [pagination, setPagination] = useState({
        start: 0,
        end : showPerPage,
    })
    
    const oncPaginationChange = (start, end) =>{
        setPagination({start:start,end:end})
    }
  return (
    <section className='py-5'>

        <div className="container">
        
            <div className="row">

        {/* card */}
        <BlogCard data={data} pagination={pagination} />
        {/* End Cards */}

        {/* paagintion */}
        <div className="py-5">
          <Pagination
            showPerPage={showPerPage}
            oncPaginationChange={oncPaginationChange}
            totalCard={data.length}
          />
        </div>
        {/* end Pagination */}
            </div>
        </div>
    </section>
  )
}

export default BlogCards