import React, { Suspense } from 'react'

export default function withSuspense(Component, fallback = <div>Loading...</div>) {
  const WrappedComponent = (props) => {
    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    )
  }
  return WrappedComponent
}
