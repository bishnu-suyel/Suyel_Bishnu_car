# Test cases for getTotalPriceOfCarsByModel

### **getTotalPriceOfCarsByModel(searchValue)**
Methods returns an array of total price of all cars `300` belonging to given (searchValue) model of car `VIP`.

For example `silver` returns 
```json
[159] //Adding the prices of all the models of silver i.e 36+123.
```

If no car with the given searchValue is  found throws an exeption `'nothing found with given searchValue'`.
If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown.


### Test 1: VIP
Test uses the default data.

Create register with default data.
```js
const register = new carRegister(defaultData);
register.getTotalPriceOfCarsByModel('VIP');
```
expect
```json
[300]
```
 to be returned

### Test 2: Silver
Test uses the default data

Create register with default data.
```js
const register = new carRegister(defaultData);
register.getTotalPriceOfCarsByModel('silver');
```
 expect
 ```json
 [159] //Adding the prices of all the models of silver i.e 36+123.
 ```
### Test 3: nothing found with given searchValue
Test uses the default data

Create register with default data.
```js
const register = new carRegister(defaultData);
register.getTotalPriceOfCarsByModel('x');
```
expect
```json
[]
```
### Test 4: missing parameter
Test uses the default data

Create register with default data.
```js
const register = new carRegister(defaultData);
register.getTotalPriceOfCarsByModel('');
```
expect
```json
[]
```