
function Header({ count }) {
  return (

    <header className="header">
      <div>
        <p className="small-title">Movie night</p>
        <h1>chose your movie</h1>
        <p className="subtitle">select a movie to watch</p>
      </div>
      <div className="cinema-info">
        <span>watchlist</span>
        <strong>{count}  movies</strong>
      </div>
    </header>
  )
}

export default Header