import { concatenation } from "./concatenation";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, "hello!");
  });
}

const age: number = 22;
const name: string = "Maksim";

type Person = { id: string; name: string; age: number };

function createPerson(personAge: number, personName: string): Person {
  const person: Person = {
    id: `${new Date().getSeconds()}${Math.random()}`,
    name: personName,
    age: personAge,
  };

  return person;
}

const personMax = createPerson(age, name);

const personJuliana = createPerson(35, "Juliana");

const personViktor = createPerson(40, "Viktor");

const people: Person[] = [personMax, personJuliana, personViktor];

const peopleNames = people.map((person) => {
  return person.name;
});
console.log("peopleNames: ", peopleNames);

type Store = {
  owner: "Igor" | "Viktor";
  products: Product[];
  isOpen: boolean;
  address?: { street: string };
};

type Product = {
  name: string;
  count: number;
  price: number;
  id: string;
  discount?: number;
};

const store: Store = {
  owner: "Viktor",
  products: [{ name: "apple", count: 4, price: 20, id: "1", discount: 5 }],
  isOpen: true,
  address: { street: "Apple street" },
};

const store2: Store = {
  owner: "Igor",
  products: [{ name: "mango", count: 8, price: 40, id: "5" }],
  isOpen: false,
};

const createProduct = (
  productName: string,
  productCount: number,
  productPrice: number
): Product => {
  const discountValue = Math.random() * 100;

  const product: Product = {
    name: productName,
    count: productCount,
    price: productPrice,
    id: `${new Date().getSeconds()}${Math.random()}`,
    discount: discountValue < 50 ? undefined : discountValue,
  };
  return product;
};

const apple = createProduct("apple", 25, 5);

const coconut = createProduct("coconut", 30, 10);

console.log("store2: ", store2);

store2.isOpen = true;
store2.products.push(apple);
store2.products.push(coconut);
console.log("store2: ", store2);
