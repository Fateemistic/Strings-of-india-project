import FRAME from "../components/FRAME";
import ShopNowButton from "../components/ShopNowButton";
import NewCollectionFrame from "../components/NewCollectionFrame";
import RectangleGroup from "../components/RectangleGroup";
import CompanyInfo from "../components/CompanyInfo";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <FRAME />
      <ShopNowButton />
      <NewCollectionFrame />
      <img
        className="main-rectangle-icon"
        alt=""
        src="/main-rectangle@2x.png"
      />
      <img
        className="main-rectangle-icon1"
        loading="eager"
        alt=""
        src="/rectangle-23@2x.png"
      />
      <section className="new-arrivals-frame-wrapper">
        <div className="new-arrivals-frame">
          <div className="new-arrivals-parent">
            <h1 className="new-arrivals">
              <span>{`New `}</span>
              <span className="arrivals">Arrivals</span>
            </h1>
            <div className="rectangle-parent">
              <img className="frame-child" alt="" src="/rectangle-6@2x.png" />
              <button className="shop-now-wrapper">
                <div className="shop-now">Explore Now</div>
              </button>
            </div>
            <div className="our-products-frame">
              <div className="multi-category-frame">
                <h1 className="our-products">
                  <span>{`Our `}</span>
                  <span className="arrivals">Products</span>
                </h1>
              </div>
              <div className="our-products-header">
                <div className="product-category">
                  <h3 className="kurta">Kurta</h3>
                  <h3 className="saree">Saree</h3>
                  <h3 className="lehanga">Lehanga</h3>
                  <h3 className="bridal-dress">Bridal Dress</h3>
                  <h3 className="salwaar-kameez">Salwaar Kameez</h3>
                  <h3 className="new-arrivals1">New Arrivals</h3>
                </div>
                <div className="yellow-leheriya-print-rectangl" />
              </div>
              <div className="new-arrivals-header">
                <RectangleGroup
                  rectangle8="/rectangle-8@2x.png"
                  propHeight="401px"
                  propGap="10px"
                />
                <RectangleGroup
                  rectangle8="/rectangle-9@2x.png"
                  propHeight="403px"
                  propGap="12px"
                />
                <RectangleGroup
                  rectangle8="/rectangle-10@2x.png"
                  propHeight="405px"
                  propGap="14px"
                />
                <RectangleGroup
                  rectangle8="/rectangle-11@2x.png"
                  propHeight="407px"
                  propGap="16px"
                />
                <RectangleGroup
                  rectangle8="/rectangle-12@2x.png"
                  propHeight="401px"
                  propGap="10px"
                />
                <RectangleGroup
                  rectangle8="/rectangle-13@2x.png"
                  propHeight="403px"
                  propGap="12px"
                />
                <RectangleGroup
                  rectangle8="/rectangle-14@2x.png"
                  propHeight="405px"
                  propGap="14px"
                />
                <RectangleGroup
                  rectangle8="/rectangle-15@2x.png"
                  propHeight="407px"
                  propGap="16px"
                />
              </div>
            </div>
            <button className="shop-now-container">
              <div className="shop-now">View more</div>
            </button>
            <div className="frame-ellipse">
              <h1 className="what-people-say-container">
                <span>{`What `}</span>
                <span className="arrivals">People</span>
                <span> Say About Us</span>
              </h1>
              <h3 className="where-elegance-speaks">
                "Where Elegance Speaks for Itself: What Our Customers Say"
              </h3>
            </div>
            <div className="shrudha-r-review">
              <div className="shrudha-r-review-child" />
              <div className="rectangle-group">
                <div className="frame-item" />
                <h3 className="i-recently-purchased">
                  "I recently purchased a bridal lehenga from Strings of India,
                  and I couldn't be happier!
                </h3>
                <div className="the-quality-and-craftsmanship-wrapper">
                  <div className="the-quality-and">
                    The quality and craftsmanship were exceptional. It made my
                    wedding day truly special. The personalized service and
                    attention to detail were outstanding. I can't thank them
                    enough for making me feel like a queen on my big day.
                  </div>
                </div>
                <div className="testimonials">
                  <div className="rajiv-review">
                    <img
                      className="shrudha-review-icon"
                      loading="eager"
                      alt=""
                      src="/ellipse-26@2x.png"
                    />
                    <div className="shrudha-r">Shrudha R</div>
                  </div>
                </div>
              </div>
              <div className="rectangle-container">
                <div className="frame-item" />
                <h3 className="as-someone-who">
                  "As someone who loves traditional, I've shopped at many online
                  stores, but Strings of India stands out.
                </h3>
                <div className="their-collection-of-kurtas-is-wrapper">
                  <div className="the-quality-and">
                    Their collection of kurtas is simply amazing. I've bought
                    several for various occasions, and I'm always impressed by
                    the quality and style. The best part is the customization
                    option, ensuring a perfect fit every time
                  </div>
                </div>
                <div className="rajiv-review">
                  <img
                    className="shrudha-review-icon"
                    loading="eager"
                    alt=""
                    src="/ellipse-27@2x.png"
                  />
                  <div className="shrudha-r">Rajiv S</div>
                </div>
              </div>
              <div className="shrudha-r-review-child" />
            </div>
            <img
              className="group-icon"
              loading="eager"
              alt=""
              src="/group-12.svg"
            />
          </div>
        </div>
      </section>
      <CompanyInfo />
    </div>
  );
};

export default Homepage;
