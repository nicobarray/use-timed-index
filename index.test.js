const React = require('react')
const { render } = require('react-testing-library')
const { useTimedIndex } = require('./index')

test('test simple case with 1s interval', (done) => {
  const Component = () => {
    const index = useTimedIndex(1000);
    return index
  }

  const { container } = render(React.createElement(Component))

  expect(container.textContent).toBe('0')

  new Promise(resolve => setTimeout(resolve, 2500)).then(_ => {
    expect(container.textContent).toBe('2')
    done()
  })
})

test('test simple case with .5s interval and .25s of delay', () => {
  const ComponentWithDelay = () => {
    const index = useTimedIndex(500, 250);
    return index
  }

  const { container } = render(React.createElement(ComponentWithDelay))

  expect(container.textContent).toBe('0')

  new Promise(resolve => setTimeout(resolve, 2000)).then(_ => {
    expect(container.textContent).toBe('3')
    done()
  })
})
