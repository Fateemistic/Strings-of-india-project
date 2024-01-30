import "./ShopNowButton.css";

const ShopNowButton = () => {
  return (
    <section className="shop-now-button">
      <div className="frame-div">
        <div className="rectangle-div" />
        <div className="company-info-frame-wrapper">
          <div className="company-info-frame">
            <div className="f-a-qs-size-guide-frame">
              <h1 className="discover-timeless-elegance">
                Discover Timeless Elegance in Every Stitch at Strings of India
              </h1>
              <h3 className="explore-our-collection">
                Explore our collection and embrace the elegance that transcends
                time.
              </h3>
            </div>
            <button className="shop-now-frame">
              <div className="shop-now2">Shop Now</div>
            </button>
          </div>
        </div>
        <div className="vector-follow-instagram">
          <div className="classic-section">
            <img
              className="classic-section-child"
              alt=""
              src="/group-1@2x.png"
            />
            <img
              className="classic-section-item"
              loading="eager"
              alt=""
              src="/group-2.svg"
            />
          </div>
          <img
            className="vector-follow-instagram-child"
            loading="eager"
            alt=""
            src="/group-3.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default ShopNowButton;
