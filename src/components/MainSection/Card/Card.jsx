// MOMENT
import moment from "moment/moment";
import "moment/locale/en-gb";

// COMPONENTS
import ColorBox from "./ColorBox";
import Image from "./Image";

const Card = (props) => {
  const { message } = props.data.entry;

  const coloredMessage = message.split(" ").map((word, i) => {
    if (word.includes("http://") || word.includes("https://")) {
      return (
        <a key={i} className="text-[#71BCF0]" href={word}>
          {word}
        </a>
      );
    }
    return word + " ";
  });

  const statusArray = [
    {
      id: 0,
      color: "bg-[#F7BF38]",
      status: "Need Approval",
    },
    {
      id: 1,
      color: "bg-[#3AC183]",
      status: "Scheduled",
    },
    {
      id: 2,
      color: "bg-[Publishing]",
      status: "Publishing",
    },
    {
      id: 3,
      color: "bg-[#ACACAC]",
      status: "Published",
    },
    {
      id: 4,
      color: "bg-[#FB6450]",
      status: "Error",
    },
  ];

  return (
    <div className="w-[370px] h-[446px] bg-white border border-[#E5E6EE] rounded-xl overflow-hidden flex items-start justify-start">
      <ColorBox
        status={props.data.status}
        cardLogo={props.data.account.channel}
        statusArray={statusArray}
      />
      <div className="px-5 py-8 flex-1 h-full">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[#959595] text-sm ">
            {moment(props.data.created_at).locale("en-gb").format("LL")} -{" "}
            {moment(props.data.created_at).locale("en-gb").format("LT")}
          </h3>
          <div>logos</div>
        </div>
        <p className="font-bold text-[#959595] text-sm">{coloredMessage}</p>
        <Image image={props.data.entry.image} />
      </div>
    </div>
  );
};

export default Card;
