function Quote() {
    return (
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
            <div id="footer-contacts" class="bg-dark">
                <a class="link-primary" href="http://colebeezley.com" target="_blank" rel="noreferrer">colebeezley.com</a>
                <p id="copyright">
                    © 2023 Cole Beezley
                </p>
            </div>
        </footer>
    )
}

export default Quote