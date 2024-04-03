import React, { useState } from 'react'
import PostItem from "./PostItem";
import './styles.css';
import { useStore } from 'react-redux';

const Posts = () => {

  const store = useStore();
  const [_postData, _setPostData] = useState(store.getState());

  store.subscribe(() => {

    const data = store.getState();

    _setPostData(data);

  });

  return (
    <>
      <ul className="cardList" >
        <>
          {_postData.posts.map((item: any, i: any) => {
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

          {_postData.posts.length === 0 && (
            <li className="noCards">
              <div>Enter a post to start...</div>
            </li>
          )}
        </>
      </ul>
    </>
  );
}

export default Posts;
