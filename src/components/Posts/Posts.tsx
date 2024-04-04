import React, { useState } from 'react'
import PostItem from "./PostItem";
import './styles.css';
import { useStore } from 'react-redux';

const Posts = () => {

  const _store = useStore();
  const [_postData, _setPostData] = useState(_store.getState().posts);

  _store.subscribe(() => {

    const _posts = _store.getState().posts;

    _setPostData(_posts);

  });

  return (
    <ul className="cardList" >
      <>
        {_postData && _postData.map((item: any, i: any) => {
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
        
        {_postData.length === 0 && (
          <li className="noCards">
            <div>Enter a post to start...</div>
          </li>
        )}
      </>
    </ul>
  );
}

export default Posts;
