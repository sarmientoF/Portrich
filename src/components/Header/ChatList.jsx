import React from "react";
import { Link } from "react-router-dom";
import classes from "../../dist/css/common.module.css";
import {
  makeStyles,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Badge,
} from "@material-ui/core";
import { ReactComponent as PortrichIcon } from "../../dist/images/portrichicon.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    height: 50,
    "& .MuiButton-text": {
      color: "rgb(71, 69, 69)",
    },
    "& .MuiList-root": {
      color: "#333",
      background: "#fff",
      //   border: "solid 1px #2e354b",
      borderRadius: "5px",
      marginTop: 10,
    },
    "& .MuiPaper-root ": {
      color: "#333",
      background: "#fff",
      borderRadius: "5px",
      marginTop: 10,
      cursor: "pointer",
      width: "88%",
    },
    "& .MuiListItem-gutters ": {
      padding: "10px 25px",
      borderBottom: "1px solid #F4F4F4",
    },
  },
  a_menu: {
    textDecoration: "none",
  },
}));

const ChatList = () => {
  const styles = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={styles.root}>
      <div>
        <Badge badgeContent={3} color="secondary">
          <span
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            style={{ cursor: "pointer" }}
            class="material-icons"
          >
            chat_bubble_outline
          </span>
        </Badge>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
                marginRight: 70,
              }}
            >
              <Paper>
                <div className={classes.chat_title} onClick={handleClose}>
                  チャット
                </div>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      className={classes.chat_item}
                      onClick={handleClose}
                    >
                      <PortrichIcon className={classes.chat_icon} />
                      <div className={classes.chat_text_area}>
                        <div className={classes.chat_text_area_title}>
                          Portrichサポートチーム
                          <br />
                          <span className={classes.chat_text}>
                            突然のメッセージ失
                          </span>
                        </div>
                      </div>
                      <div className={classes.chat_right_area}>
                        <div className={classes.chat_right_date}>6時間前</div>
                        <div className={classes.chat_right_badge}>2</div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <PortrichIcon className={classes.chat_icon} />
                      <div className={classes.chat_text_area}>
                        <div className={classes.chat_text_area_title}>
                          Portrichサポートチーム
                          <br />
                          <span className={classes.chat_text}>
                            突然のメッセージ失礼いたします。
                            <br />
                            この度bookingナンバー111の貨物について確認したく...
                          </span>
                        </div>
                      </div>
                      <div className={classes.chat_right_area}>
                        <div className={classes.chat_right_date}>6時間前</div>
                        <div className={classes.chat_right_badge}>2</div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <PortrichIcon className={classes.chat_icon} />
                      <div className={classes.chat_text_area}>
                        <div className={classes.chat_text_area_title}>
                          Portrichサポートチーム
                          <br />
                          <span className={classes.chat_text}>
                            突然のメッセージ失
                          </span>
                        </div>
                      </div>
                      <div className={classes.chat_right_area}>
                        <div className={classes.chat_right_date}>6時間前</div>
                        <div className={classes.chat_right_badge}>2</div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <PortrichIcon className={classes.chat_icon} />
                      <div className={classes.chat_text_area}>
                        <div className={classes.chat_text_area_title}>
                          Portrichサポートチーム
                          <br />
                          <span className={classes.chat_text}>
                            突然のメッセージ失
                          </span>
                        </div>
                      </div>
                      <div className={classes.chat_right_area}>
                        <div className={classes.chat_right_date}>6時間前</div>
                        <div className={classes.chat_right_badge}>2</div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <PortrichIcon className={classes.chat_icon} />
                      <div className={classes.chat_text_area}>
                        <div className={classes.chat_text_area_title}>
                          Portrichサポートチーム
                          <br />
                          <span className={classes.chat_text}>
                            突然のメッセージ失
                          </span>
                        </div>
                      </div>
                      <div className={classes.chat_right_area}>
                        <div className={classes.chat_right_date}>6時間前</div>
                        <div className={classes.chat_right_badge}>2</div>
                      </div>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
                <Link className={classes.a_menu} to="/chat">
                  <div className={classes.chat_view_all} onClick={handleClose}>
                    すべてを見る
                  </div>
                </Link>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};
export default ChatList;
