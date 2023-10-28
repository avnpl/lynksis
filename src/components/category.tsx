const Category = () => {
  return <h1>This is a Category </h1>
}

export const Cats = () => {
  return (
    <>
      {' '}
      {[1, 1, 1, 1, 1].map(() => (
        <Category />
      ))}
    </>
  )
}
