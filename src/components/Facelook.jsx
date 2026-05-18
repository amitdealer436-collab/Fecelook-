import { useState } from "react";
import { Heart, Send } from "lucide-react";

export default function Facelook() {
  const [posts, setPosts] = useState([
    { id: 1, user: "Amit", text: "Hello Facelook! My first post 🚀", likes: 2 },
    { id: 2, user: "User2", text: "This is a simple social media app", likes: 1 }
  ]);

  const [text, setText] = useState("");

  const addPost = () => {
    if (!text.trim()) return;

    const newPost = {
      id: Date.now(),
      user: "You",
      text,
      likes: 0
    };

    setPosts([newPost, ...posts]);
    setText("");
  };

  const likePost = (id) => {
    setPosts(
      posts.map((p) =>
        p.id === id ? { ...p, likes: p.likes + 1 } : p
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Facelook</h1>

      {/* Create Post */}
      <div className="w-full max-w-md bg-white p-4 rounded-2xl shadow mb-4">
        <textarea
          className="w-full border p-2 rounded"
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={addPost}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <Send size={16} /> Post
        </button>
      </div>

      {/* Feed */}
      <div className="w-full max-w-md space-y-3">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-2xl shadow">
            <h3 className="font-bold">{post.user}</h3>
            <p className="my-2">{post.text}</p>
            <button
              onClick={() => likePost(post.id)}
              className="flex items-center gap-2 text-red-500"
            >
              <Heart size={16} /> {post.likes}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
