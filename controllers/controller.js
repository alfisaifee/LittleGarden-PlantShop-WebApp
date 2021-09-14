const getFilterQuery = (filter) => {
  const query = {
    $and: [],
  };
  for (var key in filter) {
    let option = filter[key];
    if (option.length > 0) {
      let orQuery = { $or: [] };
      if (key === "price") {
        orQuery["$or"].push({
          [key]: { $lt: option[0].max, $gte: option[0].min },
        });
        query["$and"].push(orQuery);
      } else {
        for (var opt in option) {
          orQuery["$or"].push({ [key]: option[opt] });
        }
        query["$and"].push(orQuery);
      }
    }
  }
  if (query["$and"].length === 0) {
    query["$and"].push({});
  }
  return query;
};

const getSortQuery = (sortBy) => {
  let query = {};
  if (sortBy === "rating") {
    query["rating"] = -1;
  } else if (sortBy === "pricesHtoL") {
    query["price"] = -1;
  } else if (sortBy === "pricesLtoH") {
    query["price"] = 1;
  }
  return query;
};

export { getFilterQuery, getSortQuery };
