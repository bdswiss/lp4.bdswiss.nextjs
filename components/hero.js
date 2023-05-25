import Image from "next/image";

export default function Hero() {
  return (
    <section className="section hero-section horizontal bleed-gradient">
      <div className="container">
        <div className="component hero-component">
          <div className="component-content hero-content">
            <h2 className="section-title">
              Book a free one-on-one
              <br />
              call with one of our
              <br />
              leading analysts!
            </h2>
            <div className="section-description">
              VIP Account Exclusive Service*
            </div>
            <div className="buttons">
              <div className="button-wrapper">
                <a href="#section-4" className="primary">
                  Book One-on-One
                </a>
                <div className="risk-warning">
                  Your capital is at risk.{" "}
                  <a
                    href="https://global.bdswiss.local/en/general-terms-and-conditions/"
                    target="_blank"
                  >
                    T&amp;Cs Apply.
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="section-media type-image image">
            <Image
              priority
              src="/images/hero/image.png"
              height={709}
              width={663}
              alt="hero image - mobile with logos"
            />
          </div>
        </div>
      </div>
    </section>
  );
}