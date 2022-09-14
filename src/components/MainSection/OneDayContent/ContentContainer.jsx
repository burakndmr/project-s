// MOMENT
import moment from "moment/moment";
import "moment/locale/tr";
import "moment/locale/en-gb";

// COMPONENT
import Card from "../Card/Card";

const ContentContainer = (props) => {
  console.log("PROPSCONTAİNER", props.data.posts);

  return (
    <div>
      <h1>{moment(props.data?.date).locale("en-gb").format("LL")}</h1>
      {props.data.posts.map((post, i) => (
        <Card key={i} data={post} />
      ))}
    </div>
  );
};

export default ContentContainer;
