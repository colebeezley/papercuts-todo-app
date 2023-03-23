import Quote from "./Quote"

function About() {
    return (
        <body>
            <div id="content">
                <div class="card" id="about-card">
                    <div class="card-body">
                        <h5 class="card-title">About</h5>
                        <p class="card-text">Hi there!</p>
                        <p>
                            Thank you for visiting my site. It's a work in progress, but there's a few things I'd like to learn by developing this.
                            I'm still working on adding some features (most, really), so bear with me!
                        </p>
                        <a href="https://github.com/onodeloc/paper-cuts" class="btn btn-primary" rel="noreferrer" target={"_blank"}>Source code</a>
                    </div>
                </div>


                <div class="card" id="about-card">
                    <div class="card-body">
                        <h5 class="card-title">Contact</h5>
                        <p class="card-text">
                            <a href="https://github.com/onodeloc/" class="btn btn-success btn-contact" rel="noreferrer" target={"_blank"}>github.com/onodeloc</a>
                            <br/>
                            <a href="mailto:colebeezley@gmail.com" class="btn btn-success btn-contact" rel="noreferrer" target={"_blank"}>colebeezley@gmail.com</a>
                            <br/>
                            <a href="https://colebeezley.com" class="btn btn-success btn-contact" rel="noreferrer" target={"_blank"}>colebeezley.com</a>
                        </p>
                    </div>
                </div>
            </div>

            <Quote />
        </body >
    );
}

export default About;