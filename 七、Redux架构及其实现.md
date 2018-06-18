# React_Study

## 七、Redux

### 作者：冰红茶  
### 参考书籍：《React全栈》 张轩 杨寒星  &&   《深入React技术栈》 陈屹 
### 参考源：[Redux 官网](https://redux.js.org/) 
### [源码地址](https://redux.js.org/) 

------    



  之前一直在学React，发现不同组件间的数据传递确实是一个比较麻烦的事情。之前学过Flux，觉得Flux的模式已经是很好的啦，主要思想是建立一个store作为一个中间数据仓库。然后所有的组件的数据存取行为都通过这个数据仓库，减少了不必的行为。但是人总是追求完美和省事，觉得Fluxx的Dispatch都是多余的，想要更高效的框架。于是Redux就诞生了^_ ^
     
## 目录
    
## [七、Redux架构及其实现]()
## [7.1 简介](#7.1)
### [7.1.1 背景和特点](#7.1.1)
### [7.1.2 几个重要的概念](#7.1.2)
## [7.2 需要解决的三个问题](#7.2)
### [7.2.1 如何触发reducer](#7.2.1)
### [7.2.2 如何获取state和设置state并更新页面](#7.2.2)
### [7.2.3 有时侯不能更新页面的原因](#7.2.3)
## [7.3 中间件Middleware](#7.3)
### [7.3.1 简介](#7.3.1)
### [7.3.2 用途](#7.3.2)
## [7.4 在React中如何发挥作用](#7.4)
### [7.4.1 安装插件](#7.4.1)
### [7.4.2 展示型和容器型组件的异同比较](#7.4.2)
### [7.4.3 相关API](#7.4.3)
### [7.4.4 实例](#7.4.4)

        
------
        
<h2 id='7'>七、Redux</h2>
<h3 id='7.1'>7.1 简介</h3>  
        
<h4 id='7.1.1'>7.1.1 背景和特点</h4>  
        
#### 1) 什么是Redux
> - Redux is a predictable state container for JavaScript apps
> - It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.
        
<h4 id='7.1.2'>7.1.2 几个重要的概念</h4>  
          
#### 1) Actions和Action Creators
> - 把状态数据从CV传到store
> - 对于store来讲，action是它的唯一数据信息的来源
> - action是一个纯JS对象，type属性是一个字符串类型，表示action的ID
        
        const ADD_TODO = 'ADD_TODO';

        {
          type: ADD_TODO,
          text: 'Build my first Redux app'
        }
> - 如果当你的项目比较庞大的时候，可以使用一个常量模块来存储字符串常量
        
        import { ADD_TODO, REMOVE_TODO } from '../actionTypes'
> - Action Creators是用来制造action的工厂，即用函数返回action对象
        
        const addList = data => {
            type: ADD_TODO,
            data
        }

        // 传统的Flux
        const addListWithDispatch = data => dispatch(addList(data));
        addListWithDispatch(data);

        // Redux
        const boundAddTodo = text => dispatch(addList(data));
        boundAddTodo(text);
#### 2) Reducers
> - Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.
> - 说白了，就是定义数据更新的方式或者动作
> - The reducer is a pure function that takes the previous state and an action, and returns the next state.
        
        (previousState, action) => newState；
> - Reducers必须是一个纯函数并且没有副作用 Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.
>> - Mutate its arguments;
>> - Perform side effects like API calls and routing transitions;
>> - Call non-pure functions, e.g. Date.now() or Math.random()
> - 对于初始state来讲，由于他没有上一个状态，所以直接返回初始状态即可
        
        function todoApp(state = initialState, action) {
          // For now, don't handle any actions
          // and just return the state given to us.
          return state
        }
