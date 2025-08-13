
import { useNavigate } from "react-router-dom";


function Posts() {
  const navigate = useNavigate()

  

  return (
    <div className="p-6 max-w-6xl mx-auto mt-44 cursor-pointer" onClick={() => navigate("/posts")} >
      <h1 className="text-2xl font-bold mb-4 text-center"></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

      </div>
    </div>
  );
}

export default Posts;
