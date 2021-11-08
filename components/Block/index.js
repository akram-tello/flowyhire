import Right from "./Right";
import Left from "./Left";

const ContentBlock = (props) => {
  if (props.type === "rightText") return <Right {...props} />;
  if (props.type === "leftText") return <Left {...props} />;
  return null;
};

export default ContentBlock;