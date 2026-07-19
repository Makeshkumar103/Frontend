import { peopleData } from "../Data";
import Card from "./Card";

const Carousel = () => {
  return (
    <div
      className={`font-bodyFonts w-full h-[600px] inline-flex overflow-hidden flex-nowrap lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]`}
    >
      <div className={`flex md:mt-32 animate-infinite-scroll hover-pause`}>
        {peopleData.map((person) => {
          return <Card person={person} key={person.id} />;
        })}
      </div>
    </div>
  );
};

export default Carousel;
