import Quote from "./Quote"

function About() {
    return (
        <body>
            <div id="content">
                <div className="card" id="about-card">
                    <div className="card-body">
                        <h5 className="card-title">About</h5>
                        <p className="card-text">Hi there!</p>
                        <p>
                            Thank you for visiting my site. It's a work in progress, but there's a few things I'd like to learn by developing this.
                            I'm still working on adding some features (most, really), so bear with me!
                        </p>
                        <a href="https://github.com/onodeloc/paper-cuts" className="btn btn-primary" rel="noreferrer" target={"_blank"}>Source code</a>
                    </div>
                </div>


                <div className="card" id="about-card">
                    <div className="card-body">
                        <h5 className="card-title">Contact</h5>
                        <p className="card-text">
                            <a href="https://github.com/onodeloc/" className="btn btn-success btn-contact" rel="noreferrer" target={"_blank"}>github.com/onodeloc</a>
                            <br/>
                            <a href="mailto:colebeezley@gmail.com" className="btn btn-success btn-contact" rel="noreferrer" target={"_blank"}>colebeezley@gmail.com</a>
                            <br/>
                            <a href="https://colebeezley.com" className="btn btn-success btn-contact" rel="noreferrer" target={"_blank"}>colebeezley.com</a>
                        </p>
                    </div>
                </div>
            </div>

            <Quote />
        </body >
    );
}

export default About;