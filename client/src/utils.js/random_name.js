/* Develop function that will handle random name generations.

The function will return a randomly generated name, that is defined as ```description``` + ```food```, similar to the feature found on Google Docs.

Examples
```js
generateRandomName () // Fried Cake
generateRandomName () // Soggy Drumstick
generateRandomName () // Crispy Noodle
```

Ideally, it should be designed in a way where we can easily change the available keywords
*/

export function generateRandomName() {

    const adjectives = ['Fried', 'Soggy', 'Crispy'];
    const meals = ['Cake', 'Drumstick', 'Noodle'];

    let adj = adjectives[Math.floor(Math.random() * (adjectives.length - 0))];
    let food = meals[Math.floor(Math.random() * (meals.length - 0))];

    return `${adj} ${food}`;

}



