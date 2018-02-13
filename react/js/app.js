import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import List from './list';
import Detail from './detail';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/react/list/" component={List} />
                    <Route path="/react/detail/" component={Detail} />
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'));
