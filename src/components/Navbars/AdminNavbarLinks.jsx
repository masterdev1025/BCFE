import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// import { Manager, Target, Popper } from "react-popper";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import Popper from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";

// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";

// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import adminNavbarLinksStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.jsx";

class HeaderLinks extends React.Component {
  state = {
    openNotification: false,
    openProfile: false
  };
  handleClickNotification = () => {
    this.setState({ openNotification: !this.state.openNotification });
  };
  handleCloseNotification = () => {
    this.setState({ openNotification: false });
  };
  handleClickProfile = () => {
    this.setState({ openProfile: !this.state.openProfile });
  };
  handleCloseProfile = () => {
    this.setState({ openProfile: false });
  };
  render() {
    const { classes, rtlActive } = this.props;
    const { openNotification, openProfile } = this.state;
    const searchButton =
      classes.top +
      " " +
      classes.searchButton +
      " " +
      classNames({
        [classes.searchRTL]: rtlActive
      });
    const dropdownItem = classNames(
      classes.dropdownItem,
      classes.primaryHover,
      { [classes.dropdownItemRTL]: rtlActive }
    );
    const wrapper = classNames({
      [classes.wrapperRTL]: rtlActive
    });
    const managerClasses = classNames({
      [classes.managerClasses]: true
    });
    return (
      <div className={wrapper}>
        <CustomInput
          rtlActive={rtlActive}
          formControlProps={{
            className: classes.top + " " + classes.search
          }}
          inputProps={{
            placeholder: rtlActive ? "??????" : "Search",
            inputProps: {
              "aria-label": rtlActive ? "??????" : "Search",
              className: classes.searchInput
            }
          }}
        />
        <Button
          color="white"
          aria-label="edit"
          justIcon
          round
          className={searchButton}
        >
          <Search
            className={classes.headerLinksSvg + " " + classes.searchIcon}
          />
        </Button>
        <Button
          color="transparent"
          simple
          aria-label="Dashboard"
          justIcon
          className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
          muiClasses={{
            label: rtlActive ? classes.labelRTL : ""
          }}
        >
          <Dashboard
            className={
              classes.headerLinksSvg +
              " " +
              (rtlActive
                ? classes.links + " " + classes.linksRTL
                : classes.links)
            }
          />
          <Hidden mdUp implementation="css">
            <span className={classes.linkText}>
              {rtlActive ? "???????? ??????????????" : "Dashboard"}
            </span>
          </Hidden>
        </Button>
        <div className={managerClasses}>
          <Button
            color="transparent"
            justIcon
            aria-label="Notifications"
            aria-owns={openNotification ? "notification-menu-list" : null}
            aria-haspopup="true"
            onClick={this.handleClickNotification}
            className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
            muiClasses={{
              label: rtlActive ? classes.labelRTL : ""
            }}
            buttonRef={node => {
              this.anchorNotification = node;
            }}
          >
            <Notifications
              className={
                classes.headerLinksSvg +
                " " +
                (rtlActive
                  ? classes.links + " " + classes.linksRTL
                  : classes.links)
              }
            />
            <span className={classes.notifications}>5</span>
            <Hidden mdUp implementation="css">
              <span
                onClick={this.handleClickNotification}
                className={classes.linkText}
              >
                {rtlActive ? "??????????" : "Notification"}
              </span>
            </Hidden>
          </Button>
          <Popper
            open={openNotification}
            anchorEl={this.anchorNotification}
            transition
            disablePortal
            placement="bottom"
            className={classNames({
              [classes.popperClose]: !openNotification,
              [classes.popperResponsive]: true,
              [classes.popperNav]: true
            })}
          >
            {({ TransitionProps }) => (
              <Grow
                {...TransitionProps}
                id="notification-menu-list"
                style={{ transformOrigin: "0 0 0" }}
              >
                <Paper className={classes.dropdown}>
                  <ClickAwayListener onClickAway={this.handleCloseNotification}>
                    <MenuList role="menu">
                      <MenuItem
                        onClick={this.handleCloseNotification}
                        className={dropdownItem}
                      >
                        {rtlActive
                          ? "?????????? ?????????? ?????????????? ?????? ????, ??????"
                          : "Mike John responded to your email"}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleCloseNotification}
                        className={dropdownItem}
                      >
                        {rtlActive
                          ? "???????? ?????????? ?????????????? ???? ??????"
                          : "You have 5 new tasks"}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleCloseNotification}
                        className={dropdownItem}
                      >
                        {rtlActive
                          ? "???????? ?????????????? ?? ??????. ???? ????????"
                          : "You're now friend with Andrew"}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleCloseNotification}
                        className={dropdownItem}
                      >
                        {rtlActive ? "???? ??????????" : "Another Notification"}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleCloseNotification}
                        className={dropdownItem}
                      >
                        {rtlActive ? "???? ????????????" : "Another One"}
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>

        <div className={managerClasses}>
          <Button
            color="transparent"
            aria-label="Person"
            justIcon
            aria-owns={openNotification ? "profile-menu-list" : null}
            aria-haspopup="true"
            onClick={this.handleClickProfile}
            className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
            muiClasses={{
              label: rtlActive ? classes.labelRTL : ""
            }}
            buttonRef={node => {
              this.anchorProfile = node;
            }}
          >
            <Person
              className={
                classes.headerLinksSvg +
                " " +
                (rtlActive
                  ? classes.links + " " + classes.linksRTL
                  : classes.links)
              }
            />
            <Hidden mdUp implementation="css">
              <span
                onClick={this.handleClickProfile}
                className={classes.linkText}
              >
                {rtlActive ? "?????????? ????????????" : "Profile"}
              </span>
            </Hidden>
          </Button>
          <Popper
            open={openProfile}
            anchorEl={this.anchorProfile}
            transition
            disablePortal
            placement="bottom"
            className={classNames({
              [classes.popperClose]: !openProfile,
              [classes.popperResponsive]: true,
              [classes.popperNav]: true
            })}
          >
            {({ TransitionProps }) => (
              <Grow
                {...TransitionProps}
                id="profile-menu-list"
                style={{ transformOrigin: "0 0 0" }}
              >
                <Paper className={classes.dropdown}>
                  <ClickAwayListener onClickAway={this.handleCloseProfile}>
                    <MenuList role="menu">
                      <MenuItem
                        onClick={this.handleCloseProfile}
                        className={dropdownItem}
                      >
                        {rtlActive ? "?????????? ????????????" : "Profile"}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleCloseProfile}
                        className={dropdownItem}
                      >
                        {rtlActive ? "??????????????????" : "Settings"}
                      </MenuItem>
                      <Divider light />
                      <MenuItem
                        onClick={this.handleCloseProfile}
                        className={dropdownItem}
                      >
                        {rtlActive ? "????????????" : "Log out"}
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

HeaderLinks.propTypes = {
  classes: PropTypes.object.isRequired,
  rtlActive: PropTypes.bool
};

export default withStyles(adminNavbarLinksStyle)(HeaderLinks);
