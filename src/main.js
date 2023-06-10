const search = prompt("Search Blood Member");

const result = members.filter(
  (data) =>
    data.bloodGroup === search ||
    data.name === search ||
    data.age >= search ||
    data.phoneNumber === search ||
    data.lastDonate === search ||
    data.donationHistory === search
);

const finalResult = [];

result.forEach((item) => {
  finalResult.push(item);
});

console.table(finalResult);
