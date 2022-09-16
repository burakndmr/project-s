// MOMENT
import moment from "moment/moment";
import "moment/locale/en-gb";

// COMPONENT
import Card from "../Card/Card";

const ContentContainer = (props) => {
  return (
    <div className="mb-[70px] ">
      <h1 className="text-2xl mb-3 text-[#959595]">
        {moment(props.data?.date).locale("en-gb").format("LL")}
      </h1>
      <div className="flex flex-wrap gap-8">
        {props.data.posts.map((post, i) => (
          <Card key={i} data={post} />
        ))}
      </div>
    </div>
  );
};

export default ContentContainer;
