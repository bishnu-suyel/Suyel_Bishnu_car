# Test cases for getInfo

### **getInfo(searchKey)**
Methods returns an array of info object of car `3` belonging to given (searchKey) of car `XXL`.

For example `3` returns 
```json
[
    {"info": {
      "consumptionPer100km": 6,
      "comments": "low emission",
      "powerSource": "pushing"
    }}
    ]
```
If no car with the given searchKey(or wrong searchKey) is found returns a null.
If a parameter searchKey is missing, null will be returned.
If the car with the given searchKey has no info returns a null.

### Test 1: searchKey 1
Test uses the default data.

Create register with default data.
```js
const register = new carRegister(defaultData);
register.getInfo(3),
```
expect
```json
[
    {"info": {
      "consumptionPer100km": 1,
      "comments": "low emission",
      "powerSource": "pushing"
    }}
    ]
```
to be returned

### Test 2: searchKey 2
Test uses the default data.

Create register with default data.
```js
const register = new carRegister(defaultData);
register.getInfo(2),
```
expect
```json
[
    {"info": {
      "consumptionPer100km": 4,
      "comments": "-",
      "powerSource": "hybrid"
    }},
    {}
    ]
```
to be returned

### Test 3: wrong searchKey
Test uses the default data.

Create register with default data.
```js
const register = new carRegister(defaultData);
register.getInfo('x'),
```
return `null`

### Test 4: empty searchKey
Test uses the default data.

Create register with default data.
```js
const register = new carRegister(defaultData);
register.getInfo(''),
```
return `null`

### Test 5: searchKey 5 with no info
Test uses the default data.

Create register with default data.
```js
const register = new carRegister(defaultData);
register.getInfo(''),
```
return `null`


