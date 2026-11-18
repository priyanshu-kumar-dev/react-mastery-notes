function Home() {
  throw new Error("Testing Error Boundary");

  return <h1>Home Page</h1>;
}

export default Home;