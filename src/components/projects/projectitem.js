import React, { Component } from "react";

export default class ProjectItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ProjectItemClass: ""
    };
  }

  handleMouseEnter() {
    this.setState({ ProjectItemClass: "image-blur" });
  }

  handleMouseLeave() {
    this.setState({ ProjectItemClass: "" });
  }

  render() {
    const { name, description, thumb_image_url, url } = this.props.item;
    return (
      <div
        className="project-item-wrapper"
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        <div
          className={"project-img-background " + this.state.ProjectItemClass}
          style={{
            backgroundImage: "url(" + thumb_image_url + ")"
          }}
        />

        <div className="img-text-wrapper">
          <div className="subtitle">{name}</div>
          <div className="subtitle">
            <a class="subtitle" href={url}>
              {description}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
