import React, { useState } from 'react';

const App = () => {
    // destructure array to get value and setter. 
    const [resourceTypeText, setResourceTypeText] = useState('posts');

    return (
        <div>
            <div>
                <button onClick={() => setResourceTypeText('posts')}>Posts</button>
                <button onClick={() => setResourceTypeText('todos')}>Todos</button>
            </div>
            {resourceTypeText}
        </div>
    );
}

export default App