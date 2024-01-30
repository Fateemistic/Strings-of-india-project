import FrameShopNowSilkSarees from "./FrameShopNowSilkSarees";
import "./NewCollectionFrame.css";

const NewCollectionFrame = () => {
  return (
    <section className="new-collection-frame1">
      <h1 className="new-collection">
        <span>{`New `}</span>
        <span className="collection">Collection</span>
      </h1>
      <div className="frame-shop-now-classic-lehanga">
        <div className="frame-shop-now-silk-sarees1">
          <img
            className="frame-shop-now-silk-sarees-item"
            alt=""
            src="/rectangle-3@2x.png"
          />
          <h1 className="classic-lehanga">Classic Lehanga</h1>
          <div className="frame-shop-now-silk-sarees-inner">
            <button className="shop-now-wrapper1">
              <div className="shop-now4">Shop Now</div>
            </button>
          </div>
        </div>
        <FrameShopNowSilkSarees
          rectangle4="/rectangle-4@2x.png"
          silkSarees="Silk Sarees"
          propPadding="var(--padding-243xl) var(--padding-xl) var(--padding-19xl) var(--padding-2xl)"
          propBackgroundImage="url('pending_loco-0005-s2-1:24')"
          propTextAlign="left"
        />
        <FrameShopNowSilkSarees
          rectangle4="/rectangle-5@2x.png"
          silkSarees="Classic Kurta"
          propPadding="var(--padding-243xl) var(--padding-51xl) var(--padding-19xl) var(--padding-52xl)"
          propBackgroundImage="unset"
          propTextAlign="center"
        />
      </div>
    </section>
  );
};

export default NewCollectionFrame;
