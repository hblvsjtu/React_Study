import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  Switch,
  NavLink,
} from 'react-Router-dom';
import realObjectFactor from '../class/isLikeMe.jsx';

realObjectFactor('div', 'test12');

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = ({ match }) => (
  <div>
    <h2>{match.params.username}</h2>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const User = ({ match }) => (
  <h1>
    Hello {match.params.username ? match.params.username : '无参数'}!
  </h1>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
	exact
	path={match.path}
	render={() => (
      <h3>Please select a topic.</h3>
    )}
    />
  </div>
);

const BasicExample = (props) => {
  const log = (match, location) => console.log(`match.params=${match} location=${location}`);
  const activeStyle = { fontWeight: 'bold', color: 'red' };

  (function componentDidMount(state, prop) {
    if (props.children) {
        React.Children.forEach(props.children, (children) => console.log('children.type'));
      } else {
        console.log('it has no children');
      }
  }());


  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about" activeStyle={activeStyle}>About</NavLink></li>
          <li><Link to="/user">/user</Link></li>
          <li><NavLink to="/user/lvhongbin" activeStyle={activeStyle} isActive={log} >/user/lvhongbin</NavLink></li>
          <li><NavLink to="/user/lvhongchao" activeStyle={activeStyle} isActive={log} >/user/lvhongchao</NavLink></li>
          <li><Link to="/user/123">/user/123</Link></li>
          <li><Link to="/render">内联render</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/user" component={User} />
          <Redirect from="/user/123" to="/about" />
          <Route path="/user/:username([^\d]+)" component={User} />
          <Route path="/render" render={() => <div>内联render</div>} />
          <Route path="/topics" component={Topics} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<BasicExample username="lvhongbin" />, document.getElementById('test12'));
export default BasicExample;
