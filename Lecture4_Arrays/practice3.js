let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

let deleted_company = companies.shift();
console.log(deleted_company);
console.log(companies);

companies.splice(1, 1, "Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);
