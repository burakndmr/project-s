import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ColorBox = (props) => {
  const { statusArray, status, cardLogo } = props;

  const channelArray = [
    {
      id: 0,
      logo: <FaFacebookF color="#fff" className="text-xl" />,
      name: "facebook",
    },
    {
      id: 1,
      logo: <FaInstagram color="#fff" className="text-xl" />,
      name: "instagrambusiness",
    },
    {
      id: 2,
      logo: <FaTwitter color="#fff" className="text-xl" />,
      name: "twitter",
    },
  ];

  return statusArray.map((stat) =>
    stat.id === status ? (
      <div
        key={stat.id}
        className={`w-10 flex items-center justify-center h-full ${stat.color}`}
      >
        {channelArray.map((channel, i) =>
          channel.name === cardLogo ? <div key={i}>{channel.logo}</div> : null
        )}
      </div>
    ) : null
  );
};

export default ColorBox;
