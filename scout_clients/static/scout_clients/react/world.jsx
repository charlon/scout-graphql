// mock the data to be displayed as props
const data = {
    'users': [
        {'username': 'alice'},
        {'username': 'jennifer'},
    ]
 }

// build the template
const World = ({users}) =>
    <div>
        <h1>World!</h1>
        <ul>
        {users.map(user =>
            <li><a href={'/user/${user.username}/'}>
                {user.username}
            </a></li>)}
        </ul>
    </div>


ReactDOM.render(
    React.createElement(World, data),    // gets the props that are passed in the template
    document.getElementById('world')     // a reference to the #react div that we render to
)
