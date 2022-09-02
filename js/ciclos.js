/* debugger;   */

let products = [
    {
      name: "virginia",
      size: ["1.0", "2.0", "3.0"],
    },
    {
      name: "missouri",
      size: ["1.0", "2.0", "3.0"],
    },
    {
      name: "texas",
      size: ["1.0", "2.0", "3.0"],
    },
    {
      name: "ohio",
      size: ["1.0", "2.0", "3.0"],
    },
  ];
  let again = true;
  let q = prompt("¿Cual de nuestras hamburguesas vas a pedir?");
  while (q === "" || q.length < 4) {
    q = prompt("¿Cual de nuestras hamburguesas vas a pedir?");
  }
  let query = [];
  let k = q.split(" ");
  //console.log(k);
  
  function searchProduct(q) {
    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < k.length; j++) {
        if (products[i].name.match(q) || products[i].name.match(k[j])) {
          if (query.indexOf(products[i]) === -1) query.push(products[i]);
        }
      }
    }
  
    if (query.length < 1) {
      console.log("Elige entre Virginia, Missouri, Texas y Ohio");
      again = confirm("Elige entre Virginia, Missouri, Texas y Ohio");
      if (again) {
        q = prompt("¿Cual de nuestras hamburguesas vas a pedir?");
        searchProduct(q);
        return again;
      }
    }
    console.log("Tu busqueda encontro", query.length, "Productos:");
    console.log(query);
  }
  
  searchProduct(q);
  
  console.log("-----------------");
  
  let queryFilters = [];
  let filters = "";
  function filterSizes(filters) {
    while (filters === "") {
      filters = prompt("¿Que tamaño vas a elegir?");
    }
    for (let i = 0; i < query.length; i++) {
      for (let j = 0; j < query[i].size.length; j++) {
        if (query[i].size[j].match(filters)) {
          if (queryFilters.indexOf(query[i]) === -1) queryFilters.push(query[i]);
        }
      }
    }
  
    if (queryFilters.length < 1) {
      console.log("Elige entre 1.0, 2.0 y 3.0");
      again = confirm("Elige entre 1.0, 2.0 y 3.0");
      if (again) {
        filters = prompt("¿Que tamaño vas a elegir?");
        filterSizes(filters);
        return again;
      }
    } else {
      console.log(
        "Se filtraron y encontramos",
        queryFilters.length,
        "Productos:"
      );
    }
  }
  
  function filterProducts(filters) {
    filterSizes(filters);
    console.log(queryFilters);
  }
  
  if (again) {
    filterProducts(filters);
  }

