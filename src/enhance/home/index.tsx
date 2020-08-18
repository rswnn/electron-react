import React from "react";
import ReduxState from "../../redux/reducers/reduxState";
import Home from "../../renderer/components/home";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { InitintialState } from "../../redux/reducers/init/_index";

interface RoleDispatchState {
  init: InitintialState;
}

interface RoleDispatchProps {}
// interface OptionProps extends RouteComponentProps<ParamsData> {}

export type RolePageProps = RoleDispatchState & RoleDispatchProps;

const mapStateToProps = (state: ReduxState): RoleDispatchState => {
  return {
    init: state.init,
  };
};

const mapDispatchToProps: RoleDispatchProps = {};

const render = (props: RolePageProps) => {
  return (
    <>
      <Home {...props} />
    </>
  );
};

const enhance = compose<React.ComponentClass>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
);
export default enhance(render);
