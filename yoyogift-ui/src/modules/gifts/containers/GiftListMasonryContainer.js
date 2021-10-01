import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "@material-ui/core/Button";
import history from "../../common/components/history";

import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
  AutoSizer,
  InfiniteLoader,
  WindowScroller
} from "react-virtualized";

import GiftCard from "../../common/components/GiftCard";
import { fetchCardsForMasonry } from "../state/actions";
import { adminEmail } from '../../../config/constants';

const rowLimit = 50;

const CARD = {
  WIDTH: 350,
  HEIGHT: 450
};

class GiftListMasonryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      columnCount: 0
    };
  }

  componentDidMount() {
    this.loadMoreRows();
  }

  _cache = new CellMeasurerCache({
    fixedHeight: true,
    fixedWidth: true,
    defaultHeight: CARD.HEIGHT
  });

  _config = {
    columnWidth: CARD.WIDTH,
    gutterSize: 10,
    overscanByPixels: CARD.HEIGHT
  };
  
  getPositionerConfig = width => {
    const { gutterSize } = this._config;
    const columnCount = this.getColumnCount(width);
    return {
      columnCount,
      columnWidth: CARD.WIDTH,
      spacer: gutterSize
    };
  };

  resetCellPositioner = width => {
    const config = this.getPositionerConfig(width);
    this._cellPositioner.reset(config);
  };

  getColumnCount = width => {
    const { columnWidth, gutterSize } = this._config;
    const columnCount = Math.floor(width / (columnWidth + gutterSize));
    this.setState({ columnCount });
    return columnCount;
  };

  initCellPositioner(width) {
    if (typeof this._cellPositioner === "undefined") {
      const config = this.getPositionerConfig(width);
      this._cellPositioner = createMasonryCellPositioner({
        cellMeasurerCache: this._cache,
        ...config
      });
    }
  }

  onResize = ({ width }) => {
    this.resetCellPositioner(width);
    this._masonry.recomputeCellPositions();
  };

  isRowLoaded = ({ index }) => index < this.props.giftCards.length;

  loadMoreRows = async () => {
    this.props.fetchCardsForMasonry(rowLimit, this.state.page);
    this.setState({ page: this.state.page + 1 });
  };

  cellRenderer = config => {
    const { index, key, parent, style } = config;
    const giftCard = this.props.giftCards[index];
    let content;
    content = giftCard ? (
      <GiftCard giftCard={giftCard} userEmail={this.props.userDetails.email}/>
    ) : null;
    return (
      <CellMeasurer cache={this._cache} index={index} key={key} parent={parent}>
        <div
          style={{
            ...style,
            width: CARD.WIDTH,
            height: CARD.HEIGHT
          }}
        >
          {content}
        </div>
      </CellMeasurer>
    );
  };

  renderMasonry = (registerChild, onRowsRendered, height, scrollTop) => ({
    width
  }) => {
    this.initCellPositioner(width);
    const { giftCards } = this.props;

    return (
      <Masonry
        cellCount={giftCards.length}
        cellMeasurerCache={this._cache}
        cellPositioner={this._cellPositioner}
        cellRenderer={this.cellRenderer}
        autoHeight
        height={height}
        scrollTop={scrollTop}
        overscanByPixels={CARD.HEIGHT}
        ref={ref => (this._masonry = ref)}
        onCellsRendered={onRowsRendered}
        width={width}
      />
    );
  };

  addUpdateForm = () => {
    history.push('/AddUpdateForm')
  }

  render() {
    const { giftCards, userDetails } = this.props;
    return (
      <div>
        {adminEmail.includes(userDetails.email) ? (
            <Button
              style={{ marginTop: "2%", marginBottom: "2%" }}
              variant="contained"
              color="primary"
              onClick={this.addUpdateForm}
            >
              ADD CARD
            </Button>
          ) : null}

        <InfiniteLoader
          isRowLoaded={this.isRowLoaded}
          loadMoreRows={this.loadMoreRows}
          rowCount={giftCards.length + 1}
        >
          {({ registerChild, onRowsRendered }) => (
            <WindowScroller overscanByPixels={CARD.HEIGHT}>
              {({ height, scrollTop }) => (
                <AutoSizer
                  disableHeight
                  onResize={this.onResize}
                  height={height}
                  scrollTop={scrollTop}
                >
                  {this.renderMasonry(
                    registerChild,
                    onRowsRendered,
                    height,
                    scrollTop
                  )}
                </AutoSizer>
              )}
            </WindowScroller>
          )}
        </InfiniteLoader>
      </div>
    );
  }
};

const mapStateToProps = ({ 
  gifts: { giftCards },
  login: { detailsObject }
}) => {
  return {
    giftCards: giftCards,
    userDetails: detailsObject
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchCardsForMasonry
  },
  dispatch
  );
};

GiftListMasonryContainer.propTypes = {
  giftCards: PropTypes.array.isRequired,
  fetchCardsForMasonry: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GiftListMasonryContainer);
