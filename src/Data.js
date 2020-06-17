import React from 'react'
import {fetchProfileData} from './fakeApi'
const resource = fetchProfileData();
export default function Data(props){
    const user = resource.user.read();
    const posts = resource.posts.read();
    return (<>
    <div style={{marginLeft:'10px'}}>
      <h1>{user.name}</h1>
    </div>
    <div style={{marginLeft:'10px'}}>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.text}</li>
        ))}
      </ul>
    </div>
    </>);
}