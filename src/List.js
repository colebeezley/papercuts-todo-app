import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Quote from "./Quote"

let initial_list = JSON.parse(localStorage.getItem('ourList'))
if (initial_list == null){
    initial_list = [
            {
                id: 'a',
                name: 'An item',
            },
            {
                id: 'b',
                name: 'A second item',
            },
            // object format
        ];
}

function List() {
    const [list, setList] = React.useState(initial_list);
    const [name, setName] = React.useState('');
    // initialize hooks for list and names
    // we'll update the list each time we add a name

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleAdd() {
        const newList = list.concat({ name, id: uuidv4() });
        setList(newList);
        setName('');
        // set list to new list, update name
        localStorage.setItem('ourList', JSON.stringify(newList))
    }

    function handleRemove(id) {
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
        localStorage.setItem('ourList', JSON.stringify(newList))
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleAdd()
        }
    };

    return (
        <div>
            <div id="content">
                <section className="papercuts-list">
                    <div className="card">
                        <div className="card-header">
                            <h4>Your papercuts</h4>
                        </div>
                        <ul className="list-group list-group-flush">
                            {list.map((item) => (
                                <li className="list-group-item" key={item.id}><p className="papercut-item">{item.name}</p>
                                    <button type="button" className="btn btn-outline-danger button-remove" onClick={() => handleRemove(item.id)}>
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section className="papercuts-submission">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Track a papercut</h5>
                            <input type="text" id="papercut-message" className="form-control" placeholder="What's on your mind?" autoComplete="off" value={name} onChange={handleChange} onKeyDown={handleKeyDown} />
                            <button type="button" className="btn btn-outline-success" id="submit-button" onClick={handleAdd}>Submit</button>
                        </div>
                    </div>
                </section>
            </div >
            <Quote />
        </div>
    )
}

export default List