import { useLoaderData } from 'react-router-dom';

const Blog = () => {
  const { database } = useLoaderData();

  console.log(database)
  return (
    <>

    </>
  );
};

export default Blog;
