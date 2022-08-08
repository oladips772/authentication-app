/** @format */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function BlogDetail() {
  let params = useParams();
    const blogId = params.id;
    
  return <div>BlogDetail</div>;
}

export default BlogDetail;
