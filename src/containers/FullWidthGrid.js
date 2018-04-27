import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
// import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
// import Typography from 'material-ui/Typography';
// import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import IntegrationAutosuggest from '../components/IntegrationAutosuggest';
import LeafletMapContainer from '../components/LeafletMapContainer';
import { updateQuery, updateDatasets, fetchSuggestions, clearSuggestions } from '../actions';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 0,
  },
  flex: {
    flex: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

let FullWidthGrid = (props) => {
  const { classes } = props;
  // console.log("FullWidthGrid.js", props);

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <AppBar position="static" color="default">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Grid item xs={3}>
                <IntegrationAutosuggest search={props.search} updateQuery={props.updateQuery}
                  fetchSuggestions={props.fetchSuggestions} clearSuggestions={props.clearSuggestions} />
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12}>
          <LeafletMapContainer />
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  search: state.search,
});

const mapDispatchToProps = ({
  updateQuery,
  updateDatasets,
  fetchSuggestions,
  clearSuggestions,
});

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  search: PropTypes.object.isRequired,
  updateQuery: PropTypes.func.isRequired,
  fetchSuggestions: PropTypes.func.isRequired,
  clearSuggestions: PropTypes.func.isRequired,
};

FullWidthGrid = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(FullWidthGrid));

export default FullWidthGrid;