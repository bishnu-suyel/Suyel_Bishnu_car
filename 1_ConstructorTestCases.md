# Test cases for the constructor

## **constructor(data)**

The data from cars.json array is passed as a parameter `data`. If the parameter is missing, throws an exception `'data storage missing'`.

### Test 1: missing parameter throw an exception

```js
new carRegister();
```

expect: This will throw an exception `'data storage missing'``