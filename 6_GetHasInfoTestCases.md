# Test cases for getHasInfo

### **getHasInfo(searchKey)**
This method checks if the car has `info` or not with the given searchKey.If info with the given searchKey is found
return `'true'`.
For example `1` returns
`'true`

If no info with the given searchKey is found
return `'false`.
For example `5` returns
`'false'`

If If parameter searchKey is missing `'false'` is returned
For example ` ` returns
`'false'`

### Test 1: searchKey 1
Test uses the default data.

Create register with default data.
```js
const register = new carRegister(defaultData);
register.getHasInfo(1);
```
return `'true'`;

### Test 2: searchKey 5
Test uses the default data.

Create register with default data.
```js
const register = new carRegister(defaultData);
register.getHasInfo(5);
```
return `'false'`;

### Test 3: missing parameter
Test uses the default data.

Create register with default data.
```js
const register = new carRegister(defaultData);
register.getHasInfo();
```
return `'false'`;

### Test 4: searchKey should be a number
Test uses the default data.

Create register with default data.
```js
const register = new carRegister(defaultData);
register.getHasInfo("");
```
return `'false'`;