import React from "react";
import { connect } from "react-redux";

function User({ user }) {
  return <div>Current user:{user.name}</div>;
}

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(User);
