import React from 'react'

const PostItem = ({
    heading = String,
    subHeading = String,
    summary = String,

}) => {

    return (
        <>
            <h1>{heading}</h1>
            <h2>{subHeading}</h2>
            <p>{summary}</p>
        </>
    );

};

// interface Props {
//     heading: string;
//     subHeading: string,
//     summary: string,
// }

export default PostItem;