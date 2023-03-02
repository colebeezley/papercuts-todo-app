import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Quote from "./Quote"

const initial_list = [
    {
        id: 'a',
        name: 'An item',
    },
    {
        id: 'b',
        name: 'A second item',
    },
];

function List() {
    const [list, setList] = React.useState(initial_list);
    const [name, setName] = React.useState('');

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleAdd() {
        const newList = list.concat({ name, id: uuidv4() });
        setList(newList);
        setName('');
    }

    function handleRemove() {
        
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleAdd()
      }
    };

    return (
        <body>
            <div id="content">
                <section class="papercuts-list">
                    <div class="card">
                        <div class="card-header">
                            <h4>Your papercuts</h4>
                        </div>
                        <ul class="list-group list-group-flush">
                            {list.map((item) => (
                                <li class="list-group-item" key={item.id}>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section class="papercuts-submission">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Track a papercut</h5>
                            <input type="text" id="papercut-message" class="form-control" placeholder="What's on your mind?" autocomplete="off" value={name} onChange={handleChange} onKeyDown={handleKeyDown}/>
                            <button type="button" class="btn btn-outline-success" id="submit-button" onClick={handleAdd}>Submit</button>
                        </div>
                    </div>
                </section>
            </div>
            <Quote/>
        </body>
    )
}

export default List