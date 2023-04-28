import React from 'react';
const IndexPage=React.lazy(()=>import("../views/index"));

const Index=()=>{

    return(
        <IndexPage/>
    )
}

export default Index;