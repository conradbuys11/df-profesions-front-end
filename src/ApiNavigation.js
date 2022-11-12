const ApiNavigation = (db) => {
  // the output from our api is going to be an object, containing a series of arrays of objects for each table/model
  // so for example, we're gonna have an array called items, which is full of item objects
  // we're gonna be using a lot of array methods! here's some documentation for all of them
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  // almost all our return types are gonna be either a) arrays (if we're getting multiple) or b) objects (if we're getting one)

  // ITEM METHODS
  const getItem = () => {
    const byId = (id) => {
      // simple: find item in array whose id property matches the one we passed in
      return db.items.find((item) => item.id === id);
    };
  };

  const getItems = () => {
    const byFinishingReagentType = (type) => {
      return db.items.filter((item) => item.finishingReagentType === type);
    };
  };

  // RECIPE METHODS
  const getRecipe = () => {
    const byId = (id) => {
      return db.recipes.find((recipe) => recipe.id === id);
    };
  };

  const getRecipes = () => {
    const byProfession = (id) => {
      return db.recipes.filter((recipe) => recipe.professionId === id);
    };

    const byItem = (id) => {
      return db.recipes.filter((recipe) => recipe.itemId === id);
    };
  };

  // PROFESSION METHODS
  const getProfession = () => {
    const byId = (id) => {
      return db.professions.find((profession) => profession.id === id);
    };

    const byName = (name) => {
      return db.professions.find((profession) => profession.name === name);
    };
  };

  const getProfessions = () => {
    return db.professions;
  };

  // MATERIAL METHODS
  const getMaterial = () => {
    const byId = (id) => {
      return db.materials.find((material) => material.id === id);
    };
  };

  const getMaterials = () => {
    const byItemId = (id) => {
      return db.materials.filter((material) => material.itemId === id);
    };

    const byRecipeId = (id) => {
      return db.materials.filter((material) => material.recipeId === id);
    };
  };

  // FINISHING REAGENT METHODS
  const getFinishingReagent = () => {
    const byId = (id) => {
      return db.finishingReagents.find((fReagent) => fReagent.id === id);
    };
  };

  const getFinishingReagents = () => {
    const byRecipe = (id) => {
      return db.finishingReagents.filter(
        (fReagent) => fReagent.recipeId === id
      );
    };
  };
};

export { ApiNavigation };
