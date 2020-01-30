import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/icon';
import zIndex from '@material-ui/core/styles/zIndex';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
}));

function SideBar(props) {
  const { container } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div onClick={() => { }}>
        <IconButton>
          <Icon style={{ fontSize: 50 }}>account_circle</Icon>
        </IconButton>
      </div>
      <Divider />
      <IconButton>
        <Icon style={{ fontSize: 50 }}>trending_up</Icon>
      </IconButton>
      <Divider />
      <IconButton>
        <Icon style={{ fontSize: 50 }}>attach_money</Icon>
      </IconButton>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            style={{ background: "transparent" }}
            container={container}
            variant="temporary"
            open={mobileOpen}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default SideBar;