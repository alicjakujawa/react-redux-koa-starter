import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import App from '../app/containers/App';
import chai from 'chai';

const expect = chai.expect;

describe('Testing App container', function() {
  it('should containt equal text', function() {
    const containerEl = ReactTestUtils.renderIntoDocument(
      <App />
    );

    const contentDiv = ReactTestUtils.findRenderedDOMComponentWithTag(containerEl, 'p');
    expect(contentDiv.textContent).to.equal('Waiting for super cool content!');
  });
});
