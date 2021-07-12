import { Fragment } from "react";
// step 6
import { connect } from "react-redux";
import { changeName } from "../actions";
import ChildComponent from "./ChildComponent";

const ParentComponent = (props) => {
  const { store, changeName } = props;
  return (
    <Fragment>
      <button onClick={() => changeName("Zain")}>Click me</button>
      <ChildComponent store={store} />
    </Fragment>
  );
};

const mapStateToProps = (store) => {
  return {
    store,
  };
};
const mapDispatchToProps = { changeName };

export default connect(mapStateToProps, mapDispatchToProps)(ParentComponent);
