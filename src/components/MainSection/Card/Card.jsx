// MOMENT
import moment from "moment/moment";
import "moment/locale/en-gb";

// COMPONENTS
import ColorBox from "./ColorBox";
import Image from "./Image";

// ICONS
import { BiLike, BiComment, BiTrash, BiBlock, BiCheck } from "react-icons/bi";
import { FiEye, FiShare2 } from "react-icons/fi";
import { CgMoreO } from "react-icons/cg";

const Card = (props) => {
  const { message } = props.data.entry;
  const { status } = props.data;
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
    <div className="w-[370px] h-[480px] bg-white border border-[#E5E6EE] rounded-xl overflow-hidden flex items-start justify-start">
      <ColorBox
        status={props.data.status}
        cardLogo={props.data.account.channel}
        statusArray={statusArray}
      />
      <div className="px-5 py-8 flex-1 flex flex-col items-stretch justify-between h-full">
        <div className="flex items-center justify-between">
          <h3 className="text-[#959595] text-sm ">
            {moment(props.data.created_at).locale("en-gb").format("LL")} -{" "}
            {moment(props.data.created_at).locale("en-gb").format("LT")}
          </h3>
          <div className="flex gap-3 items-center justify-end">
            {status === 0 && (
              <>
                <BiCheck className="text-[#959595] text-xl cursor-pointer" />
                <CgMoreO className="text-[#959595] text-xl cursor-pointer" />
              </>
            )}
            {status === 1 && (
              <>
                <BiBlock className="text-[#959595] text-xl cursor-pointer" />
                <BiTrash className="text-[#959595] text-xl cursor-pointer" />
                <CgMoreO className="text-[#959595] text-xl cursor-pointer" />
              </>
            )}
            {status === 3 && (
              <>
                <BiTrash className="text-[#959595] text-xl cursor-pointer" />
                <CgMoreO className="text-[#959595] text-xl cursor-pointer" />
              </>
            )}
          </div>
        </div>
        <p className="font-bold text-[#959595] text-sm">{coloredMessage}</p>
        <Image image={props.data.entry.image} />
        <div className="flex items-center justify-start gap-3">
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <BiLike className="text-[#959595] text-sm" />
            <p className="text-[#959595] text-sm">
              {status === 3 ? "124" : "0"}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <BiComment className="text-[#959595] text-sm" />
            <p className="text-[#959595] text-sm">
              {status === 3 ? "63" : "0"}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <FiEye className="text-[#959595] text-sm" />
            <p className="text-[#959595] text-sm">{status === 3 ? "4" : "0"}</p>
          </div>
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <FiShare2 className="text-[#959595] text-sm" />
            <p className="text-[#959595] text-sm">
              {status === 3 ? "1.426" : "0"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
