import React from 'react'
import data from '../../data.json'

const PostList = () => {
  return (
    <div>
        {data.map((item)=>(
                <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                        <p>{item.date}</p>
                        <h3>{item.slug}</h3>


                </div>
        ))}
    </div>
  )
}

export default PostList