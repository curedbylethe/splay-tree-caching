import { useState, useEffect } from 'react';
import {collection, getDocs} from 'firebase/firestore';
import { db } from '@/firebase/config';
import { Post } from '@/types/post';

// define the type for the hook's return value
type UsePostsResult = {
    posts: Post[]; // an array of posts
    loading: boolean; // a boolean indicating if the data is loading
    error: any; // an error object if there is any
};

// define the hook function
const usePosts = (): UsePostsResult => {
    // initialize the state variables
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    // define a function to fetch the posts from firestore
    const fetchPosts = async () => {
        try {
            // get the reference to the posts collection
            const postsRef = collection(db, 'posts');
            // get the documents from the collection
            const querySnapshot = await getDocs(postsRef);
            // map each document to a post object
            const postsData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as Post[];
            // update the state with the fetched posts
            setPosts(postsData);
            // set loading to false
            setLoading(false);
        } catch (err) {
            // handle any errors
            console.error(err);
            setError(err);
            setLoading(false);
        }
    };

    // use useEffect to call fetchPosts once when the component mounts
    useEffect(() => {
        fetchPosts();
    }, []);

    // return the state variables from the hook
    return { posts, loading, error };
};

export default usePosts;
