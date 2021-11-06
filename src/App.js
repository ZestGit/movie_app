import React from 'react';
import PropTypes from 'prop-types'

// props.fav는 { fav } 로 쓰는 것과 같다 ( 내부에서 얻는 방식 )
function Food({ name, picture, rating }) {
  return <div>
    <h1>I Like {name}</h1>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
}

// 각 타입의 형태를 체크할 수 있음(타입이 맞지 않거나 require가 아닌 경우 콘솔창에 에러가뜸.)
// 반드시 propTypes로 이름을 지어야한다. (아니면 리액트에서 알지못함.)
Food.propTypes = {
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number
};

// react에서 컴포넌트는 유니크해야한다. ->array가 들어올 때는 유일성을 잃어버리므로 key인 id를 추가한다.
const foodILike = [
  {
    id:1,
    name:"kimchi",
    image:
    "https://steemkr.com/coinkorea/@lamiru/2qflp3https://www.hwatongkimchi.com/article/%EA%B5%AC%EB%A7%A4-%ED%9B%84%EA%B8%B0/4/5378/",
    rating: 5
  },
  {
    id:2,
    name:"samgyeopsal",
    image:
    "https://cdn.clien.net/web/api/file/F01/9415727/1f3052ec9c804.jpeg?w=780&h=30000",
    rating: 4.9
  }
]

// function 컴포넌트
// function App() {
//   return (
//     <div className="App">
//       <h1>hello</h1>
//       {/*<Food fav="kimchi" /> */}
//       { foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)}
//     </div>
//   );
// }

// 클래스 컴포넌트 ()  //function이 아니기 떄문에 return이 없다.
// 라이프 사이클 메소드를 가지는데 React가 컴포넌트를 생성하고 없애는 주기
// mounting = 생성, updating = 업데이트, unmounting = 소멸 
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("hello");
//   }
//   // state는 오브젝트이고 컴포넌트의 data를 넣을 공간이 있고 변하는 값.
//   state = {
//     count: 0
//   }

//   add = () => {
//     //this.state.count = 1;
//     //this.setState({count: this.state.count + 1}); // state는 오브젝트이므로 setState는 새로운 state를 받아야하므로 {count:}를 넣어준다. (안좋은방법)
//     this.setState(current => ({count: current.count + 1})); // state를 set할 때, react에서 외부의 상태에 의존하지않는 가장 좋은 방법임
//   };
//   minus = () => {
//     //this.state.count = -1;  //이 말의 의미는 매번 state를 변경할 때 react가 render를 호출해서 바꿔주길 원한다는 뜻
//     this.setState({count: this.state.count - 1}); // setState를 사용하지 않으면 새 state와 render 함수가 호출되지 않는다. (setState를 써야 re render가 됨.)
//   }

//   // 컴포넌트가 처음 렌더되고 난 후 호출
//   componentDidMount() {
//     console.log("component renderd");
//   }
//   // setState로 re render 되었을 때 (업데이트) 호출
//   componentDidUpdate() {
//     console.log("i just update");
//   }
//   // 컴포넌트가 소멸될 떄
//   componentWillUnmount() {
//     console.log("Good bye")
//   }
//   // react는 자동적으로 모든 클래스 컴포넌트의 render 메소드를 실행한다.
//   //자바스크립트에서는 onClick시 이벤트리스너에 등록해야하지만 리액트에서는 자동으로 onClick을 가지고 있음.
//   render() {
//     return (
//     <div>
//       <h1>The number is { this.state.count }</h1>
//       <button onClick={this.add}>Add</button> 
//       <button onClick={this.minus}>minus</button>
//     </div>
//     )}
// }

class App extends React.Component {
  state = {
    isLoading:true,
    movies: [] // default를 여기 다 적을 필요없다. 어차피 setState에 새로 넣어주므로 거기서 넣어도됨
  };
  
  componentDidMount() {
    setTimeout(() => {
      this.setState(current => ({ isLoading: !current.isLoading}));
    }, 6000);
  }

  render() {
    const { isLoading } = this.state; // ES6 문법 사용
    return (
    <div>{ isLoading ? "Loading..." : "We are ready"}</div>
    );
  }
}

export default App;
