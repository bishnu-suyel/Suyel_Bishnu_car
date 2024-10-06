# Test cases for getPrice

### **getPrice(number)**
This methods returns the price of a car with the given number.

For example `1` returns
```json
 
    300

```
If no car with the given number is found throws an exeption `'nothing found with given number'`
If a parameter number is missing, throws an exeption `'missing parameter'`

### Test 1: number 1
Test uses the default data.

Create register with default data.
```js
const register = new carRegister(defaultData);
register.getPrice(1);
```
expect
```json

    300

```
to be returned

### Test 2: number 6 (Non-existing car)
Test uses the default data.

Create register with default data.
```js
const register = new carRegister(defaultData);
register.getPrice(6);
```
throws an exeption `'nothing found with given number'`

### Test 3: missing parameter
Test uses the default data.

Create register with default data.
```js
const register = new carRegister(defaultData);
register.getPrice();
```
throws an exeption `'missing parameter'`