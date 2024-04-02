import React from 'react'

const PostItem = (props: Props) => {

    return (
        <>
            <h1>{props.heading}</h1>
            <h2>{props.subHeading}</h2>
            <p>{props.summary}</p>
        </>
    );

};

interface Props {
    heading: string;
    subHeading: string,
    summary: string,
}

export default PostItem;