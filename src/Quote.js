function Quote() {

    var quotes = [
        'Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.',
        'Success is not final, failure is not fatal: It is the courage to continue that counts.',
        'The only Limit to our realization of tomorrow will be our doubts of today.'
    ];

    var authors = [
        'Albert Einstein',
        'Winston Churchill',
        'Franklin D. Roosevelt',
    ];

    let selectedQuote = Math.floor(Math.random() * (3));
    let quote = quotes[selectedQuote];
    let author = authors[selectedQuote] 

    return (
        <footer>
            <div id="quote-of-the-day">
                <div className="card">
                    <div className="card-header">
                        Quote of the day
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>{quote}</p>
                            <footer className="blockquote-footer">{author}<cite title="Source Title"></cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
            <div id="footer-contacts" className="bg-dark">
                <a className="link-primary" href="http://colebeezley.com" target="_blank" rel="noreferrer">colebeezley.com</a>
                <p id="copyright">
                    © 2023 Cole Beezley
                </p>
            </div>
        </footer>
    )
}

export default Quote