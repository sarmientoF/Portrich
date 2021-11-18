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
  title: {
    textDecoration: "none",
    color: "rgb(71, 69, 69)",
    fontSize: 13,
    textTransform: "capitalize",
    marginRight: theme.spacing(2),
  },
  title_menu: {
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

const HeaderMenu = () => {
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
          className={classes.title}
        >
          見積依頼<span className={classes.v}>∨</span>
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
                      className={classes.title_menu}
                      to="/request/container"
                    >
                      <MenuItem onClick={handleClose}>コンテナ（FCL）</MenuItem>
                    </Link>

                    <Link
                      className={classes.title_menu}
                      to="/request/boxpallete"
                    >
                      <MenuItem onClick={handleClose}>
                        箱/パレット（LCL）
                      </MenuItem>
                    </Link>

                    {/* <Link className={classes.title_menu} to="/request/air">
                      <MenuItem onClick={handleClose}>航空配送</MenuItem>
                    </Link> */}

                    {/* <Link
                      className={classes.title_menu}
                      to="/request/boxpaletteair"
                    >
                      <MenuItem onClick={handleClose}>
                        箱/パレット+航空配送
                      </MenuItem>
                    </Link> */}

                    {/* <Link className={classes.title_menu} to="/request/truck">
                      <MenuItem onClick={handleClose}>トラック</MenuItem>
                    </Link> */}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

        <Button>
          <Link className={classes.title} to="/quotes">
            見積一覧
          </Link>
        </Button>
        <Button>
          <Link className={classes.title} to="/booking">
            Bookings
          </Link>
        </Button>
        <Button>
          <Link className={classes.title} to="/shipments">
            貨物状況
          </Link>
        </Button>
        <Button>
          <Link className={classes.title} to="/billing">
            請求書
          </Link>
        </Button>
        {/* <Button>
          <Link className={classes.title} to="/history">
            履歴
          </Link>
        </Button> */}
      </div>
    </div>
  );
};
export default HeaderMenu;
