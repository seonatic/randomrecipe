import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Item extends React.Component {
  constructor(props) {
    super(props);
  }
    render(){
      return ( 
      <div>
      <h1> Random Recipe of Today: </h1>
      </div>
      )}
 }
  

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      category: [],
      country: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {

    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(json => {
        this.setState({
          recipes: json.meals,
          category: json.meals,
          image: json.meals,
          country: json.meals

        })
      })
      .catch(error => console.log('parsed error', error))

  } 

  renderlist() {
    return (
      <div id="data">
        <Item></Item>
        {this.state.recipes.map(m =>
          (<h2 className="box"> {m.strMeal} </h2>)
        )}
        {this.state.recipes.map(i =>
          <div className="padder"><img src={i.strMealThumb} alt={i.strMeal} /> </div>
        )}
        {this.state.recipes.map(l =>
          <div className="Ingbox">
            <ul className="ingredients"><br />
              <h2 className="title">Ingredients:</h2>
              {l.strMeasure1} {l.strIngredient1} <br />
              {l.strMeasure2} {l.strIngredient2} <br />
              {l.strMeasure3} {l.strIngredient3} <br />
              {l.strMeasure4} {l.strIngredient4} <br />
              {l.strMeasure5} {l.strIngredient5} <br />
              {l.strMeasure6} {l.strIngredient6} <br />
              {l.strMeasure7} {l.strIngredient7} <br />
              {l.strMeasure8} {l.strIngredient8} <br />
              {l.strMeasure9} {l.strIngredient9} <br />
              {l.strMeasure10} {l.strIngredient10} <br />
            </ul></div>
        )}
        <br />
        <h2>Instructions:</h2>
        {this.state.recipes.map(d =>
          <div>

            <div className="inst"> {d.strInstructions} </div>

          </div>
        )}
        
      </div>
    );
  }

  render() {
    return this.renderlist();
  }
}

export default App;
