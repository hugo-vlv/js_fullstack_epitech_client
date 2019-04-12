import React from 'react';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SectionStoryLeft = ({ storyBlock, end, index }) => (
  <React.Fragment>
    <div className="row align-items-center how-it-works">
      <div style={{ left: '3px' }} className="col-2 text-center full">
        <div className="story-circle">{index.toString()}</div>
      </div>
      <div style={{ paddingTop: '20px', paddingBottom: '20px' }} className="col-6 text-left">
        <Header as="h2" style={{ color: 'white' }}>
          {storyBlock.title}
        </Header>
        <p style={{ fontSize: '1.2rem' }}>{storyBlock.full_text}</p>
      </div>
    </div>
    {end ? null : (
      <div className="row timeline">
        <div className="col-2">
          <div className="corner top-right" />
        </div>
        <div className="col-8">
          <hr />
        </div>
        <div className="col-2">
          <div className="corner left-bottom" />
        </div>
      </div>
    )}
  </React.Fragment>
);
SectionStoryLeft.propTypes = {
  storyBlock: PropTypes.shape({
    full_text: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  end: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default SectionStoryLeft;