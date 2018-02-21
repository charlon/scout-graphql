var World = React.createClass ({
    render: function() {
        return (
            <h1>
            Hello, World!
            </h1>
        )
    }
})

ReactDOM.render(<World />, document.getElementById('world'))
