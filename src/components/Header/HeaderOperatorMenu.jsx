import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    height: 50,
    "& .MuiButton-text": {
      color: "rgb(71, 69, 69)",
    },
    "& .MuiList-root": {
      color: "rgb(71, 69, 69)",
      background: "#505865",
      //   border: "solid 1px #2e354b",
      borderRadius: "5px",
      marginTop: 10,
    },
  },
  a: {
    textDecoration: "none",
    color: "#fff",
    fontSize: 13,
    textTransform: "capitalize",
  },
  a_menu: {
    textDecoration: "none",
    color: "#fff",
    fontSize: 13,
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  v: {
    fontSize: 8,
    paddingLeft: 4,
  },
}));

const HeaderOrderMenu = () => {
  const classes = useStyles();
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
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className={classes.a}
        >
          オペレーターメニュー<span className={classes.v}>∨</span>
        </Button>
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
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <Link
                      className={classes.a_menu}
                      to="/operator/quote/request"
                    >
                      <MenuItem onClick={handleClose}>見積依頼一覧</MenuItem>
                    </Link>
                    <Link className={classes.a_menu} to="/dataregistration">
                      <MenuItem onClick={handleClose}>
                        見積・スケジュール登録
                      </MenuItem>
                    </Link>
                    <Link className={classes.a_menu} to="/operator/booking">
                      <MenuItem onClick={handleClose}>
                        Bookings・SI登録
                      </MenuItem>
                    </Link>
                    <Link className={classes.a_menu} to="/operator/quote">
                      <MenuItem onClick={handleClose}>登録済見積一覧</MenuItem>
                    </Link>
                    <Link className={classes.a_menu} to="/operator/schedule">
                      <MenuItem onClick={handleClose}>
                        登録済スケジュール一覧
                      </MenuItem>
                    </Link>
                    <Link className={classes.a_menu} to="/signup">
                      <MenuItem onClick={handleClose}>
                        新規アカウント作成
                      </MenuItem>
                    </Link>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};
export default HeaderOrderMenu;
