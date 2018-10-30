import React from "react";
import { Link } from "gatsby";

import CallToAction from "components/common/cta";
import ExperimentFAQ from "components/faq/experiment";
import AskUs from "components/common/askUs";
import MiniHero from "components/common/minihero";
import FastFact from "components/common/fastFact";
import YouTube from "components/common/youtube";

import Gallery from "components/common/gallery";
import { experimentGallery } from "components/common/gallery/constants";

import "./common.scss";

export default class Experiment extends React.Component {
  render() {
    return (
      <div className="feature">
        <MiniHero
          title="Print anything on everything."
          description="Experiment with new fluids using the Voltera V-One platform. Print with your own materials onto the substrates you want."
        >
          <FastFact title="Standard" label="Cartridges" />
          <FastFact title="Flexibility" label="Built-in" />
          <FastFact title="240°C" label="Max Temp." />
        </MiniHero>
        <section className="movie-time">
          <h2>An affordable dispensing system.</h2>
          <p className="pull-center">
            The Voltera V-One is a precision dispensing system for viscous inks and pastes. This experimental platform brings your novel
            applications to life.
          </p>
          <div className="promo">
            <YouTube width="800" videoId="Iwt_QdkDTbk" url="/product/dispensing-system.jpg" />
          </div>
        </section>
        <section className="flex-row reverse-wrap">
          <div className="description">
            <h2>Use your own materials.</h2>
            <p>
              The system uses standard 5cc syringes. This means cartridges can be filled with any material you want to dispense with. We
              even offer UV blocking cartridges for sensitive inks!
            </p>
            <p>
              Our robust dispensing system can handle most high viscosity fluids right out of the box.{" "}
              <Link to="/contact/">Contact us</Link> today to find how we can help you!
            </p>
          </div>
          <img src="/product/cartridges-min.png" alt="" />
        </section>
        <AskUs example="Eg - What viscosity range can you dispense?" />
        <section className="flex-row">
          <img src="/product/flexible-electronics.jpg" alt="" />
          <div className="description">
            <h2>A flexible platform.</h2>
            <p>
              Our standard substrate is FR4, but that doesn't mean you cannot print on other ridgid materials like glass, ceramics, or even
              on flexible films like Kapton or PET.
            </p>
            <p>Scientists all over the world are using the Voltera V-One to accelerate their research.</p>
          </div>
        </section>
        <section className="flex-row reverse-wrap">
          <div className="description">
            <h2>Thermally cure your materials.</h2>
            <p>
              The mounting platform doubles as a heated bed. With a 550W heater, the bed can reach a maximum temperature of 240°C (464°F) in
              about a minute.
            </p>
            <p>The temperature profile can also be customized, so you are able to thermally cure all sorts of materials and substrates.</p>
          </div>
          <img src="/product/heated-platform-min.png" alt="" />
        </section>
        <ExperimentFAQ id="faq" title="F.A.Q." all />
        <Gallery
          title="Experiment without restrictions."
          description="The V-One may help lower any barriers to entry you're experiencing."
          gallery={experimentGallery}
        />
        <CallToAction
          title="Want to schedule a call?"
          subtitle="Let's find a time to talk!"
          buttonOne={{
            label: "Book a Call",
            url: "/request/call/",
            internal: true
          }}
          buttonTwo={{
            label: "Get A Quote",
            url: "/request/quote/",
            internal: true
          }}
        />
      </div>
    );
  }
}

// Ideally we can get a mini case study/testimonial of a known research center and how they are using it. (profile pic, area of research)
// maybe use the one from Nina ???

// - Logo's of universities that have used the V-One.
//// Harvard, MIT, Oxford University, Stanford.
