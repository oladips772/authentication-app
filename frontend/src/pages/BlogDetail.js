/** @format */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BlogDetail() {
  let params = useParams();
    const blogId = params.id;
    
  return <div>BlogDetail</div>;
}

export default BlogDetail;