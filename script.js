const recipes = [
    {
        title: "Grilled Cheese Sandwich",
        image: "images/grilled_cheese_sandwitch.jpeg",
        ingredients: "Bread slices, Cheddar Cheese, Mozzarella Cheese, Butter, Salt",
        steps: [
            "Butter one side of each bread slice.",
            "Place one slice, buttered side down, on a hot pan.",
            "Layer with cheddar and mozzarella cheese.",
            "Top with the second slice, buttered side up.",
            "Grill until golden brown on both sides and cheese is melted."
        ]
    },
    {
        title: "Pizza Napoletana",
        image: "images/pizza_napoletana.jpeg",
        ingredients: "Flour, Tomato, Mozzarella di Bufala Campana, Basil, Olive Oil, Oregano, Yeast, Salt",
        steps: [
            "Mix yeast with warm water and let it sit until frothy.",
            "Combine flour and salt, then add the yeast mixture.",
            "Knead the dough until smooth, let it rise for a few hours.",
            "Roll out the dough, spread tomato sauce, sprinkle mozzarella, basil, and drizzle olive oil.",
            "Bake in a preheated oven at the highest temperature until the crust is golden and cheese is bubbly."
        ]
    },
    {
        title: "Caesar Salad",
        image: "images/caesar_salad.jpeg",
        ingredients: "Romaine Lettuce, Croutons, Parmesan Cheese, Caesar Dressing (Anchovies, Garlic, Dijon Mustard, Lemon Juice, Olive Oil, Egg Yolk)",
        steps: [
            "Wash and dry lettuce leaves.",
            "Prepare dressing by blending anchovies, garlic, mustard, lemon juice, and olive oil. Emulsify with egg yolk.",
            "Layer with cheddar and mozzarella cheese.",
            "Toss lettuce with dressing and croutons.",
            "Sprinkle with grated Parmesan cheese and serve immediately."
        ]
    },
    {
        title: "Spaghetti Carbonara",
        image: "images/Spaghetti_Carbonara.jpeg",
        ingredients: "Spaghetti, Pancetta, Eggs, Parmesan Cheese, Black Pepper, Salt",
        steps: [
            "Cook spaghetti according to package instructions.",
            "In a pan, cook pancetta until crispy.",
            "Beat eggs and mix with grated Parmesan cheese.",
            "Drain spaghetti and add to the pan with pancetta.",
            "Remove from heat and quickly mix in egg mixture.",
            "Season with black pepper and serve immediately."
        ]
    },
    {
        title: "Chicken Curry",
        image: "images/Chicken_Curry.jpeg",
        ingredients: "Chicken, Onion, Tomato, Garlic, Ginger, Spices (Cumin, Coriander, Turmeric, Garam Masala), Coconut Milk, Cilantro",
        steps: [
            "Sauté onions, garlic, and ginger until fragrant.",
            "Add chicken pieces and cook until browned.",
            "Add spices and cook for a few minutes.",
            "Stir in tomatoes and coconut milk.",
            "Simmer until chicken is cooked through.",
            "Garnish with cilantro and serve with rice."
        ]
    },
    {
        title: "Vegetable Stir Fry",
        image: "images/Vegetable_Stir_Fry.jpeg",
        ingredients: "Assorted vegetables (bell peppers, broccoli, carrots, snap peas, mushrooms, etc.), Garlic, Ginger, Soy sauce, Sesame oil, Cornstarch, Salt, Pepper, Optional: tofu or chicken for protein",
        steps: [
            "Slice the vegetables and mince the garlic and ginger.",
            "Heat a wok or large skillet over high heat.",
            "Add a tablespoon of oil to the pan.",
            "Stir-fry the garlic and ginger for 30 seconds until fragrant.",
            "Add the vegetables to the pan and stir-fry for 3-5 minutes until they are tender-crisp.",
            "In a small bowl, mix together soy sauce, a teaspoon of cornstarch, and a splash of water to create a sauce.",
            "Pour the sauce over the vegetables and toss to coat evenly.",
            "Cook for another 1-2 minutes until the sauce thickens and coats the vegetables.",
            "Season with salt and pepper to taste.",
            "Serve hot as a side dish or over cooked rice or noodles for a main course. Enjoy!"
        ]
    },
    {
        title: "Chocolate Cake",
        image: "images/Chocolate_Cake.jpeg",
        ingredients: "Flour, Cocoa Powder, Sugar, Eggs, Butter, Baking Powder, Milk, Vanilla Extract",
        steps: [
            "Preheat oven and prepare cake pans.",
            "Mix dry ingredients in one bowl.",
            "Mix wet ingredients in another bowl.",
            "Combine both mixtures and pour into pans.",
            "Bake until a toothpick comes out clean.",
            "Cool and frost as desired."
        ]
    },
    {
        title: "Pancakes",
        image: "images/Pancakes.jpeg",
        ingredients: "Flour, Baking Powder, Sugar, Eggs, Milk, Butter, Maple Syrup",
        steps: [
            "Mix dry ingredients in one bowl.",
            "Whisk wet ingredients in another bowl.",
            "Combine both mixtures and stir until smooth.",
            "Heat a pan and pour batter to form pancakes.",
            "Cook until bubbles form and flip.",
            "Serve with butter and maple syrup."
        ]
    },
    {
        title: "Greek Salad",
        image: "images/Greek_Salad.jpeg",
        ingredients: "Tomato, Cucumber, Red Onion, Feta Cheese, Kalamata Olives, Olive Oil, Lemon Juice, Oregano",
        steps: [
            "Chop vegetables and combine in a bowl.",
            "Add olives and crumbled feta cheese.",
            "Drizzle with olive oil and lemon juice.",
            "Sprinkle with oregano and toss to combine.",
            "Serve chilled."
        ]
    },
    {
        title: "Lasagna",
        image: "images/Lasagna.jpeg",
        ingredients: "Lasagna Noodles, Ground Beef, Tomato Sauce, Ricotta Cheese, Mozzarella Cheese, Parmesan Cheese, Egg, Garlic, Onion, Italian Seasoning",
        steps: [
            "Cook lasagna noodles according to package instructions.",
            "Brown ground beef with onion and garlic.",
            "Add tomato sauce and simmer.",
            "Mix ricotta cheese with egg and Italian seasoning.",
            "Layer noodles, meat sauce, ricotta mixture, and mozzarella in a baking dish.",
            "Repeat layers and top with Parmesan cheese.",
            "Bake until bubbly and golden brown."
        ]
    },
    {
        title: "Stuffed Peppers",
        image: "images/Stuffed_Peppers.jpeg",
        ingredients: "Bell Peppers, Ground Beef, Rice, Onion, Tomato Sauce, Cheese, Spices (Cumin, Paprika, Garlic Powder)",
        steps: [
            "Preheat oven and prepare a baking dish.",
            "Cook rice and set aside.",
            "Brown ground beef with onion and spices.",
            "Mix in cooked rice and tomato sauce.",
            "Cut tops off bell peppers and remove seeds.",
            "Stuff peppers with beef and rice mixture.",
            "Top with cheese and bake until peppers are tender."
        ]
    },
    {
        title: "Mango Smoothie",
        image: "images/Mango_Smoothie.jpeg",
        ingredients: "Mango, Yogurt, Milk, Honey, Ice Cubes",
        steps: [
            "Peel and chop mango.",
            "Blend mango, yogurt, milk, honey, and ice until smooth.",
            "Pour into glasses and serve immediately."
        ]
    },
    {
        title: "French Toast",
        image: "images/French_Toast.jpeg",
        ingredients: "Bread, Eggs, Milk, Cinnamon, Sugar, Vanilla Extract, Butter, Maple Syrup",
        steps: [
            "Whisk eggs, milk, cinnamon, sugar, and vanilla in a bowl.",
            "Dip bread slices in the mixture.",
            "Heat butter in a pan and cook bread until golden brown.",
            "Serve with maple syrup."
        ]
    },
    {
        title: "Quiche Lorraine",
        image: "images/Quiche_Lorraine.jpeg",
        ingredients: "Pie Crust, Bacon, Eggs, Cream, Gruyère Cheese, Onion, Nutmeg, Salt, Pepper",
        steps: [
            "Preheat oven and prepare pie crust.",
            "Cook bacon and sauté onion until soft.",
            "Whisk eggs and cream, season with nutmeg, salt, and pepper.",
            "Layer bacon, onion, and cheese in the pie crust.",
            "Pour egg mixture over the top.",
            "Bake until set and golden brown."
        ]
    },
    {
        title: "Chicken Alfredo",
        image: "images/Chicken_alfredo.jpeg",
        ingredients: "Fettuccine, Chicken Breast, Butter, Heavy Cream, Parmesan Cheese, Garlic, Salt, Pepper, Parsley",
        steps: [
            "Cook fettuccine according to package instructions.",
            "Sauté chicken breast in a pan and set aside.",
            "In the same pan, melt butter and sauté garlic.",
            "Add heavy cream and simmer.",
            "Stir in Parmesan cheese until sauce thickens.",
            "Toss pasta and chicken in the sauce.",
            "Garnish with parsley and serve."
        ]
    },
    {
        title: "Caprese Salad",
        image: "images/Caprese_Salad.jpeg",
        ingredients: "Tomato, Fresh Mozzarella, Basil, Olive Oil, Balsamic Glaze, Salt, Pepper",
        steps: [
            "Slice tomato and mozzarella.",
            "Layer tomato, mozzarella, and basil on a plate.",
            "Drizzle with olive oil and balsamic glaze.",
            "Season with salt and pepper.",
            "Serve immediately."
        ]
    },
    {
        title: "Sushi Rolls",
        image: "images/Sushi_Rolls.jpeg",
        ingredients: "Sushi Rice, Nori, Fish (Salmon, Tuna), Avocado, Cucumber, Soy Sauce, Wasabi, Pickled Ginger",
        steps: [
            "Prepare sushi rice according to package instructions.",
            "Place nori on a bamboo mat, spread rice evenly.",
            "Add fish, avocado, and cucumber in the center.",
            "Roll tightly and slice into pieces.",
            "Serve with soy sauce, wasabi, and pickled ginger."
        ]
    },
    {
        title: "Guacamole",
        image: "images/Guacamole.jpeg",
        ingredients: "Avocados, Onion, Tomato, Cilantro, Lime Juice, Salt",
        steps: [
            "Mash avocados in a bowl.",
            "Mix in chopped onion, tomato, and cilantro.",
            "Add lime juice and salt to taste.",
            "Serve with tortilla chips."
        ]
    },
    {
        title: "Chicken Tikka Masala",
        image: "images/Chicken_Tikka_Masala.jpeg",
        ingredients: "Chicken, Yogurt, Garlic, Ginger, Spices (Cumin, Coriander, Turmeric, Garam Masala), Tomato Sauce, Cream, Cilantro",
        steps: [
            "Marinate chicken in yogurt and spices.",
            "Grill or broil chicken until cooked.",
            "Sauté garlic and ginger, add spices and tomato sauce.",
            "Stir in cream and simmer.",
            "Add chicken pieces and simmer until heated through.",
            "Garnish with cilantro and serve with rice."
        ]
    },
    {
        title: "Tiramisu",
        image: "images/Tiramisu.jpeg",
        ingredients: "Ladyfingers, Mascarpone Cheese, Espresso, Cocoa Powder, Eggs, Sugar, Rum",
        steps: [
            "Dip ladyfingers in espresso and layer in a dish.",
            "Whisk egg yolks and sugar until thick, then add mascarpone.",
            "Fold in beaten egg whites.",
            "Layer mascarpone mixture over ladyfingers.",
            "Repeat layers and top with cocoa powder.",
            "Chill for several hours before serving."
        ]
    },
    {
        title: "Falafel",
        image: "images/Falafel.jpeg",
        ingredients: "Chickpeas, Onion, Garlic, Parsley, Cumin, Coriander, Flour, Salt, Baking Powder, Oil",
        steps: [
            "Blend chickpeas, onion, garlic, and parsley until smooth.",
            "Mix in spices, flour, and baking powder.",
            "Shape into balls and fry until golden brown.",
            "Serve with pita bread and tahini sauce."
        ]
    },
    {
        title: "Ratatouille",
        image: "images/Ratatouille.jpeg",
        ingredients: "Eggplant, Zucchini, Bell Peppers, Tomato, Onion, Garlic, Olive Oil, Basil, Salt, Pepper",
        steps: [
            "Slice vegetables and sauté in olive oil until tender.",
            "Layer vegetables in a baking dish.",
            "Bake until vegetables are soft and flavors are combined.",
            "Garnish with basil and serve."
        ]
    },
    {
        title: "Pad Thai",
        image: "images/Pad_Thai.jpeg",
        ingredients: "Rice Noodles, Shrimp, Eggs, Bean Sprouts, Peanuts, Green Onions, Pad Thai Sauce, Lime, Cilantro",
        steps: [
            "Cook rice noodles according to package instructions.",
            "Sauté shrimp and set aside.",
            "Scramble eggs in the same pan.",
            "Add noodles, bean sprouts, and pad thai sauce.",
            "Toss with shrimp and green onions.",
            "Garnish with peanuts, lime, and cilantro."
        ]
    },
    {
        title: "BBQ Ribs",
        image: "images/BBQ_Ribs.jpeg",
        ingredients: "Pork Ribs, BBQ Sauce, Brown Sugar, Garlic Powder, Onion Powder, Paprika, Salt, Pepper",
        steps: [
            "Preheat oven and prepare a baking sheet.",
            "Rub ribs with spices and brown sugar.",
            "Bake ribs until tender, basting with BBQ sauce.",
            "Finish on the grill for a smoky flavor.",
            "Serve with extra BBQ sauce."
        ]
    },
    {
        title: "Clam Chowder",
        image: "images/Clam_Chowder.jpeg",
        ingredients: "Clams, Potatoes, Onion, Celery, Bacon, Cream, Butter, Flour, Thyme, Salt, Pepper",
        steps: [
            "Cook bacon until crispy, remove and set aside.",
            "Sauté onion and celery in bacon fat.",
            "Add butter and flour to make a roux.",
            "Stir in cream and bring to a simmer.",
            "Add clams and potatoes, cook until potatoes are tender.",
            "Season with thyme, salt, and pepper.",
            "Serve with bacon on top."
        ]
    },
    {
        title: "Moussaka",
        image: "images/Moussaka.jpeg",
        ingredients: "Eggplant, Ground Lamb, Tomato Sauce, Onion, Garlic, Béchamel Sauce, Parmesan Cheese, Cinnamon, Nutmeg, Salt, Pepper",
        steps: [
            "Slice and roast eggplant until tender.",
            "Cook ground lamb with onion, garlic, and tomato sauce.",
            "Season with cinnamon, nutmeg, salt, and pepper.",
            "Layer eggplant and meat sauce in a baking dish.",
            "Top with béchamel sauce and Parmesan cheese.",
            "Bake until golden and bubbly."
        ]
    },
    {
        title: "Gazpacho",
        image: "images/Gazpacho.jpeg",
        ingredients: "Tomato, Cucumber, Bell Pepper, Onion, Garlic, Olive Oil, Red Wine Vinegar, Salt, Pepper, Basil",
        steps: [
            "Blend tomatoes, cucumber, bell pepper, onion, and garlic until smooth.",
            "Add olive oil and red wine vinegar.",
            "Season with salt and pepper.",
            "Chill for a few hours before serving.",
            "Garnish with basil."
        ]
    },
    {
        title: "Stuffed Mushrooms",
        image: "images/Stuffed_Mushrooms.jpeg",
        ingredients: "Mushrooms, Cream Cheese, Garlic, Parmesan Cheese, Parsley, Breadcrumbs, Olive Oil, Salt, Pepper",
        steps: [
            "Preheat oven and prepare a baking sheet.",
            "Remove stems from mushrooms and chop finely.",
            "Mix cream cheese, garlic, Parmesan, parsley, and chopped stems.",
            "Stuff mushrooms with the mixture.",
            "Top with breadcrumbs and drizzle with olive oil.",
            "Bake until golden and bubbly."
        ]
    },
    {
        title: "Chicken Pot Pie",
        image: "images/Chicken_Pot_Pie.jpeg",
        ingredients: "Chicken, Pie Crust, Carrots, Peas, Potatoes, Onion, Butter, Flour, Chicken Broth, Milk, Salt, Pepper",
        steps: [
            "Preheat oven and prepare pie crust.",
            "Cook chicken and vegetables in a pan with butter.",
            "Add flour to make a roux, then stir in broth and milk.",
            "Season with salt and pepper and let simmer.",
            "Pour mixture into pie crust, cover with top crust.",
            "Bake until golden brown and bubbly."
        ]
    },
    {
        title: "Banana Bread",
        image: "images/Banana_Bread.jpeg",
        ingredients: "Bananas, Flour, Sugar, Eggs, Butter, Baking Soda, Salt, Vanilla Extract, Nuts (optional)",
        steps: [
            "Preheat oven and grease a loaf pan.",
            "Mash bananas in a bowl.",
            "Mix in melted butter, sugar, eggs, and vanilla.",
            "Combine flour, baking soda, and salt in a separate bowl.",
            "Fold dry ingredients into wet ingredients.",
            "Add nuts if desired.",
            "Pour batter into loaf pan and bake until a toothpick comes out clean."
        ]
    }
];

