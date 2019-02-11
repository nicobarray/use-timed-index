# useTimedIndex

> Get an index value auto-incremented by 1 every X ms.

## What ?

useTimedIndex is a react hook that outputs a number starting at 0 and
incrementing over time. The two arguments are the interval by which the
index is incremented and a delay that pause the increment after each step.

### Example

```jsx
function App() {
  // Update the index value by 1 about every 1500ms
  const index = useTimedIndex(1500);

  return <div>{index}</div>
}
```

### Install

Has `react` as --peer dependency.

```javascript
yarn add use-timed-index
```

or

```javascript
npm i use-timed-index
```


## Created by

- [Nicolas Barray](https://github.com/nicobarray)

## License

MIT
