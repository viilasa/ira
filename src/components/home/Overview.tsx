export default function Overview() {
  return (
    <section id="overview" className="overview">
      <img
        className="overview__bg-illus"
        src="https://res.cloudinary.com/ddhhlkyut/image/upload/q_auto/f_auto/v1776431298/bgforvines_hc7ibr.svg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />

      <div className="overview__layout">
        <h2 className="overview__title reveal">Welcome to IRA Estates</h2>

        <p className="overview__subtitle reveal" data-delay="0.08">
          Hidden away on the shores of South Goa, IRA Estates offers a life of
          refined coastal luxury in harmony with the natural world.
        </p>

        <div className="overview__left">
          <div className="overview__plant-wrap reveal" data-delay="0.14">
            <img
              className="overview__plant"
              src="https://res.cloudinary.com/ddhhlkyut/image/upload/q_auto/f_auto/v1776427644/Untitled_design_7_fbnerg.svg"
              alt="Plant illustration"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="overview__right reveal" data-delay="0.18">
          <p className="overview__para">
            Every home developed by IRA Estates abides by a philosophy of architecture that
            honours seamless integration with the environment. This belief sits at the heart
            of every decision we make, from planning to final execution.
          </p>
          <p className="overview__para">
            Our journey in luxury development across Goa has sharpened our outlook toward
            innovation, design, and uncompromising construction quality. Our comprehensive
            knowledge of international standards is continuously refined with the latest
            trends in global real estate.
          </p>
          <p className="overview__para">
            Our experience has created lasting relationships with strategic partners who now
            help us plan and execute with the precision and care reserved for the most
            prestigious projects around the world.
          </p>
          <p className="overview__signoff">Welcome, dear reader, to your new abode.</p>
        </div>
      </div>
    </section>
  )
}
