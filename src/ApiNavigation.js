const ApiNavigation = (db) => {
  // the output from our api is going to be an object, containing a series of arrays of objects for each table/model
  // so for example, we're gonna have an array called items, which is full of item objects
  // we're gonna be using a lot of array methods! here's some documentation for all of them
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  // almost all our return types are gonna be either a) arrays (if we're getting multiple) or b) objects (if we're getting one)

  // some explanations:

  // by nesting functions and returning the children functions as an obj at the end of the parent function,
  // we can specialize methods a whole hell of a lot, and access certain data only when we need it

  // regex: new RegExp(string, letter) will give us a regex with that string, and apply modifications based on letter
  // i.e. "i" is case insensitive - no having to worry about using .toLowerCase() ad nauseum

  // funky sorting method: return a["fieldName"] - b["fieldName"] || a["otherFieldName"] - b["otherFieldName"]
  // basically, we sort by the first field. if it's not 1 or -1 (true), that means they're the same
  // so we can then sort by the second field

  // finding by id & return db.whatever[id - 1]
  // since everything is sorted by id, I can just get the array index of the id
  // minus one, since the id of index 0 is 1. need id and index to match

  // HELPER METHODS
  const sortStrings = (stringA, stringB) => {
    const a = stringA.toUpperCase();
    const b = stringB.toUpperCase();
    return a < b ? -1 : a > b ? 1 : 0;
  };

  const sortObjects = (objA, objB) => {
    //Object.getOwnPropertyNames returns array of the key names of our obj
    //only one key in these objects! so we can just get index 0
    const aName = Object.getOwnPropertyNames(objA)[0];
    const bName = Object.getOwnPropertyNames(objB)[0];
    if (aName.toUpperCase() > bName.toUpperCase()) {
      return 1;
    }
    if (aName.toUpperCase() < bName.toUpperCase()) {
      return -1;
    }

    // this code will only run if the keys were equal
    const aValue = objA[aName];
    const bValue = objB[bName];
    if (typeof aValue == "number") {
      return aValue - bValue;
    }

    //this will only run if the values are strings
    return sortStrings(aValue, bValue);
  };

  // const sortDb = (db) => {
  //   let newDb = {}
  //   newDb.items = db.items.sort((a, b) => a.id - b.id);
  //   newDb.recipes = db.recipes.sort((a, b) => a.id - b.id)
  // };

  // ITEM METHODS
  const getItem = () => {
    const byId = (id) => {
      return db.items.find((item) => item.id === parseInt(id));
    };

    const byName = (name) => {
      return db.items.find((item) => item.name === name);
    };

    return { byId, byName };
  };

  const getItems = () => {
    const finishingReagents = () => {
      const byType = (type) => {
        return all().filter((item) => item.finishingReagentType.includes(type));
      };

      const all = () => {
        return db.items.filter((item) => item.finishingReagentType);
      };

      return { byType, all };
    };

    const profToolAndAccessories = () => {
      const items = db.items.filter((item) =>
        item.armorWeaponType.match(/Accessory|Tool/i)
      );

      const byProfessionName = (name) => {
        const regex = new RegExp(name, "i");
        return items.filter((item) => item.armorWeaponType.match(regex));
      };

      const byProfessionId = (id) => {
        const professionName = getProfession.byId(id).name;
        return byProfessionName(professionName);
      };

      const all = () => {
        return items;
      };

      return { byProfessionId, byProfessionName, all };
    };

    const all = () => {
      return db.items;
    };

    return { finishingReagents, profToolAndAccessories, all };
  };

  // RECIPE METHODS
  const getRecipe = () => {
    const byId = (id) => {
      return db.recipes.find((recipe) => recipe.id === parseInt(id));
    };

    const byItemId = (id) => {
      return db.recipes.find((recipe) => recipe.itemId === parseInt(id));
    };

    return { byId, byItemId };
  };

  const getRecipes = () => {
    const byProfession = (id) => {
      const recipes = db
        ? db.recipes.filter((recipe) => recipe.professionId === parseInt(id))
        : null;

      const onlyTrainerRecipes = () => {
        if (recipes) {
          const trainerRecipes = recipes.filter(
            (recipe) => recipe.requiredProfessionLevel
          );
          trainerRecipes.sort(
            (a, b) =>
              a.requiredProfessionLevel - b.requiredProfessionLevel ||
              sortStrings(a.name, b.name)
          );
          return trainerRecipes;
        }
        return null;
      };

      const onlyRenownRecipes = () => {
        if (recipes) {
          const renownRecipes = recipes.filter(
            (recipe) => recipe.requiredRenownLevel
          );
          renownRecipes.sort(
            (a, b) =>
              sortObjects(a.requiredRenownLevel, b.requiredRenownLevel) ||
              sortStrings(a.name, b.name)
          );
          return renownRecipes;
        }
        return null;
      };

      const onlySpecializationRecipes = () => {
        if (recipes) {
          const specRecipes = recipes.filter(
            (recipe) =>
              recipe.requiredSpecializationLevel &&
              !recipe.specialAcquisitionMethod
          );
          specRecipes.sort(
            (a, b) =>
              sortObjects(
                a.requiredSpecializationLevel,
                b.requiredSpecializationLevel
              ) || sortStrings(a.name, b.name)
          );
          return specRecipes;
        }
        return null;
      };

      const onlyOtherRecipes = () => {
        if (recipes) {
          const otherRecipes = recipes.filter(
            (recipe) => recipe.specialAcquisitionMethod
          );
          otherRecipes.sort(
            (a, b) =>
              sortStrings(
                a.specialAcquisitionMethod,
                b.specialAcquisitionMethod
              ) || sortStrings(a.name, b.name)
          );
          return otherRecipes;
        }
        return null;
      };

      const all = () => {
        return recipes
          ? recipes.sort((a, b) => sortStrings(a.name, b.name))
          : null;
      };

      return {
        onlyTrainerRecipes,
        onlyRenownRecipes,
        onlySpecializationRecipes,
        onlyOtherRecipes,
        all,
      };
    };

    const byItem = (id) => {
      return db.recipes.filter((recipe) => recipe.itemId === parseInt(id));
    };

    const byFinishingReagentType = (type) => {
      // first, we get the list of finishing reagents that are this type
      // then, we map all of the recipes in that list
      return getFinishingReagents()
        .byType(type)
        .map((fReagent) => getRecipe().byId(fReagent.recipeId));
    };

    const all = () => {
      return db.recipes;
    };

    return { byProfession, byItem, byFinishingReagentType, all };
  };

  // PROFESSION METHODS
  const getProfession = () => {
    const byId = (id) => {
      return db.professions.find(
        (profession) => profession.id === parseInt(id)
      );
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
      return db.materials.find((material) => material.id === parseInt(id));
    };

    return { byId };
  };

  const getMaterials = () => {
    const byItemId = (id) => {
      return db.materials.filter(
        (material) => material.itemId === parseInt(id)
      );
    };

    const byRecipeId = (id) => {
      return db.materials.filter(
        (material) => material.recipeId === parseInt(id)
      );
    };

    return { byItemId, byRecipeId };
  };

  // FINISHING REAGENT METHODS
  const getFinishingReagent = () => {
    const byId = (id) => {
      return db.finishingReagents.find(
        (fReagent) => fReagent.id === parseInt(id)
      );
    };

    return { byId };
  };

  const getFinishingReagents = () => {
    const byRecipeId = (id) => {
      return db.finishingReagents.filter(
        (fReagent) => fReagent.recipeId === parseInt(id)
      );
    };

    const byType = (name) => {
      return db.finishingReagents.filter(
        (fReagent) => fReagent.reagentType === name
      );
    };
    return { byRecipeId, byType };
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
