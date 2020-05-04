/*
Implement the ImageGallery component that accepts a links prop and
 renders the gallery described above so that the first item in the 
 links prop is the src attribute of the first image in the gallery. 
 It should also implement the following logic: When the button is clicked, 
 the image that is in the same div as the button should be removed from the gallery.*/
import React from "react";
import ReactDOM from "react-dom";

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: props.links,
    };
  }

  remove = (position) => {
    let links = this.state.links;
    links.splice(position, 1);

    this.setState({ links: links });
  };
  render() {
    return (
      <div>
        {this.state.links.map((link, index) => (
          <div className="image" key={index}>
            <img src={link} />
            <span>{index}</span>
            <button className="remove" onClick={this.remove.bind(this, index)}>
              X
            </button>
          </div>
        ))}
      </div>
    );
  }
}

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");

const links = ["https://goo.gl/kjzfbE", "https://goo.gl/d2JncW"];

ReactDOM.render(<ImageGallery links={links} />, rootElement);

//document.querySelectorAll(".remove")[0].click();

console.log(rootElement.innerHTML);
