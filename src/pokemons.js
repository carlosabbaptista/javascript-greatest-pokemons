// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons) {
    // Use the filter method to create a new array containing only Fire-type Pokemons
    return pokemons.filter((pokemon) => pokemon.type.includes('Fire'));
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons) {
    if (!pokemons.length) {
        return "No Pokémon found"; // Return a message if the array is empty
    }

    // Find the Pokémon with the minimum height
    const shortest = pokemons.reduce((min, pokemon) => {
        const currentHeight = parseFloat(pokemon.height);
        if (isNaN(currentHeight)) return min; // Skip invalid height values
        return currentHeight < min.height ? { name: pokemon.name, height: currentHeight } : min;
    }, { name: null, height: Infinity });

    return shortest.name;
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemons) {
    if (!pokemons.length) {
        return "No Pokémon found"; // Return a message if the array is empty
    }

    // Calculate the sum of candy counts and count how many Pokémon have candy counts
    const { sum, count } = pokemons.reduce(
        (accumulator, pokemon) => {
        const candyCount = pokemon.candy_count;
        if (candyCount !== undefined && !isNaN(candyCount)) {
            accumulator.sum += candyCount;
            accumulator.count += 1;
        }
        return accumulator;
        },
        { sum: 0, count: 0 }
    );

    if (count === 0) {
        return "No candy count available"; // Return a message if no candy count is available
    }

    // Calculate the average and round to 2 decimal places
    const average = sum / count;
    return average.toFixed(2);
}


// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(pokemons) {
    const groundPokemons = pokemons.filter((pokemon) => {
        return pokemon.type.includes("Ground");
    });

    const groundPokeImages = groundPokemons.slice(0, 10).map((pokemon) => {
        return pokemon.img;
    });

    return groundPokeImages;
}

// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemons) {
    // Find Pikachu's weight
    const pikachu = pokemons.find((pokemon) => pokemon.name === "Pikachu");
    const pikachuWeight = parseFloat(pikachu.weight);

    // Filter Pokémons heavier than Pikachu
    const heavyPokemons = pokemons.filter((pokemon) => {
        const pokemonWeight = parseFloat(pokemon.weight);
        return !isNaN(pokemonWeight) && pokemonWeight > pikachuWeight;
    });

    // Extract their names
    const heavyPokemonNames = heavyPokemons.map((pokemon) => pokemon.name);

    return heavyPokemonNames;
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemons) {
        // Sort the pokemons alphabetically by name    
        const sortedPokemons = pokemons.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            return nameA.localeCompare(nameB);
        });
    
        // Extract the first 20 names (or all if there are less than 20)    
        const first20Names = sortedPokemons.slice(0, 20).map((pokemon) => pokemon.name);
    
        return first20Names;
}


// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
function strongPokemons(pokemons) {
    // Filter pokemons with just one weakness
    const strongPokemons = pokemons.filter((pokemon) => pokemon.weaknesses.length === 1);

    // Extract the first 15 names (or all if there are fewer than 15)
    const first15Names = strongPokemons.slice(0, 15).map((pokemon) => pokemon.name);

    return first15Names;
}