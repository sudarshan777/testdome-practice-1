/*DESCRIPTION
You have a GroceryApp class, which receives a list of products, 
each one with name and votes. The app should render an unordered 
list, with a list item for each product. Products can be upvoted or downvoted.

By appropriately using React state and props, implement the upvote/downvote logic.
Keep the state in the topmost component, while the Product component should accept props.

For example, passing the following array as products prop to GroceryApp 
[{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }] and clicking the '+' 
button next to the Oranges should result in HTML like:

<div id="root">
  <ul>
    <li>
      <span>Oranges</span> - <span>votes: 1</span><button>+</button> <button>-</button>
    </li>
    <li>
      <span>Bananas</span> - <span>votes: 0</span><button>+</button> <button>-</button>
    </li>
  </ul>
</div>*/

import React from "react";
import ReactDOM from "react-dom";

const Product = (props) => {
  const plus = () => {
    // Call props.onVote to increase the vote count for this product
    props.onVote("plus", props.product.name);
  };
  const minus = () => {
    // Call props.onVote to decrease the vote count for this product
    props.onVote("minus", props.product.name);
  };
  return (
    <li>
      <span>{props.product.name}</span> -{" "}
      <span>votes: {props.product.votes}</span>
      <button onClick={plus}>+</button> <button onClick={minus}>-</button>
    </li>
  );
};

class GroceryApp extends React.Component {
  // Finish writing the GroceryApp class
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
    };
  }

  onVote = (dir, index) => {
    let newProduct = [];

    if (dir === "plus") {
      newProduct = this.state.products.map((p, i) => {
        if (p.name === index) {
          return { name: p.name, votes: p.votes + 1 };
        }
        return p;
      });
    } else if (dir === "minus") {
      newProduct = this.state.products.map((p, i) => {
        if (p.name === index) {
          return { name: p.name, votes: p.votes - 1 };
        }
        return p;
      });
    }
    this.setState({
      products: newProduct,
    });
  };

  render() {
    return (
      <ul>
        {this.state.products.map((product, index) => {
          return <Product key={index} product={product} onVote={this.onVote} />;
        })}
      </ul>
    );
  }
}

document.body.innerHTML = "<div id='root'></div>";

ReactDOM.render(
  <GroceryApp
    products={[
      { name: "Oranges", votes: 0 },
      { name: "Bananas", votes: 0 },
    ]}
  />,
  document.getElementById("root")
);
console.log(document.getElementById("root").innerHTML);
