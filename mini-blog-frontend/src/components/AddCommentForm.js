import React, {useState} from "react";

const AddCommentForm = ({articleName, setArticleInfo}) => {
    const [username, setUsername] = useState("");
    const [commentText, setCommentText] = useState("");

  const addComment = async () => {
 
    const result = await fetch(`/api/articles/${articleName.name}/add-comments`, {
        method: "post",
        body: JSON.stringify({username: username, text:commentText }),
        headers:{
            "Content-type": "application/json"
        }
    })
    const body = result.json();
    setArticleInfo(body);
    setUsername("");
    setCommentText("");

  };
  const commentName = (event)=>{
    setUsername(event.target.value)
  }

  const commentTextbox = (event)=>{
    setCommentText(event.target.value)
  }

  return (
    <form className="shadow rounded px-8 pt-6 pb-8 mb-4">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Add a comment</h3>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Name:
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" value={username} onChange={commentName}
      />
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Comment:
      </label>
      <textarea
        rows={4}
        cols={50}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={commentText} onChange={commentTextbox}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        type="submit"
        onClick={addComment}
      >
        Add Comment
      </button>
    </form>
  );
};

export default AddCommentForm;
