const specOrRenownObjectToWords = (obj) => {
  // obj is a passed in renown or specialization level requirement
  // ex: {IskarraTuskarr: 15}
  // we want to return an array with two indexes: first is the key as a string, second is the level
  // ie, ["Iskarra Tuskarr", 15]
  let output = [];

  // getOwnPropertyNames gives us an array of the keys as strings
  // this obj only has one key, so it will be an array of length 1
  let keyName = Object.getOwnPropertyNames(obj)[0];
  output.push(keyToWords(keyName));

  // now we want to push the value that the key is pointing to
  let valueAtKeyName = Object.getOwnPropertyDescriptor(obj, keyName).value;
  output.push(valueAtKeyName);

  return output;
};

const keyToWords = (word) => {
  let regex = word.matchAll(/[A-Z][a-z]*/g);
  let words = [];
  for (let word of regex) {
    //regex iterator is wack, it's an array of arrays
    //if we iterate through each array, taking that [0] gives the word
    words.push(word[0]);
  }
  // TO-DO: SWITCH STATEMENT FOR SOME SPECIAL CASES
  // ie E Z Thro should be EZ-Thro
  // anything with an apostrophe (it won't have an apostrophe as a key!), ie Artisan's Consortium
  switch (words[0]) {
    case "E":
      return "EZ-Thro";
    case "Artisans":
      return "Artisan's Consortium";
    case "Belts":
      return ktwHelperMethod(words);
    case "Boots":
      return ktwHelperMethod(words);
    default:
      return words.join(" ");
  }
};

const ktwHelperMethod = (words) => {
  //if this is BracersLeather or BootsMail, OR BootsLeather or BootsMail
  //return Bracers (Leather) or Bracers (Mail)
  if (words.length > 1) {
    return `${words[0]} (${words[1]})`;
  } else {
    return words[0];
  }
};

const largeIconToMedium = (icon) => {
  return icon.replace(/\/large\//g, "/medium/");
};

const displayIconMedium = (icon, imgClassName, imgAlt) => {
  //imgClassName is optional, but if we provide it, make it our img's className
  //same with imgAlt & alt
  return (
    <img
      className={imgClassName ? imgClassName : ""}
      src={largeIconToMedium(icon)}
      alt={imgAlt ? imgAlt : "icon"}
      onError={(e) => {
        //changing icon source to a placeholder smiley face img
        e.target.src =
          "https://wow.zamimg.com/images/wow/icons/medium/spell_misc_emotionhappy.jpg";
        console.log(`${icon} is a broken url, btw`);
      }}
    />
  );
};

const displayIconLarge = (icon, imgClassName, imgAlt) => {
  //imgClassName is optional, but if we provide it, make it our img's className
  //same with imgAlt & alt
  return (
    <img
      className={imgClassName ? imgClassName : ""}
      src={icon}
      alt={imgAlt ? imgAlt : "icon"}
      onError={(e) => {
        //changing icon source to a placeholder smiley face img
        e.target.src =
          "https://wow.zamimg.com/images/wow/icons/large/spell_misc_emotionhappy.jpg";
        console.log(`${icon} is a broken url, btw`);
      }}
    />
  );
};

const capitalizeWord = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const websiteLooksLikeCrapNotice = () => {
  return (
    <h2 className="header-med">
      Please note: The formatting of this page is under construction. Current
      focus is on getting the info on the page. Formatting is coming later.
      Website last updated: 11/18/2022.
    </h2>
  );
};

const isObjectEmpty = (obj) => {
  // returns bool of whether this obj is {}
  return Object.keys(obj).length === 0;
};

const isLastItemInArray = (array, index) => {
  //returns bool of if this is the last item in the array
  return array.length + 1 === index;
};

const fullStatRangeText = (array) => {
  // for item level & stat numbers on gear, we want to format it in a certain way
  // so if there are 5 possible item levels for a piece of gear, we want those 5 numbers to look like:
  // 333/335/338/340/343
  // that is what this method does, based on an array of numbers given
  let text = "";
  for (let i = 0; i < array.length; i++) {
    //if this is a socket or tinker socket, it's gonna be NULL,NULL,NULL,NULL,NULL
    //so we want to exit if that's the case
    if (!array[i]) {
      break;
    } else {
      text += array[i];
      //if we are not the last item in the array, and the next item in the array is NOT "",
      //then we add a /.
      if (!isLastItemInArray(array, i) && array[i + 1]) {
        text += "/";
      }
    }
  }
  return text;
};

const partialStatRangeText = (array) => {
  // this is basically above but instead of getting all 5 values, we're just getting the first and last
  // ie 333-343
  // we ONLY USE THIS with a set of 3 or 5 numbers

  if (typeof array == "object") {
    // exit if it's a socket or tinker socket (NULL, NULL, NULL, NULL, NULL)
    if (!array[0]) {
      return "";
    }
    // text of the first and last elements in array, separated by a dash
    return `${array[0]}-${array[array.length - 1]}`;
  }
  return "ERROR";
};

const correctFoozlesIconURL = (iconURL) => {
  //just fixing my dummy mistake until i re-seed the db
  return iconURL.replace(
    /inv_elementalspiritfoozles/g,
    "inv_10_elementalspiritfoozles"
  );
};

const qualityToImgClass = (quality) => {
  switch (quality) {
    case "Common":
      return "item-common";
    case "Uncommon":
      return "item-uncommon";
    case "Rare":
      return "item-rare";
    case "Epic":
      return "item-epic";
    default:
      return "";
  }
};

const checkFetchError = (res) => {
  //this replaces us putting "res.json()" in our first .then after a fetch
  //if we get a 400 on a fetch, it's gonna throw an error
  //MAKE SURE TO DO A .CATCH AFTER THE LAST .THEN!!
  if (res.status >= 200 && res.status <= 299) {
    let data = res.json();
    return data;
  } else {
    throw Error(res.statusText);
  }
};

const fReagentTypeToUrl = (type) => {
  return type.replaceAll(" ", "_");
};

const fReagentUrlToType = (url) => {
  return url.replaceAll("_", " ");
};

const convertToSearchTerm = (string) => {
  // the steps here: make everything lowercase, case sensitivity is bad
  // gonna replace some common weirdo things, ie -, _, "", ', :, .
  const charactersToMakeIntoSpaces = /[-_]/g;
  const charactersToMakeIntoEmpty = /["':.]/g;
  return string
    .toLowerCase()
    .replaceAll(charactersToMakeIntoSpaces, " ")
    .replaceAll(charactersToMakeIntoEmpty, "");
};

export {
  specOrRenownObjectToWords,
  keyToWords,
  largeIconToMedium,
  capitalizeWord,
  websiteLooksLikeCrapNotice,
  isObjectEmpty,
  correctFoozlesIconURL,
  isLastItemInArray,
  fullStatRangeText,
  partialStatRangeText,
  displayIconLarge,
  displayIconMedium,
  qualityToImgClass,
  checkFetchError,
  fReagentTypeToUrl,
  fReagentUrlToType,
  convertToSearchTerm,
};
