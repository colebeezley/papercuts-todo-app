function List() {
    return (
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
                            <input type="text" id="papercut-message" class="form-control" placeholder="What's on your mind?" autocomplete="off" />
                            <button type="button" class="btn btn-outline-success" id="submit-button">Submit</button>
                        </div>
                    </div>
                </section>
            </div>
        </body>
    )
}

export default List