> - 对于一般的state，使用Object.assign()返回一个新的state，我们不要在原来的state上做修改。这是为什么呢？原因是假如我们并没有对原来的state做任何的修改，我们还可以在default上返回原来的state。
        
        import {
          ADD_TODO,
          TOGGLE_TODO,
          SET_VISIBILITY_FILTER,
          VisibilityFilters
        } from './actions'

        ...

        function todoApp(state = initialState, action) {
          switch (action.type) {
            case SET_VISIBILITY_FILTER:
              return Object.assign({}, state, {
                visibilityFilter: action.filter
              })
            case ADD_TODO:
              return Object.assign({}, state, {
                todos: [
                  ...state.todos,
                  {
                    text: action.text,
                    completed: false
                  }
                ]
              })
            default:
              return state
          }
        }
> - 相关的API
>> - combineReducers() 合并reducer
        
        import { combineReducers } from 'redux'
        import todos from './todos'
        import counter from './counter'

        export default combineReducers({
          todos,
          counter
        })
#### 3) store
> - 职责
>> - 维持状态Holds application state;
>> - 允许读取Allows access to state via getState();
>> - 允许被action和reducer更新状态Allows state to be updated via dispatch(action);
>> - 注册监听器Registers listeners via subscribe(listener);
>> - 利用注册监听器的返回值注销监听器Handles unregistering of listeners via the function returned by subscribe(listener).
        
        import { createStore } from 'redux'
        import todoApp from './reducers'
        import {
          addTodo,
          toggleTodo,
          setVisibilityFilter,
          VisibilityFilters
        } from './actions'

        // 通过reduce创建store
        const store = createStore(todoApp)

        // Log the initial state
        console.log(store.getState())

        // Every time the state changes, log it
        // Note that subscribe() returns a function for unregistering the listener
        const unsubscribe = store.subscribe(() =>
          console.log(store.getState())
        )

        // Dispatch some actions
        store.dispatch(addTodo('Learn about actions'))
        store.dispatch(addTodo('Learn about reducers'))
        store.dispatch(addTodo('Learn about store'))
        store.dispatch(toggleTodo(0))
        store.dispatch(toggleTodo(1))
        store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

        // Stop listening to state updates
        unsubscribe()
> - 相关API
>> - createStore(reducer, preloadedState, enhancer) enchener是一个函数对象
>> - getState()​ Returns the current state tree of your application.
>> - ​dispatch(action)​ 先通过getState获取状态，然后执行reducer函数，返回一个新的状态值，并通知监听器
        
        import { createStore } from 'redux'
        const store = createStore(todos, ['Use Redux'])

        function addTodo(text) {
          return {
            type: 'ADD_TODO',
            text
          }
        }

        store.dispatch(addTodo('Read the docs'))
        store.dispatch(addTodo('Read about the middleware'))
>> - ​subscribe(listener)​ 添加一个监听器
>> - replaceReducer(nextReducer)​ 替换一个新的Reducer
        
<h3 id='7.2'>7.2 需要解决的三个问题</h3>  
          
<h4 id='7.2'>7.2.1 如何触发reducer</h4> 
        
#### 1) 先使用redux的createStore(reducer)方法建立store数据储存中心
#### 2) 然后使用store数据储存中心的dispatch方法便可触发reducer
    
    

<h4 id='7.2.2'>7.2.2 如何获取state和设置state并更新页面</h4> 
        
#### 1) 第一种方法
> - 使用store数据储存中心的subscribe()订阅，然后采用执行订阅的返回值函数取消订阅，但是这种方法的好处是可以自动获得更新的state，但是需要手动设置setState，而且每个组件都需要初始化和管理自己的state，非常的不方便，而且也不符合redux的理念
#### 2) 第二种方法 
> - 采用高阶函数connect(mapStateToProps, mapDispatchToProps)(component) 
>> - mapStateToProps(state) 是用来自动获取状态并更新页面
>> - mapDispatchToProps(dispatch) 是用来自动更新状态
>> - < Provider store={store}>< App /></ Provider> 是用来建立每个组件和数据中心的连接
      
      // 局部组件：List.jsx
      import { connect } from 'react-redux';
      function mapStateToProps(state) {
        return {
          list: state.list,
        };
      }

      function mapDispatchToProps(dispatch) {
        return {
          createlist(str) {
            dispatch(createlist(str));
          },
          deletelist(index) {
            dispatch(deletelist(index));
          },
        };
      }

      export default connect(mapStateToProps, mapDispatchToProps)(List);

      // index.jsx
      import { Provider } from 'react-redux';
      import { store } from './store/store.js';
      import App from './container/App.jsx';

      ReactDom.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.body
      );

        
