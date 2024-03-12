import React from 'react'
import { Helmet } from "react-helmet-async";

const Title = ({title="Chat",description="this is my chat app complete karunga ise kuch bhi ho jaye"}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
    </Helmet>
  )
}

export default Title