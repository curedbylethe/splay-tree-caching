'use client';

import AddPost from "@/components/Forms/AddPost";
import Thumbnail from "@/components/Posts/Thumbnail";
import Link from "next/link";
import usePosts from "@/firebase/hooks/usePosts";

const temp = [
    {
        id: '1',
        title: 'post1',
    },
    {
        id: '2',
        title: 'post2',
    },
    {
        id: '3',
        title: 'post3',
    },
    {
        id: '4',
        title: 'post5',
    },
    {
        id: '5',
        title: 'post6',
    },
    {
        id: '6',
        title: 'post7',
    },
    {
        id: '7',
        title: 'post8',
    },
    {
        id: '8',
        title: 'post9',
    },
    {
        id: '9',
        title: 'post10',
    },
    {
        id: '10',
        title: 'post11',
    },
    {
        id: '11',
        title: 'post12',
    },
    {
        id: '12',
        title: 'post13',
    },
    {
        id: '13',
        title: 'post14',
    },
    {
        id: '14',
        title: 'post15',
    },
    {
        id: '15',
        title: 'post13',
    },
    {
        id: '16',
        title: 'post14',
    },
    {
        id: '17',
        title: 'post15',
    }
]

export default function Home() {
    const { posts, loading, error } = usePosts(); // call the hook and get the state variables

    if (loading) {
        return <p>Loading...</p>; // show a loading indicator
    }

    if (error) {
        return <p>Something went wrong: {error.message}</p>; // show an error message
    }

    return (
      <main className="flex flex-row">
          <div className="grid grid-cols-8">
              {temp.map((post) => (
                  <Link href={`posts/${post.id}`} key={post.id} target="_blank">
                      <Thumbnail title={post.title} id={post.id} />
                  </Link>
              ))}
          </div>
          <div>
              {posts.map((post) => (
                  <Link href={`posts/${post.id}`} key={post.id} target="_blank">
                      <Thumbnail title={post.title} id={post.id} />
                  </Link>
              ))}
          </div>
      </main>
  )
}
