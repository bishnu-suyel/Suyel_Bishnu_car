# Test cases for getCarColors

### **get_car_colors(searchKey)**
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
register.get_car_colors('1');
```
expect
```json
[
    "white", "yellow", "blue"
]
```
to be returned

### Test 2: searchKey 6 (Non-existing car)
Test uses the default data.

Create register with default data.
```js
const register = new carRegister(defaultData);
register.get_car_colors('6');
```
expect
```json
[]
```

### Test 3: empty searchKey
Test uses the default data.

Create register with default data.
```js
const register = new carRegister(defaultData);
register.get_car_colors('');
```
expect
```json
[]
```