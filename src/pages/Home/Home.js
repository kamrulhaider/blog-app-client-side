import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/SideBar/SideBar";
import "./Home.css";
import axios from "axios";
import { useLocation } from "react-router";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios({
            method: 'get',
            url: `https://safe-eyrie-10024.herokuapp.com/api/posts${search}`,
      });
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
      <Footer />
    </>
  );
}
