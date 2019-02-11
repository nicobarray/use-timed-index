const { useState } = require('react')
const { useInterval } = require('use-interval')

exports.useTimedIndex = (count, interval = 1000, delay = null) => {
  const [index, setIndex] = useState(0)
  const [pause, setPause] = useState(false)
  const [pauseTimeout, setPauseTimeout] = useState(Date.now())

  const inc = () => {
    if (pause) {
      if (Date.now() > pauseTimeout) {
        setPause(false)
      }
    } else {
      if (delay && index === count - 1) {
        setPause(true)
        setPauseTimeout(Date.now() + delay)
        setIndex(-1)
      } else {
        setIndex((index + 1) % count)
      }
    }
  }

  useInterval(inc, interval)

  return index
}

