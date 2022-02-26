import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
var player = { score: 1, name:"Jeff" };
var newPlayer = Object.assign({}, player, { score: 2 });

// class Square extends React.Component {
//   //클래스에 생성자를 추가하여 state를 초기화!
//   //tip 모든 react컴포넌트 클래스는 생성자를 가질 때 super(props)호출 구문 작성 필요
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null,
//     };
//   }//state초기화end 
  
//   render() {
//     return (
//       //버튼을 클릭하면 콘솔에 'click'출력
//       //<button className="square" onClick={function () { console.log('click');}}>
//       //this의 혼란스러운 동작을 피하기 위해 이벤트 핸들러에 화살표 함수 사용
//       //<button className='square' onClick={()=> console.log('click')}>
//       //컴포넌트에서 setstate를 호출하면 react 는 자동으로 컴포넌트 내부의 자식 컴포넌트를 업데이트한다.
//       <button className='square'
//         onClick={() => this.props.onClick()}>
//         {this.props.value}
        
//       </button>
//     );
//   }
// }
function Square(props) {
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  )
}
//부모 Board 컴포넌트에서 자식 Square 컴포넌트로 prop를 전달
class Board extends React.Component {
  constructor(props) { 
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }
  handleClick(i) { 
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
    // return (
    //   <Square
    //     value={this.state.squares[i]}
    //     onClick={() => this.handleClick(i)}
    //     />
    // )
  }

  renderSquare(i) {
    return <Square
      value={this.state.squares[i]}
      onClick={ () => this.handleClick(i)}
    />;
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
