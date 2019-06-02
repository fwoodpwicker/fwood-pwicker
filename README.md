# Project FP

## How to run the project
To run the dev server, cd into the server folder and run ```npm run start```.

## Linting
We will be using Standard JS linting. Make sure to including the extension on VsCode, or whatever text editor you are using.
Details can be found [here](https://standardjs.com/)


## How to structure Vue Files
Pending

## How to ideally commit
Please write one commit every logical change. For example, if you are tasked with the following change --
```
console.log('My name is Jack')
```
to ...
```
function sayName(name) {
  console.log('My name is', name)
}

sayName('Jack')
```

### Commit each step of the change
Starting with the original code
```
console.log('My name is Jack')
```
I first write the function, which is it's own logical commit.
```
function sayName(name) {
  console.log('My name is', name)
}
console.log('My name is Jack')
```
The commit for this change can be
```
Created function sayName
```
Next, I change the code to remove the console.log and start using the function
```
function sayName(name) {
  console.log('My name is', name)
}
sayName('Jack')
```
The commit for this change can be
```
Replaced old console.log with new sayName function
```

### Bad commits
A bad commit would be
```
commit.
```
or
```
sgdf21312
```
or
```
code refactor
```

Please be specific as this makes it easier to see what is changing.

### If you did multiple changes and forgot to commit each step along the way.
Git has the ability to have multi line commits. Just seperate each line as if they were their own seperate commmit.
https://stackoverflow.com/a/5070502

Example Commit
```
Created function sayName.
Replaced old console.log with new sayName function
```
#### Team
Jack Chen<br>
Shelly Huang<br>
Brittany Cho<br>
