const Card = ({ person }) => {
  return (
    <div
      className={`{text-white flex flex-col gap-4 items-center bg-cardBg w-[20rem] p-6 rounded-xl shadow-md mx-3 hover:border h-[240px] lg:[&:nth-child(odd)]:animate-sliding-up lg:[&:nth-child(even)]:animate-sliding-down hover-pause`}
    >
      <img
        src={person.img}
        alt={person.name}
        className="w-9 h-9 rounded-full"
      />
      <p className="text-center text-[13px] text-cardTitleColor">
        {person.name}
      </p>
      <p className="text-center text-[13px] text-gray-100">
        {person.description}
      </p>
    </div>
  );
};

export default Card;
