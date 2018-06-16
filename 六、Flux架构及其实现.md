# React_Study

## 六、Flux架构及其实现

### 作者：冰红茶  
### 参考书籍：《React全栈》 张轩 杨寒星  &&   《深入React技术栈》 陈屹 
### 参考源：[Flux 官网](http://facebook.github.io/flux/docs/in-depth-overview.html#content) 
### 参考源：[Flux Example](https://github.com/facebook/flux/tree/master/examples)
### 参考源：[REACT ROUTER教学视频](https://www.bilibili.com/video/av22934284/?p=21)

------    



   面对多向复杂交错的数据流动的时候，明显发现MVC架构对此无能为力，但是如果数据是单向的话呢，由于每个view对应一个model，View的重渲染很容易会使得性能受到严重影响。而Flux特有的单项数据流架构，与React的合作，恰好能解决这个单项数据流动造成的渲染性能的问题。但是对于原本使用MVC就能解决的问题，使用Flux明显有点用牛刀杀鸡了^_ ^
     
## 目录
    
## [六、Flux架构及其实现]
## [6.1 简介](#6.1)
### [6.1.1 背景和特点](#6.1.1)
### [6.1.2 control-view](#6.1.2)
### [6.1.3 总结](#6.1.3)
## [6.2 项目 todolist](#6.2)
### [6.2.1 准备工作](#6.2.1)
### [6.2.2 相关依赖解释](#6.2.2)
### [6.2.3 添加单元测试](#6.2.3)
### [6.2.4 相关文件](#6.2.4)

        
------
        
<h2 id='6'>六、Flux架构及其实现</h2>
<h3 id='6.1'>6.1 简介</h3>  
        
<h4 id='6.1.1'>6.1.1 背景和特点</h4>  
        
