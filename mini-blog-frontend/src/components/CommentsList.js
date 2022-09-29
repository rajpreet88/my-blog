import React from 'react'

const CommentsList = ({comments}) => {
  return (
    <div>
      <h3 className="sm:text-xl text-xl font-bold mt-6 mb-4 text-gray-900">
        <u>Comments</u>
      </h3>
      {comments.map((_comments, index)=>(
        <div className="mb-4" key={index}>
            <h4 className='text-gray-400 font-bold'>{_comments.username}</h4>
            <p className='text-gray-600'>{_comments.text}</p>
        </div>
      ))}
    </div>
  )
}

export default CommentsList
