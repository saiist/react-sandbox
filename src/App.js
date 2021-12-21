function App({ newwer }) {
  if (newwer) {
    return (
      <div className="App">
        <header className="App-header">Newwer</header>
      </div>
    );
  }
  return (
    <div className="App">
      <header className="App-header2">Update</header>
    </div>
  );
}

export default App;
