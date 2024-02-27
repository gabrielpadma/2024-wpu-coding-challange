const filter_list = (l) => l.filter((data) => typeof data == "number");

console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
