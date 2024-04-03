import React, { useState } from 'react';
import { useStore } from 'react-redux';
import './styles.css';


const Form = () => {

  const store = useStore();

  const [_heading, _setHeading] = useState("");
  const [_subHeading, _setSubHeading] = useState("");
  const [_summary, _setSummary] = useState("");

  const submitForm = () => {

    if (_heading.length === 0 || _subHeading.length === 0 || _summary.length === 0) {

      alert("Please complete the form. *All fields are required...");
      return;

    };

    store.dispatch({
      type: 'ADD_POST',
      payload: { heading: _heading, subHeading: _subHeading, summary: _summary }
    });

  };

  const resetPosts = () => {    

    _setHeading("");
    _setSubHeading("");
    _setSummary("");

    if (store.getState().posts.length === 0) return;

    store.dispatch({
      type: 'RESET_POSTS'
    });
  };

  return (
    <>
      <form id="msform">
        <fieldset>
          <h1>Create Post</h1>
          <h3>Fill the all mention detail to submit the form NOW!</h3>
          <input
            className="textField"
            type="text"
            name="heading"
            value={_heading}
            onChange={(e) => {
              _setHeading(e.target.value);
            }}
            placeholder="Heading"
          />
          <input
            className="textField"
            type="text" name="pass"
            value={_subHeading}
            onChange={(e) => {
              _setSubHeading(e.target.value);
            }}
            placeholder="Sub-Heading"
          />
          <textarea
            className="textField"
            rows={5}
            value={_summary}
            onChange={(e) => {
              _setSummary(e.target.value);
            }}
            placeholder="Summary"
          />
          <div className="center">
            <input
              className="btn btn-white"
              style={{ marginRight: ".75rem" }}
              type="button"
              name="Clear"
              value="Reset Posts"
              onClick={(e) => {
                resetPosts();
              }}
            />
            <input
              className="btn btn-green"
              type="button"
              name="Submit"
              value="Submit"
              onClick={(e) => {
                submitForm();
              }}
            />
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default Form;