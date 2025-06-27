import axios from "axios";

interface Post{
    userId: number,
    id: number,
    title: string,
    body: string,
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

const logThreePosts = async (): Promise<void> => {
    for (const post of (await fetchPosts()).slice(0, 3)){
        console.log(post.title, post.body);
    }

}
