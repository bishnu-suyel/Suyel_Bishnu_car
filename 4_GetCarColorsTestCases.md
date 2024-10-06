# Test cases for getCarColors

### **getCarColors(searchKey)**
This methods returns an array of car colors with the given searchKey. 

For example `1` returns
```json
 [
    "white", "yellow", "blue"
]

```
If no car with the given searchKey is found return an empty array.
If a parameter searchKey is missing, returns an empty array.

### Test 1: searchKey 1
Test uses the default data.

Create register with default data.
```js
const register = new carRegister(defaultData);
register.getCarColors(1);
```
expect
```json
[
    "white", "yellow", "blue"
]
```
to be returned

### Test 2: searchKey 5
Test uses the default data.

Create register with default data.
```js
const register = new carRegister(defaultData);
register.getCarColors(5);
```
expect
```json
[
    "red", "black", "orange"
]
```
to be returned


### Test 3: searchKey 6 (Non-existing car)
Test uses the default data.

Create register with default data.
```js
const register = new carRegister(defaultData);
register.getCarColors(6);
```
expect
```json
[]
```

### Test 4: empty searchKey
Test uses the default data.

Create register with default data.
```js
const register = new carRegister(defaultData);
register.getCarColors('');
```
expect
```json
[]
```