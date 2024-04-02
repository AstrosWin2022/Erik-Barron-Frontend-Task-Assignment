import React, { useState } from 'react'
import PostItem from "./PostItem";
import './styles.css'
import { useStore } from 'react-redux';

const Post = () => {

  const store = useStore();
  const [postData, setPostData] = useState(store.getState());

  // const initialState = [
  //   { heading: 'Heading 1', subHeading: 'Subheading 1', summary: 'Summary 1 will go right here' },
  //   { heading: 'Heading 2', subHeading: 'Subheading 2', summary: 'Summary 2 will go right here' },
  //   { heading: 'Heading 3', subHeading: 'Subheading 3', summary: 'Summary 3 will go right here' },
  // ]

  store.subscribe(() => {
    console.log('current state', store.getState());
    setPostData(store.getState());
  });

  return (
    <>
      <ul className="cards" >

        {postData.posts.map((item: any, i: any) => {
          return (
            <li key={i} className="card">
              <PostItem

                heading={item.heading}
                subHeading={item.subHeading}
                summary={item.summary}
              />
            </li>

          )
        })}

      </ul>
    </>
  );
}

export default Post;