<h4 id='7.2.2'>7.2.2 <a href="https://segmentfault.com/q/1010000013906782/a-1020000013908895">有时侯不能更新页面的原因</a></h4> 
      
> -  用 Object.assign(state, ...)或者array.push()是直接修改了state 对象，然后返回的还是原来的 state 对象（被修改过的）的引用，而 redux 会通过引用来判断前后两次 state 有没有变化。return 原来的 state 的话 redux 会认为你的 state 没有变化。
> - 所以遇到这种这种情况最好使用... 拓展运算符               
        
<h3 id='7.3'>7.3 中间件Middleware</h3>  
        
<h4 id='7.3.1'>7.3.1 什么是Middleware</h4>
      
#### 1) 在发送请求和接收请求之间起作用
> - In these frameworks, middleware is some code you can put between the framework receiving a request, and the framework generating a response.
> - 提供了从action分发到到达reducer的过程的第三方插件
> - It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
> - 人们一般用来打印日志，崩溃报告和执行一些异步API
> - People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.
        
<h4 id='7.3.2'>7.3.2 用途</h4>
      
#### 1) 打印日志logging
> - 第一种方法：手动打印
        
        const action = addTodo('Use Redux')
        ​
        console.log('dispatching', action)
        store.dispatch(action)
        console.log('next state', store.getState())
> - 第二种方法：外包裹一个函数
        
        function dispatchAndLog(store, action) {
          console.log('dispatching', action)
          store.dispatch(action)
          console.log('next state', store.getState())
        }
        dispatchAndLog(store, addTodo('Use Redux'))
> - 第三种方案：使用applyMiddleware(Store.dispatch, Store.getState)
> - ({ getState, dispatch }) => next => action
> - 例子
        
        import {
          createStore,
          applyMiddleware,
        } from 'redux';
        // import thunkMiddleware from 'redux-thunk';
        import { createLogger } from 'redux-logger';
        import reducer from '../reducer/reducer.js';

        const loggerMiddleware = createLogger();

        export const store = createStore(
          reducer,
          applyMiddleware(
            // thunkMiddleware,
            loggerMiddleware
          )
        );

<h3 id='7.4'>7.4 在React中如何发挥作用</h3>  
          
<h4 id='7.4'>7.4.1 安装插件</h4> 

#### 1) react-redux
> - 提供import { Provider } from 'react-redux';
> - 提供import { connect } from 'react-redux';
        
        npm install --save react-redux 
#### 2) redux
> - 提供createStore， applyMiddleware和applyMiddleware
    
    import {
      createStore,
      applyMiddleware,
    } from 'redux';
#### 3) redux-thunk
> - 提供import thunkMiddleware from 'redux-thunk';
#### 4) redux-logger
> - 提供import { createLogger } from 'redux-logger';
         
<h4 id='7.4'>7.4.1 展示型和容器型组件的异同比较</h4> 
        
** ** | **Presentational Components** | **Container Components** 
 -|-|-
**PurposeHow** | things look (markup, styles) | How things work (data fetching, state updates) 
**Aware of Redux** | No  | Yes
**To read data** | Read data from props | Subscribe to Redux state
**To change data** | Invoke callbacks from props | Dispatch Redux actions
**Are written** | By hand | Usually generated by React Redux
        
         
<h4 id='7.4.3'>7.4.3 相关API </h4> 
      
#### 1) < Provider store> 
> - 只有在< Provide>中你才能使用store属性和connect()
        
        ReactDOM.render(
          <Provider store={store}>
            <MyRootComponent />
          </Provider>,
          rootEl
        )
