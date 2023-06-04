/* eslint-disable jsx-a11y/anchor-is-valid */

function Nav() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-md">
            <a href="" className="navbar-brand">paper/cuts</a>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="about" className="nav-link">About</a></li>
                    {/* <li class="nav-item"><a href="contact" class="nav-link">Contact</a></li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Nav