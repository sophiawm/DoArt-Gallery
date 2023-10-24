import { useLoaderData } from 'react-router-dom';

const Blog = () => {
  const { database } = useLoaderData();


  return (
    <>
    {database.map((a)=>{
        return <li key={a.title}>{a.title}</li>
    })}
    </>
  );
};

export default Blog;
