jest.dontMock('../stateless');

describe('Stateless Components', function() {
  var React = require('react');
  var findDOMNode = require('react-dom').findDOMNode;
  var TestUtils = require('react/lib/ReactTestUtils');

  var StatelessComponent = require('../stateless');

  it('renders and responds to clicks', function() {
    var spy = jasmine.createSpy();
    var component = TestUtils.renderIntoDocument(
      <StatelessComponent text="Hello" onClick={spy} />
    );

    // fails. findDOMNode(component) is null
    expect(findDOMNode(component).textContent).toBe('Hello');

    // fails. findDOMNode(component) is null
    TestUtils.Simulate.click(findDOMNode(component));
    expect(spy.callCount).toBe(1);
  });
});

