const ConditionalRendering = () => {
  const isLogin = true;

  return (
    <>
      {isLogin && <h1>welcome</h1>}
      {isLogin ? <h1>true</h1> : <h1>false</h1>}
    </>
  );
};

export default ConditionalRendering;
