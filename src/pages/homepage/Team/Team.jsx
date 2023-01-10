var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="style.css" />
        <div className="slider">
          <div className="slide">
            <img src="Desktop - 1 (1).png" alt="img" />
          </div>
          <div className="slide">
            <img src="Desktop - 1 (2).png" alt="img" />
          </div>
          <div className="slide">
            <img src="Desktop - 1 (3).png" alt="img" />
          </div>
          <div className="slide">
            <img src="Desktop - 1 (4).png" alt="img" />
          </div>
          <div className="slide">
            <img src="Desktop - 1 (5).png" alt="img" />
          </div>
          <div className="slide">
            <img src="Desktop - 1 (6).png" alt="img" />
          </div>
          <button className="slider__btn slider__btn--left">←</button>
          <button className="slider__btn slider__btn--right">→</button>
          {/* <div class="dots"></div> */}
        </div>
      </div>
    );
  }
});
