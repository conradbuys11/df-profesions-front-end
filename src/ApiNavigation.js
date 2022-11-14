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

    const byName = (name) => {
      return db.items.find((item) => item.name === name);
    };

    return { byId, byName };
  };

  const getItems = () => {
    const byFinishingReagentType = (type) => {
      return db.items.filter((item) =>
        item.finishingReagentType.includes(type)
      );
    };

    const profToolAndAccessories = () => {
      const byProfessionId = (id) => {
        const profession = getProfession.byId(id);
        const regex = new RegExp(
          `${profession.name} Accessory|${profession.name} Tool`,
          "i"
        );
        return db.items.filter((item) => item.armorWeaponType.match(regex));
      };

      const byProfessionName = (name) => {
        const regex = new RegExp(`${name} Accessory|${name} Tool`, "i");
        return db.items.filter((item) => item.armorWeaponType.match(regex));
      };

      const all = () => {
        return db.items.filter((item) =>
          item.armorWeaponType.match(/Accessory|Tool/i)
        );
      };

      return { byProfessionId, byProfessionName, all };
    };

    const all = () => {
      return db.items;
    };

    return { byFinishingReagentType, profToolAndAccessories, all };
  };

  // RECIPE METHODS
  const getRecipe = () => {
    const byId = (id) => {
      return db.recipes.find((recipe) => recipe.id === id);
    };

    return { byId };
  };

  const getRecipes = () => {
    const byProfession = (id) => {
      return db.recipes.filter((recipe) => recipe.professionId === id);
    };

    const byItem = (id) => {
      return db.recipes.filter((recipe) => recipe.itemId === id);
    };

    const all = () => {
      return db.recipes;
    };

    return { byProfession, byItem, all };
  };

  // PROFESSION METHODS
  const getProfession = () => {
    const byId = (id) => {
      return db.professions.find((profession) => profession.id === id);
    };

    const byName = (name) => {
      return db.professions.find(
        (profession) => profession.name.toLowerCase() === name.toLowerCase()
      );
    };

    return { byId, byName };
  };

  const getProfessions = () => {
    const all = () => {
      return db.professions;
    };

    return { all };
  };

  // MATERIAL METHODS
  const getMaterial = () => {
    const byId = (id) => {
      return db.materials.find((material) => material.id === id);
    };

    return { byId };
  };

  const getMaterials = () => {
    const byItemId = (id) => {
      return db.materials.filter((material) => material.itemId === id);
    };

    const byRecipeId = (id) => {
      return db.materials.filter((material) => material.recipeId === id);
    };

    return { byItemId, byRecipeId };
  };

  // FINISHING REAGENT METHODS
  const getFinishingReagent = () => {
    const byId = (id) => {
      return db.finishingReagents.find((fReagent) => fReagent.id === id);
    };

    return { byId };
  };

  const getFinishingReagents = () => {
    const byRecipe = (id) => {
      return db.finishingReagents.filter(
        (fReagent) => fReagent.recipeId === id
      );
    };
    return { byRecipe };
  };

  return {
    getItem,
    getItems,
    getRecipe,
    getRecipes,
    getProfession,
    getProfessions,
    getMaterial,
    getMaterials,
    getFinishingReagent,
    getFinishingReagents,
  };
};

export default ApiNavigation;
