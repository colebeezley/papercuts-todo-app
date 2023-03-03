/* eslint-disable jsx-a11y/anchor-is-valid */

function Nav() {
    return (
        <nav class="navbar navbar-dark bg-dark navbar-expand-md">
            <a href="#" class="navbar-brand">paper/cuts</a>
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="navbar">
                <ul class="navbar-nav">
                    <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
                    <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav