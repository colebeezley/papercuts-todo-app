/* eslint-disable jsx-a11y/anchor-is-valid */

function App() {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark navbar-expand-md">
        <a href="#" class="navbar-brand">paper/cuts</a>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbar">
          <ul class="navbar-nav">
            <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link">About</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>
      <body>
        <div id="content">
        <section class="papercuts-list">
          <div class="card">
            <div class="card-header">
              <h4>Your papercuts</h4>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
          </div>
        </section>
        <section class="papercuts-submission">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Track a papercut</h5>
              <input type="text" id="papercut-message" class="form-control" placeholder="What's on your mind?" />
              <button type="button" class="btn btn-outline-success" id="submit-button">Submit</button>
            </div>
          </div>
        </section>
        </div>
        <footer>
          <div id="quote-of-the-day">
            <div class="card">
              <div class="card-header">
                Quote of the day
              </div>
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <p>“Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.”</p>
                  <footer class="blockquote-footer">Albert Einstein<cite title="Source Title"></cite></footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div id="footer-contacts">
            <a class="link-primary" href="http://colebeezley.com" target="_blank" rel="noreferrer">colebeezley.com</a>
            <p id="copyright">
              © 2023 Cole Beezley
            </p>
          </div>
        </footer>
      </body>
    </>
  );
}

export default App;
