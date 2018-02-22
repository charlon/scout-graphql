function World(props) {

    // build the template
    const userList = props.users.map((user) =>
        <li><a href={'/user/${user.username}/'}>{user.username}</a></li>
    );
    return (
        <div>
            <h1>World!</h1>
            <ul>
                {userList}
            </ul>
        </div>
    );
}

// mock the data to be displayed as props
const users = [
    {'username': 'alice'},
    {'username': 'jennifer'},
 ];

ReactDOM.render(
    <World users={users} />,    // gets the props that are passed in the template
    document.getElementById('world')     // a reference to the #react div that we render to
);