#### 2) connect(\[mapStateToProps\], \[mapDispatchToProps\], \[mergeProps\], \[options\]) 
> - 高阶组件  higher-order components
> - 作用：连接组件和store Connects a React component to a Redux store
> - 返回值：一个匹配好的高阶组件 A higher-order React component class that passes state and action creators into your component derived from the supplied arguments.  
        
        const mapStateToProps = (state, ownProps) => {
          console.log(state); // state
          console.log(ownProps); // ownProps
        }

        // Inject just dispatch and don't listen to store
        export default connect()(TodoApp)

        // 又一个例子
        import { addTodo } from './actionCreators'
        import { bindActionCreators } from 'redux'

        function mapStateToProps(state) {
          return { todos: state.todos }
        }

        function mapDispatchToProps(dispatch) {
          return bindActionCreators({ addTodo }, dispatch)
        }

        export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
#### 3) applyMiddleware(Store.dispatch, Store.getState)
> - 满足链式调度({ getState, dispatch }) => next => action
        
        import { createStore, applyMiddleware } from 'redux'
        import todos from './reducers'
        ​
        function logger({ getState }) {
          return next => action => {
            console.log('will dispatch', action)
        ​
            // Call the next dispatch method in the middleware chain.
            const returnValue = next(action)
        ​
            console.log('state after dispatch', getState())
        ​
            // This will likely be the action itself, unless
            // a middleware further in chain changed it.
            return returnValue
          }
        }
        ​
        const store = createStore(
          todos,
          ['Use Redux'],
          applyMiddleware(logger)
        )
        ​
        store.dispatch({
          type: 'ADD_TODO',
          text: 'Understand the middleware'
        })
        // (These lines will be logged by the middleware:)
        // will dispatch: { type: 'ADD_TODO', text: 'Understand the middleware' }
        // state after dispatch: [ 'Use Redux', 'Understand the middleware' ]
        
         

        
<h4 id='7.4.4'>7.4.4 示例 </h4> 
      
#### 1) ./index.jsx
        
        import React from 'react';
        import ReactDom from 'react-dom';
        import { Provider } from 'react-redux';
        import { store } from './store/store.js';
        import App from './container/App.jsx';

        ReactDom.render(
          <Provider store={store}>
            <App />
          </Provider>,
          document.body
        );
#### 2) ./container/App.js
        
        import React from 'react';
        import { connect } from 'react-redux';
        import Login from '../components/Login.jsx';
        import List from '../components/List.jsx';

        function App(props) {
          const border = {
            border: 'solid 2px red',
          };

          return (
            <div style={border}>
              <h2>这里是Redux的example</h2>
              <Login />
              <List />
            </div>
          );
        }

        export default connect()(App);
#### 3) ./component/Login.js
        
        import React from 'react';
        import PropTypes from 'prop-types';
        import { connect } from 'react-redux';
        import {
          getLoginInfo,
          logout,
        } from '../actioncenter/action.js';

        function mapStateToProps(state) {
          return {
            isLogin: state.isLogin,
          };
        }

        function mapDispatchToProps(dispatch) {
          return {
            getLoginInfo(isLogin) {
              dispatch(getLoginInfo(isLogin));
            },
            logout() {
              dispatch(logout());
            },
          };
        }

        class Login extends React.Component {
          constructor(props) {
            super(props);
            this.username = React.createRef();
            this.passward = React.createRef();
            this.handleClick = this.handleClick.bind(this);
            this.handleLogout = this.handleLogout.bind(this);
          }


          handleClick() {
            const login = {
              username: this.username.current.value,
              passward: this.passward.current.value,
            };
            this.props.getLoginInfo(login);
          }

          handleLogout() {
            this.props.logout();
          }

          render() {
            const fail = (
                <div>
                  <span>用户名：</span><input type="text" ref={this.username} />
                  <span>密码：</span><input type="text" ref={this.passward} />
                  <button onClick={this.handleClick}>登录</button>
                </div>
              );

            const success = (
              <div>
                <h2>登陆成功</h2>
                <button onClick={this.handleLogout}>退出登录</button>
              </div>);

            return (
              <form>
                {this.props.isLogin ? success : fail}
              </form>
            );
          }
        }

        Login.protoTypes = {
          getLoginInfo: PropTypes.func.isRequired,
          logout: PropTypes.func.isRequired,
          isLogin: PropTypes.bool.isRequired,
        };

        export default connect(mapStateToProps, mapDispatchToProps)(Login);

