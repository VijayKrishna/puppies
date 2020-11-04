import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Puppy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  render() {
    const breed = this.props.breed;
    const imgs = this.state.images.map((img, idx) => {
      const altName = `${breed}-cute-${idx}`;
      return (
        <img src={img} height="300" alt={altName}></img>
      );

      
    });

    return (
      <div key={breed}>
        <b>{breed}</b>
        <br />
        {imgs}
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
      const puppies = entries.map((entry) => entry[1]);
      this.setState({
        images: puppies,
      })
    });
  }
}

function PuppyMontage(props) {
  const items = props.puppies;
  const puppyItems = items.map((item) => <Puppy key={item} breed={item} />);

  return (
    <div>{puppyItems}</div>
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
      <div key="RESTfulList">
        <h1>Puppies!</h1>
        {/* <MyList items={this.state.items} /> */}
        <PuppyMontage key="PuppyMontage" puppies={this.state.items} />
      </div>

      
    );
  }
}

const dogs = "https://dog.ceo/api/breeds/list/all";

ReactDOM.render(
  <RESTfulList key="list" apiUrl={dogs}/>, 
  document.getElementById('root')
);
  

