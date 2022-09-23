# react-study
 In this repository I show what I am learning (learned)
 
## Cheatscheet

### Base
#### Render
Для рендерингу React-елементу в кореневому DOM вузлі, викличте функцію ReactDOM.render() з React-елементом та кореневим DOM вузлом у якості аргументів:
```js
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

React-елементи є незмінними. Як тільки елемент створений, ви не можете змінювати його дочірні елементи чи атрибути.

Розглянемо наступний приклад годинника:
```js
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>Зараз {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));}

setInterval(tick, 1000);
```
React DOM порівнює елемент і його дочірні елементи з попередніми та вносить в DOM тільки необхідні зміни для приведення DOM у бажаний стан.

#### Components and props
Найпростішим способом визначення компонента є написання функції JavaScript:
```js
function Welcome(props) {
  return <h1>Привіт, {props.name}</h1>;
}
```
Ви також можете використовувати ES6 класи, щоб визначити компонент:
```js
class Welcome extends React.Component {
  render() {
    return <h1>Привіт, {this.props.name}</h1>;
  }
}
```
> Використовуємо класи, щоб визначити компонент, якщо будемо використовувати коструктор та/або методи
#### State and Lifecycle
Конструктор:
```js
constructor(props) {
super(props);
this.state = {date: new Date()};  
}
```
Методи життєвого циклу:
```js
  componentDidMount() // виконується після того, як вивід компонента був відрендерений у DOM
  componentDidUpdate() // виконується після того, як компонент був оновлений
  componentWillUnmount() // виконується перед тим, як компонент буде видаленний
```

Оновлення/зміна стану:
```js
 this.setState({comment: 'Привіт'});
 
 // async
 // Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});

// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

// Combine status updates
constructor(props) {
  super(props);
  this.state = {
    posts: [],
    comments: []
    };
 }

componentDidMount() {
 fetchPosts().then(response => {
   this.setState({
     posts: response.posts
     });
 });

 fetchComments().then(response => {
   this.setState({
     comments: response.comments
     });
 });
}

```

#### Event processing
```js
function ActionLink() {
  function handleClick(e) {
  e.preventDefault();
  console.log('Посилання було натиснуте.');
  }
  
  return (
    <a href="#" onClick={handleClick}>
     Натисни на мене
    </a>
  );
}
```
```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // Ця прив'язка необхідна, щоб `this` працював у функції зворотнього виклику
    this.handleClick = this.handleClick.bind(this);  }

  handleClick() {
   this.setState(state => ({
    isToggleOn: !state.isToggleOn
   }));  
  }
  
  render() {
    return (
      <button onClick={this.handleClick}>
       {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```
Передача аргументів до обробників подій:
```js
 <button onClick={(e) => this.deleteRow(id, e)}>Видалити рядок</button>
 <button onClick={this.deleteRow.bind(this, id)}>Видалити рядок</button>
```

#### Conditional Rendering
```js
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
   return <UserGreeting />;  
  }  
  return <GuestGreeting />;}
  
ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```
```js
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      Користувач <b>{isLoggedIn ? 'зараз' : 'не'}</b> на сайті.    </div>
  );
}
```

#### Lists and keys
```js
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
     {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```
> Ключі допомагають React визначити, які елементи були змінені, додані або видалені.

```js

// Incorrect
function ListItem(props) {
  const value = props.value;
  return (
    // Невірно! Немає необхідності визначати тут ключ:
    <li key={value.toString()}>
     {value}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Невірно! Ключ необхідно визначити тут:
    <ListItem value={number} />  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
// Incorrect

// Correct
function ListItem(props) {
  // Вірно! Тут не потрібно визначати ключ:
  return <li>{props.value}</li>;}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Вірно! Ключ потрібно визначати всередині масиву: 
    <ListItem key={number.toString()} value={number} />  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
// Correct
```

Ключі, що використовуються в масиві, повинні бути унікальними тільки серед елементів цього масиву. Однак їм не потрібно бути унікальними глобально. Можна використовувати той самий ключ в двох різних масивах:
```js
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
         {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
      </div>
  );
}

const posts = [
  {id: 1, title: 'Привіт, світе', content: 'Ласкаво просимо до вивчення React!'},
  {id: 2, title: 'Установка', content: 'React можна встановити через npm.'}
];
ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);
```
Ключі слугують підказками для React, але вони ніколи не передаються до ваших компонентів. Якщо в компоненті потрібно те ж саме значення, то передайте його явно через проп з іншим ім’ям:
```js
const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
);
```
JSX дозволяє вбудувати будь-який вираз у фігурні дужки, щоб ми зуміли включити результат виконання `map()`:
```js
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
      <ListItem key={number.toString()}
                value={number} />
      )} 
    </ul>
  );
}
```

#### Forms

Для того, щоб `input` управлявся з React, треба прив'язати значення `value` до `state` в классовому компоненті. Виглядає це так:
```js
class Form extends React.Component {
 state = {
  firstName: '',
 }
 
