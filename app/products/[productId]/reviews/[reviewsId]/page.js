import React from 'react'
import { notFound } from 'next/navigation'

const ReviewPage = ({params}) => {
  if(parseInt(params.reviewsId) > 1000){
    notFound();
  }
  return (
  <>
    <h1>This is review {params.reviewsId} of product {params.productId}</h1>
  </>   
  )
}

export default ReviewPage