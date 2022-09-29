import React from "react";
import { Link } from "react-router-dom";

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((_article, index) => (
        <div className="p-4 md:w-1/2">
          <div
            key={index}
            className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
          >
            <Link to={`/article/${_article.name}`}>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={_article.thumbnail}
                alt="navratri"
              />
            </Link>
            <div className="p-6">
              <Link to={`/article/${_article.name}`}>
                <h3 className="title-font text-lg font-medium text-gary-900 mb-3">
                  {_article.title}({_article.name})
                </h3>
              </Link>
              <p className="leading-relaxed mb-3">
                {_article.content[0].substring(0, 100)}...
              </p>
              <div className="flex items-center flex-wrap ">
                <Link
                  className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  to={`/article/${_article.name}`}
                >
                  Learn More
                </Link>
                <div className="justify-end flex-1 text-right">
                  {_article.date}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Articles;
