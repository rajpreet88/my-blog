import React from 'react'
import Articles from '../components/Articles'
import article_content from './Article-content'

const ArticleList = () => {
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900">
        Article List
      </h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
        <Articles articles={article_content}/>
        </div>
      </div>
    </>
  )
}

export default ArticleList