 render() {
  const {firstName} = this.state
  
  return (
   <div>
    <input
     type='text'
     name='firstName'
     placeholder='First name'
     value={firstName}
    />
   </div>
  )
 }
}
```
Тепер, щоб `input` працював так як треба, ми повині додати `onChange` до цього `input`:
```js
class Form extends React.Component {
 state = {
  firstName: '',
 }
 
 handleChange = (e) => {
  this.setState({[e.target.name]: e.target.value}) // використовуємо [e.target.name], щоб динамічно пов'язувати input з state, та не писати для кожного input свою функцію
 }
 
 render() {
  const {firstName} = this.state
  
  return (
   <div>
    <input
     onChange={this.handleChange}
     type='text'
     name='firstName'
     placeholder='First name'
     value={firstName}
    />
   </div>
  )
 }
}
```
Forms cheatsheet:
```js
class Form extends React.Component {
 state = {
  firstName: '',
  email: '',
  message: '',
  select: '',
  subscription: false;
  gender: ''
 }
 
 handleChange = (e) => {
  this.setState({[e.target.name]: e.target.value}) // використовуємо [e.target.name], щоб динамічно пов'язувати input з state, та не писати для кожного input свою функцію
 }
 
 handleCheckboxChange = (e) => {
  this.setState({[e.target.name]: e.target.checked})
 }
 
 render() {
  const {firstName, email, message, select, subscription, gender} = this.state
  
  return (
   <div>
    <input
     onChange={this.handleChange}
     type='text'
     name='firstName'
     placeholder='First name'
     value={firstName}
    />
    <input
     onChange={this.handleChange}
     type='email'
     name='email'
     placeholder='email'
     value={email}
    />
    <br />
    <textarea
     onChange={this.handleChange}
     name='message'
     value='message'
    />
    <br />
    <select name='select' velue={select} onChange={this.handleChange}>
     <option value='' disabled></option>
     <option value='1'>1</option>
     <option value='2'>2</option>
     <option value='3'>3</option>
    </select>
    <br />
    <label>
     <input
      onChange={this.handleCheckboxChange}
      type='checkbox'
      name='subscription'
      checked={subscription}
     />
     Subscription
    </label>
    <br />
    <input onChange={this.handleChange} type='radio' name='gender' value='male' checked={gender === 'male'}/>
    <input onChange={this.handleChange} type='radio' name='gender' value='female' checked={gender === 'female'}/>
   </div>
  )
 }
}
```
## Apps

### Timer
![Timer](https://github.com/qcyGH/study-react/blob/main/accets/Timer.png?raw=true)

### List
![List](https://github.com/qcyGH/study-react/blob/main/accets/List.png?raw=true)

### TODO List
![TODO List](https://github.com/qcyGH/study-react/blob/main/accets/TODO_list.png?raw=true)