#### 4) ./component/List.js
        
        import React from 'react';
        import PropTypes from 'prop-types';
        import { connect } from 'react-redux';
        import {
          createlist,
          deletelist,
        } from '../actioncenter/action.js';


        function mapStateToProps(state) {
          return {
            list: state.list,
          };
        }

        function mapDispatchToProps(dispatch) {
          return {
            createlist(str) {
              dispatch(createlist(str));
            },
            deletelist(index) {
              dispatch(deletelist(index));
            },
          };
        }

        class List extends React.Component {
          constructor(props) {
            super(props);
            this.content = React.createRef();
          }

          render() {
            return (
              <div>
                <ul>
                  {this.props.list.map((content, index) =>
                    (<li key={`li-${index}`}>
                      <button onClick={() => this.props.deletelist(index)}>删除</button>{content}
               </li>))}
                </ul>
                <button onClick={() => this.props.createlist(this.content.current.value)}>添加list</button>
                <input type="text" ref={this.content} placeholder="请输入内容" />
              </div>
            );
          }
        }

        List.protoTypes = {
          list: PropTypes.array.isRequired,
          createlist: PropTypes.func.isRequired,
          deletelist: PropTypes.func.isRequired,
        };

        export default connect(mapStateToProps, mapDispatchToProps)(List);

#### 5) ./actioncener/action.js
        
        import {
          GET_LOGIN_INFO,
          LOGOUT,
          CREATE_LIST,
          DELETE_LIST,
        } from '../constant/constant.js';

        export const getLoginInfo = (login) => ({
            type: GET_LOGIN_INFO,
            login,
          });
        export const logout = () => ({
            type: LOGOUT,
          });
        export const createlist = (str) => ({
            type: CREATE_LIST,
            str,
          });
        export const deletelist = (id) => ({
            type: DELETE_LIST,
            id,
          });

#### 6) ./reducer/reducer.js
        
        import {
          GET_LOGIN_INFO,
          LOGOUT,
          CREATE_LIST,
          DELETE_LIST,
        } from '../constant/constant.js';

        const initialState = {
          login: {
            name: '',
            passward: '',
          },
          isLogin: false,
          list: ['study', 'run', 'hike'],
        };

        function reducer(preState = initialState, action) {
          let newState;
          switch (action.type) {
            case GET_LOGIN_INFO:
              newState = Object.assign({}, {
                login: action.login,
                isLogin: action.login.passward === '12345687' ? true : false,
                list: preState.list,
              });
              return newState;
            case LOGOUT:
              newState = Object.assign({}, {
                login: '',
                isLogin: false,
                list: preState.list,
              });
              return newState;
            case CREATE_LIST:
              // 直接使用push方法返回的是新数组的长度
              // 改变的是原来的引用
              // preState.list.push(action.str);
              newState = Object.assign({}, {
                login: preState.login,
                isLogin: preState.isLogin,
                list: [...preState.list, action.str],
              });
              return newState;
            case DELETE_LIST:
              newState = Object.assign({}, {
                login: preState.login,
                isLogin: preState.isLogin,
                list: preState.list.filter((item, index) => index !== action.id),
              });
              return newState;
            default:
              return preState;
          }
        }

        export default reducer;
#### 7) ./store/store.js
        
        import {
          createStore,
          applyMiddleware,
        } from 'redux';
        // import thunkMiddleware from 'redux-thunk';
        import { createLogger } from 'redux-logger';
        import reducer from '../reducer/reducer.js';

        const loggerMiddleware = createLogger();

        export const store = createStore(
          reducer,
          applyMiddleware(
            // thunkMiddleware,
            loggerMiddleware
          )
        );

#### 8) ./constant/constant.js
        
        export const GET_LOGIN_INFO = 'GET_LOGIN_INFO';
        export const LOGOUT = 'LOGOUT';
        export const CREATE_LIST = 'CREATE_LIST';
        export const DELETE_LIST = 'DELETE_LIST';

