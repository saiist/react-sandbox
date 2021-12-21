function App({ newwer }) {
  if (newwer) {
    return (
      <div className="App">
        <header className="App-header">新規登録</header>
      </div>
    );
  }
  return (
    <div className="App">
      <header className="App-header2">更新</header>
    </div>
  );
}

export default App;