const recipesPerPage = 6;
let currentPage = 1;

function renderRecipes() {
    const wrapper = document.getElementById("recipeWrapper");
    wrapper.innerHTML = "";
    const start = (currentPage - 1) * recipesPerPage;
    const end = start + recipesPerPage;
    const currentRecipes = recipes.slice(start, end);

    currentRecipes.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "flip-card";
        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="${recipe.image}" alt="${recipe.title}" style="width: 100%; height: 100%;">
                    <figcaption>${recipe.title}</figcaption>
                </div>
                <div class="flip-card-back">
                    <h1>Ingredients</h1>
                    <p>${recipe.ingredients}</p>
                    <h1>Recipe</h1>
                    <ol>
                        ${recipe.steps.map(step => `<li>${step}</li>`).join("")}
                    </ol>
                </div>
            </div>
        `;
        wrapper.appendChild(card);
    });

    document.getElementById("pageInfo").innerText = `Page ${currentPage} of ${Math.ceil(recipes.length / recipesPerPage)}`;
}

function nextPage() {
    if (currentPage * recipesPerPage < recipes.length) {
        currentPage++;
        renderRecipes();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderRecipes();
    }
}

document.getElementById("nextPage").addEventListener("click", nextPage);
document.getElementById("prevPage").addEventListener("click", prevPage);

renderRecipes();
