import "./FRAME.css";

const FRAME = () => {
  return (
    <header className="f-r-a-m-e">
      <div className="f-r-a-m-e-child" />
      <div className="women-group-parent">
        <div className="women-group">
          <div className="women">
            <div className="women1">WOMEN</div>
          </div>
          <div className="women">
            <div className="women1">MEN</div>
          </div>
          <div className="women">
            <div className="women1">KIDS</div>
          </div>
        </div>
        <h1 className="strings-of-india-container">
          <span className="strings-of-india-container1">
            <span>Strings</span>
            <span className="span">{` `}</span>
            <span className="of-india">of India</span>
          </span>
        </h1>
      </div>
      <div className="new-collection-frame">
        <img
          className="icons8-search-100-1"
          loading="eager"
          alt=""
          src="/icons8search100-1@2x.png"
        />
        <img
          className="icons8-bag-100-1"
          loading="eager"
          alt=""
          src="/icons8bag100-1@2x.png"
        />
      </div>
    </header>
  );
};

export default FRAME;
