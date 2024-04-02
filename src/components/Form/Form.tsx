import React, { useState } from 'react';
import { useStore } from 'react-redux';
import './styles.css';


const Form = () => {

  const store = useStore();

  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [summary, setSummary] = useState("");

  const submitForm = () => {

    if (heading.length === 0 || subHeading.length === 0 || summary.length === 0) {

      alert("Please complete the form. *All fields are required...");
      return;

    };

    store.dispatch({
      type: 'ADD_POST',
      payload: { heading: heading, subHeading: subHeading, summary: summary }
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
            value={heading}
            onChange={(e) => {
              setHeading(e.target.value);
            }}
            placeholder="Heading"
          />
          <input
            className="textField"
            type="text" name="pass"
            value={subHeading}
            onChange={(e) => {
              setSubHeading(e.target.value);
            }}
            placeholder="Sub-Heading"
          />
          <textarea
            className="textField"
            rows={5}
            value={summary}
            onChange={(e) => {
              setSummary(e.target.value);
            }}
            placeholder="Summary"
          />
          <div className="center">
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