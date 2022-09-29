import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import article_content from "./Article-content";
import Articles from "../components/Articles";
import "whatwg-fetch"; //used for api calls;
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";

const Article = () => {
  const articleName = useParams();
  const article = article_content.find(
    (_article) => _article.name === articleName.name
  );

  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
    //fetch data from the backend
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${articleName.name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };

    fetchData();
  }, [articleName.name]);

  if (!article) return <h1>Article does not exist</h1>;
  const otherArticles = article_content.filter(
    (_article) => _article.name !== articleName.name
  );

  return (
    <div className="mb-20">
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900">
        {article.title}({article.name})
      </h1>
      <br />
      <img src={article.thumbnail} alt="navratri" width={800} height={400} />
      <br />
      {article.content.map((paragraph, index) => (
        <p key={index} className="mx-auto leading-relaxed text-base mb-4">
          <i>{paragraph}</i>
        </p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <br/>
      <br/>
      <AddCommentForm  articleName={articleName} setArticleInfo={setArticleInfo}/>
      <br />
      <h1 className="sm:text-2x text-xl font-bold mt-4 mb-4 text-gray-900">
        Other Articles:
      </h1>
      <div className="flex flex-wrap -m-4">
        <Articles articles={otherArticles} />
      </div>
    </div>
  );
};

export default Article;
