import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}
  
class Board extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
          squares: Array(9).fill(null),
          xIsNext: true,
      };
  }

  handleClick(i) {
      const squares = this.state.squares.slice()
      if (this.computeWinner(squares) != null || squares[i] != null) {
          return
      }

      const xIsNext = this.state.xIsNext
      squares[i] = xIsNext ? 'X' : 'O'
      this.setState({squares: squares, xIsNext: !xIsNext})
  }

  computeWinner(squares) {
      const winningCombinations = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 4, 8],
          [2, 4, 6],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
      ]

      for (let idx = 0; idx < winningCombinations.length; idx++) {
          const winningCombo = winningCombinations[idx];
          const [i, j, k] = winningCombo
          
          if (squares[i] != null && squares[i] === squares[j] && squares[j] === squares[k]) {
              const winner = squares[i]
              return winner;
          }
      }
  }

  renderSquare(i) {
    return (
    <Square 
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
      const winner = this.computeWinner(this.state.squares)

      let status = null
      if (winner === null) {
          status = `Next player: ${this.state.xIsNext ? "X" : "O"}`
      }
      else {
          status = `Winner: ${winner}`
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

class Puppy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  render() {

    const imgs = this.state.images.map((img) => <img src={img} height="300"></img>);

    return (
      <div>
        <b>{this.props.breed}</b>
        <div>
          {imgs}
        </div>
      </div>
    );
  }

  componentDidMount() {
    if (this.state.breed === null) {
      return;
    }

    const url = `https://dog.ceo/api/breed/${this.props.breed}/images/random/2`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const entries = Object.entries(data.message);
      console.log(entries);
      const puppies = entries.map((entry) => entry[1]);
      this.setState({
        images: puppies,
      })
    });
  }
}

function PuppyList(props) {
  const items = props.puppies;
  const puppyItems = items.map((item) => <Puppy breed={item} />);

  return (
    <div>{puppyItems}</div>
  );  
}

function MyList(props) {
  const items = props.items;
  const listItems = items.map((item) => <li>{item}</li>);

  return (
    <ul>{listItems}</ul>
  );
}

class RESTfulList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    const url = this.props.apiUrl;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let entries = Object.entries(data.message);



        for (let idx = 0; idx < entries.length; idx++) {
          const element = entries[idx];

          let randomIdx = Math.floor(Math.random() * (entries.length - idx - 1))

          const randomEntry = entries[randomIdx];
          entries[randomIdx] = entries[idx];
          entries[idx] = randomEntry;
        }

        const puppies = entries.slice(1, 10).map((entry) => entry[0]);
        this.setState({
          items: puppies,
        })
      });
  }

  render() {
    return (
      <div>
        <h1>Puppies!</h1>
        {/* <MyList items={this.state.items} /> */}
        <PuppyList puppies={this.state.items} />
      </div>

      
    );
  }
}

// class List extends React.Component {
//   render() {
//     return (
//       <ul>
//         <li>Item 1</li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//       </ul>
//     )
//   }
// }
  
// ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

// ReactDOM.render(<List items={["item a", "item b", "item c"]}/>, document.getElementById('root'));
const dogs = "https://dog.ceo/api/breeds/list/all";

ReactDOM.render(
  <RESTfulList apiUrl={dogs}/>, 
  document.getElementById('root')
);
  

