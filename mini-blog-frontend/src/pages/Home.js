import React from "react";

const Home = () => {
  return (
    <div className="mb-20">
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900">
        Welcome to my Navratri Blog!
      </h1>
      <br />

      <p className="mx-auto leading-relaxed text-base mb-4">
        <img src={"/images/Navratri.jpg"} alt='navratri-img'/>
        <br/>
        <b>Navratri</b> is an annual and one of the most revered Hindu festivals
        observed in the honour of Mother <b>Goddess Durga</b>. It spans over
        nine nights (and ten days), first in the month of Chaitra (March/April
        of the Gregorian calendar) and again in the month of Sharada. It is
        observed for different reasons and celebrated differently in various
        parts of the Hindu Indian cultural sphere. Theoretically, there are four
        seasonal Navratri. However, in practice, it is the post-monsoon autumn
        festival called Sharada Navaratri. The festival is celebrated in the
        bright half of the Hindu calendar month Ashvin, which typically falls in
        the Gregorian months of September and October. It takes place at the
        same time as the Nine Emperor Gods Festival.
      </p>
      <i>
        Devi or the Divine Mother is the energy which has given birth to the
        entire universe including the celestial stars far away and the subtle
        mind and its emotions. Called ‘shakti’ which means energy, the Divine
        Mother is also responsible for running this creation. Navratri is the
        time when this energy can be tapped. One of the ways to do so is to
        worship all the names and forms of the Divine Mother. “The divinity is
        everywhere, but it is dormant. Pooja (worship) is the process to awaken
        it.”
      </i>
    </div>
  );
};

export default Home;