#### 1) 什么是Flux
> - Flux是Facebook用来构建客户端Web应用的应用架构。他利益哦那个单向数据流的方式来组合React中的视图组件。它更像是一个模式而不是一个正式的框架。
> - Flux is more of a pattern than a framework, and does not have any hard dependencies. However, we often use EventEmitter as a basis for Stores and React for our Views. The one piece of Flux not readily available elsewhere is the Dispatcher. This module, along with some other utilities, is available here to complete your Flux toolbox.
#### 2) 相关概念
> - view 视图层
> - Action 动作 视图层发出的消息，比如click
> - Dispatcher 
> - Store 包含应用的所有数据，是应用中唯一的数据发生变更的地方。用来存放应用的状态，一旦状态发生改变，就提醒Views要更新页面，对外只能提供getter的方法，不允许提供setter，禁止在任何地方直接操作Store
>>>>>> ![图6-1 应用架构](https://github.com/facebook/flux/blob/master/docs/img/flux-diagram-white-background.png?raw=true)
                
> - 容器型组件container component 含有抽象数据而没有业务逻辑的组件
> - 展示型组件 presentation component 没有数据请求只有业务逻辑的组件
        
<h4 id='6.1.2'>6.1.2 control-view</h4>  
        
#### 1) 什么是control-view
> - 相当于MVC模型中的controller
> - 一般是有应用的顶层容器充当，负责懂store中获取并将数据传递到子组件中，一般一个简单的应用只有一个CV，复杂的可以有多个，其实就是相当于中央处理器
> - 是应用中唯一可以操作state的地方
> - 不涉及具体的业务逻辑，主要进行store和React组件（即view层）的双向绑定，定义数据更新和传递的方式
> - CV会调用store的getter方法获取新的数据并设置自己的state，在render的时候以props的形式唱诶自己的子组件（this.props.children）
        
<h4 id='6.1.3'>6.1.3 总结</h4>  
        
#### 1) Flux的优缺点
> - Flux要慎用，因为如果只是做一个静态的组件，而且没有共享数据的话的话，使用flux无疑是增大了代码量
> - 但是好处了带来了清晰的数据流
#### 2) 单向数据流  
   
<h3 id='6.2'>项目 todolist</h3>  
        
<h4 id='6.2.1'>6.2.1 准备工作</h4>  
        
#### 1) 文件夹
> - components
>> - Todo.jsp(程序框架)
>> - List.jsx(代办事项列表)
>> - CreateButton.jsx(新建代办事项按钮)
> - actions
>> - TodoAction.js(程序中所有的action)
> - dispatcher
>> - AppDispatcher.js(程序中的的总调度)
> - stores
>> - TodoStore.js(管理程序中数据的存放)
#### 2) 安装依赖flux和events和uuid
> - 主要是为了Dispatcher的实现
        
        # flux
        LvHongbins-Mac-2:practice lvhongbin$ npm install flux --save-dev
        + flux@3.1.3
        added 2 packages from 5 contributors and audited 10317 packages in 21.905s
        found 10 moderate severity vulnerabilities
          run `npm audit fix` to fix them, or `npm audit` for details

        # events
        LvHongbins-Mac-2:practice lvhongbin$ npm install events --save-dev
        + events@3.0.0
        added 1 package from 1 contributor, updated 1 package and audited 10318 packages in 15.024s
        found 10 moderate severity vulnerabilities
          run `npm audit fix` to fix them, or `npm audit` for details

        # uuid
        LvHongbins-Mac-2:practice lvhongbin$ npm install uuid --save-dev
        + uuid@3.2.1
        updated 1 package and audited 10319 packages in 12.281s
        found 10 moderate severity vulnerabilities
          run `npm audit fix` to fix them, or `npm audit` for details

        # flux object-assign
        LvHongbins-Mac-2:practice lvhongbin$ npm install object-assign --save-dev
        + object-assign@4.1.1
        updated 1 package and audited 10320 packages in 11.536s
        found 10 moderate severity vulnerabilities
          run `npm audit fix` to fix them, or `npm audit` for details
> - Dispatcher有两个重要的方法，分别是register方法，负责注册各种actionType的回调，并且在回调中操作store，所以需要存放在store.js的文件中；另外一种方法是dispatch方法，这个方法用来触发对应类型的回调，所以放在action.js的文件中。
        
<h4 id='6.2.2'>6.2.2 相关依赖解释</h4>  
        
#### 1) [events](http://nodejs.cn/api/en/events.html#events_events)
> - Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.
> - All objects that emit events are instances of the EventEmitter class. These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object. Typically, event names are camel-cased strings but any valid JavaScript property key can be used.
> - 使用eventEmitter.on()来注册监听器，eventEmitter.emit()用来触发事件
        
        const EventEmitter = require('events');

        class MyEmitter extends EventEmitter {}

        const myEmitter = new MyEmitter();
        myEmitter.on('event', () => {
          console.log('an event occurred!');
        });
        myEmitter.emit('event');
> - EventEmitter 会按照监听器注册的顺序同步地调用所有监听器。 所以需要确保事件的正确排序且避免竞争条件或逻辑错误。 监听器函数可以使用 setImmediate() 或 process.nextTick() 方法切换到异步操作模式
        
        const myEmitter = new MyEmitter();
        myEmitter.on('event', (a, b) => {
          setImmediate(() => {
            console.log('这个是异步发生的');
          });
        });
        myEmitter.emit('event', 'a', 'b');
> - eventEmitter.once() 方法时可以注册一个对于特定事件最多被调用一次的监听器。 当事件被触发时，监听器会被注销，然后再调用。
        
        const myEmitter = new MyEmitter();
        let m = 0;
        myEmitter.once('event', () => {
          console.log(++m);
        });
        myEmitter.emit('event');
        // 打印: 1
        myEmitter.emit('event');
        // 忽略

        
<h4 id='6.2.3'>6.2.3 添加单元测试</h4>  
        
#### 1) [Jest](https://facebook.github.io/jest/)
> -  Delightful JavaScript Testing
> -  One of Jest's philosophies is to provide an integrated "zero-configuration" experience
> - Developer Ready
> - Instant Feedback
> - Snapshot Testing
> - Jest是Facebook开源的React单元测试框架，内部的DOM操作基于JSDOM，语法和断言基于Jasmine框架，
> - 安装 npm install --save-dev jest
        

<h4 id='6.2.4'>6.2.4 相关文件</h4>  
        
#### 1) Todo.jsp 
        
        import React from 'react';
        import ReactDOM from 'react-dom';
        import uuid from 'uuid';
        import List from './List.jsx';
        import CreateButton from './CreateButton.jsx';
        import TodoAction from '../actions/TodoAction.js';
        import TodoStore from '../stores/TodoStore.js';
        import realObjectFactor from '../../class/isLikeMe.jsx';

        realObjectFactor('div', 'test13');
        class Todo extends React.Component {
          constructor(props) {
            super(props);

            this.state = {
              todos: TodoStore.getAll(),
            };
            this.createTodo = this.createTodo.bind(this);
            this.deleteTodo = this.deleteTodo.bind(this);
            this.onChange = this.onChange.bind(this);
          }

          componentDidMount() {
            TodoStore.addChangeListener(this.onChange);
          }

          componentWillUnmount() {
            TodoStore.removeChangeListener(this.onChange);
          }

          onChange() {
            this.setState({
              todos: TodoStore.getAll(),
            });
          }

          // 添加Todo时间的回调函数
          createTodo() {
            TodoAction.create({ id: uuid.v4(), content: '3rd stuff' });
          }


          // 删除Todo事件的回调函数
          deleteTodo(id) {
            TodoAction.delete(id);
          }

          render() {
            return (
              <div>
                <List items={this.state.todos} onDelete={this.deleteTodo} />
                <CreateButton onClick={this.createTodo} />
              </div>
            );
          }
        }

        ReactDOM.render(<Todo />, document.getElementById('test13'));
#### 2) CreateButton.jsx
        
        import React from 'react';

        // const propTypes = {
        //   onClick: PropTypes.func.isRequired,
        // };

        function CreateButton(props) {
          return (
            <div className="createButtonComponent">
              <button onClick={() => { props.onClick(); }}>创建新的Todo</button>
            </div>
          );
        }

        // CreateButton.propTypes = propTypes;

        export default CreateButton; 
#### 3) List.jsx
        
        import React from 'react';
        // import { PropTypes } from 'react';

        // const propType = {
        //   items: PropTypes.array.isRequired,
        //   onDelete: PropTypes.func.isRequired,
        // };
        // { items, onDelete }

        function List(props) {
          let itemList = props.items.map((item) => (
            <li key={item.id}>
              <button onClick={() => { props.onDelete(item.id); }}>删除</button>
              {item.content}
            </li>
          ));
          return (
            <ul>
              <h2>这是今天的待办事项</h2>
              {itemList}
            </ul>
          );
        }

        // List.propTypes = propType;

        export default List;
#### 4) TodoAction.js
        
        import AppDispatcher from '../dispatcher/AppDispatcher';

        const TodoAction = {

          // 创建todo的action
          create(todo) {
            AppDispatcher.dispatch({
              actionType: 'CREATE_TODO',
              todo,
            });
          },

          // 删除todo的action
          delete(id) {
            AppDispatcher.dispatch({
              actionType: 'DELETE_TODO',
              id,
            });
          },
        };

        export default TodoAction;
#### 5) TodoStore.js
        
        import EventEmitter from 'events';
        import uuid from 'uuid';
        import AppDispatcher from '../dispatcher/AppDispatcher';

        const myEE = new EventEmitter();

        const TodoStore = {

          todos: [{
            id: uuid.v4(),
            content: 'first one',
          }, {
            id: uuid.v4(),
            content: 'second one',
          }],
          getAll() {
            return this.todos;
          },
          addTodo(todo) {
            this.todos.push(todo);
          },
          deleteTodo(id) {
            this.todos = this.todos.filter((item) => item.id !== id);
          },

          emitChange() {
            myEE.emit('change');
          },

          addChangeListener(callback) {
            myEE.on('change', callback);
          },

          removeChangeListener(callback) {
            myEE.removeListener('change', callback);
          },
        };


        // 第一个register
        let token1 = AppDispatcher.register((action) => {
          switch (action.actionType) {
            case 'CREATE_TODO':
              console.log('execute token1 CREATE_TODO');
              break;
            case 'DELETE_TODO':
              console.log('execute token1 DELETE_TODO');
              break;
            default:

              // 默认操作
          }
        });
#### 6) AppDispatcher.js
        
        import { Dispatcher } from 'flux';

        export default new Dispatcher();
> - 