// MOMENT
import moment from "moment/moment";
import "moment/locale/en-gb";

// COMPONENTS
import ColorBox from "./ColorBox";

const Card = (props) => {
  const { message } = props.data.entry;

  const coloredMessage = message.split(" ").map((word) => {
    if (word.includes("http://") || word.includes("https://")) {
      return (
        <a className="text-[#71BCF0]" href={word}>
          {word}
        </a>
      );
    }
    return word + " ";
  });

  const statusArray = [
    {
      id: 0,
      color: "Need-Approval",
      status: "Need Approval",
    },
    {
      id: 1,
      color: "Scheduled",
      status: "Scheduled",
    },
    {
      id: 2,
      color: "Publishing",
      status: "Publishing",
    },
    {
      id: 3,
      color: "Published",
      status: "Published",
    },
    {
      id: 4,
      color: "Error",
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
      </div>
    </div>
  );
};

export default Card;
