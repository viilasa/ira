export default function Location() {
  return (
    <section id="location" className="location">
      <div className="companions">
        <div className="companions__copy">
          <h2 className="companions__heading reveal">
            Where South Goa's<br />Finest Converge
          </h2>
          <p className="companions__sublead reveal" data-delay="0.08">
            IRA Estates sits at the heart<br />of everything South Goa offers.
          </p>
          <div className="companions__body">
            <p className="companions__para reveal" data-delay="0.15">
              Benaulim Beach — 5 min walk. Colva Beach — 10 min drive. Martin's Corner,
              one of Goa's most celebrated restaurants, is just around the corner. The best
              of South Goa is not a drive away — it is a way of life here.
            </p>
            <p className="companions__para reveal" data-delay="0.22">
              The Salim Ali Bird Sanctuary and the tranquil backwaters of Cavelossim are
              within reach when you crave a quieter day. At IRA Estates, your address keeps
              the best of the region effortlessly within reach — without tying you to a long
              list of timings and distances.
            </p>
          </div>
        </div>
        <div className="companions__illus">
          <img
            className="companions__illus-desktop"
            src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1776549475/wrapper_3421_wpbgjt.svg"
            alt="Goa lifestyle illustration"
            loading="lazy"
            decoding="async"
          />
          <img
            className="companions__illus-mobile"
            src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1776887333/wrapper_Mobile_VIew_sengsi.svg"
            alt="Goa lifestyle illustration"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
