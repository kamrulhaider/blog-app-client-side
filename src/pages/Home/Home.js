import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/SideBar/SideBar";
import "./Home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
<<<<<<< HEAD
      const res = await axios({
            method: 'get',
            url: `https://safe-eyrie-10024.herokuapp.com/api/posts${search}`,
      });
=======
      const res = await axios.get("http://localhost:5000/api/posts" + search);
>>>>>>> 54a9db89db190e42df27761c1de22f6d63c6fb67
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
