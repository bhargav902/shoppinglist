import React, { Component, Fragment } from 'react';
import { logout } from '../../actions/authActions';
import { connect } from 'react-redux';
import { NavLink } from 'reactstrap';
import PropsTypes from 'prop-types';
export class Logout extends Component {
    static propTypes = {
        logout: PropsTypes.func.isRequired
    }

    render() {
        return (
            <Fragment>
                <NavLink conClick={this.props.logout} href="#">
                    Logout
          </NavLink>
            </Fragment>
        );
    }
}


export default connect(null,
    { logout })(Logout);
