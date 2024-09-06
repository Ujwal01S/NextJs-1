import React from 'react'

const Docs = ({params}) => {
    if(params.slug?.length === 1) {
        return(
            <>
            <h1>Viewing docs for 1st param {params.slug[0]}</h1>
            </>
        );
    }
    if(params.slug?.length === 2) {
        return(
            <>
            <h1>Viewing docs for 1st param {params.slug[0]} and 2nd concent param {params.slug[1]}</h1>
            </>
        );
    }
  return (
    <>
        <h1>This path takes all the params after docs/</h1>
    </>
  );
}

export default Docs