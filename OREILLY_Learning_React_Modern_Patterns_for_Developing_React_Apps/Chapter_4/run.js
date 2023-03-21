const dish = React.createElement("h1", null, "Baked Salmon");
const dessert = React.createElement("h2", null, "Coconut Cream Pie");

const list = React.createElement(
    "ul",
    null,
    React.createElement("li", null, "2 lb slamon"),
    React.createElement("li", null, "5 sprigs fresh rosemary"),
    React.createElement("li", null, "2 tablespoons olive oil"),
    React.createElement("li", null, "2 small lemons"),
    React.createElement("li", null, "1 teaspoon kosher salt"),
    React.createElement("li", null, "4 cloves of chopped garlic"),
    );

// ReactDom.render(list, document.getElementById("root"));

// console.log(list);

const items = [
    "2 small lemons",
    "2 tablespoons olive oil",
    "1 teaspoon kosher salt",
    "4 cloves of chopped garlic",
    "2 lb salmon",
    "5 sprigs fresh rosemary",
];

const example =  React.createElement(
    "ul",
    { className: "ingredients" },
    items.map((ingredient, i) =>
        React.createElement("li", { key: i}, ingredient)
    )
);

function IngredientsList() {
    return React.createElement(
        "ul",
        { className: "ingredients" },
        React.createElement("li", null, "1 lb slamon"),
        React.createElement("li", null, "2 lb slamon"),
        React.createElement("li", null, "3 lb slamon"),
        React.createElement("li", null, "4 lb slamon"),
        React.createElement("li", null, "5 lb slamon"),
        React.createElement("li", null, "6 lb slamon"),
        React.createElement("li", null, "7 lb slamon")
    );
}

const secretIngredients = [
    "1 cup unsalted butter",
    "1 cup crunchy peanut butter",
    "1 cup brown sugar",
    "1 cup white sugar",
    "2 eggs",
    "2.5 cups all purpose flour",
    "1 teaspoon baking powder",
    "0.5 teaspoon salt"
];

function IngredientsList() {
    return React.createElement(
        "ul",
        { className: "ingredients"},
        items.map((ingredient, i) =>
            React.createElement("li", { key: i}, ingredient)
        )
    );
}

ReactDOM.render(
    React.createElement(IngredientsList, { items: secretIngredients}),
    document.getElementById("root")
);




// ReactDOM.render([dish, dessert, list, example, IngredientsList(), IngredientsList()], document.getElementById("root"))
