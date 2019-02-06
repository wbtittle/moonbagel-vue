var defaultMachines = [
  {id: "pot", name:"Hot Pot", generates: 0.2, cost: 10, owned: 0, src:"img/bagel-garlic.png", isVisible: true, isReadable: false, makeVisible:['baker']},
  {id: "baker", name: "Special Baker", generates: 1.3, cost: 1e2, owned: 0,src:"img/bagel-cheddar.png", isVisible: false, isReadable: false, makeVisible:['interns'] },
  {id: "interns", name:"Helpers", generates: 11, cost: 1e3, owned: 0,src:"img/bagel-chevy.png", isVisible: false, isReadable: false, makeVisible:['machine'] },
  {id: "machine", name: "Bagel Machine", generates: 100, cost: 1e4, owned: 0,src:"img/bagel-egg.png", isVisible: false, isReadable: false, makeVisible:['witch', 'newYork'] },
  {id: "witch", name: "Witches Tit", generates: 1000, cost: 1e5, owned: 0,src:"img/bagel-onion.png", isVisible: false, isReadable: false },
  {id: "newYork", name: "New York", generates: 10000, cost: 1e6,owned: 0, src:"img/bagel-pesto.png", isVisible: false, isReadable: false, makeVisible:['empireState'] },
  {id: "empireState", name: "Empire State", generates: 100000, cost: 1e7,owned: 0, src:"img/bagel-pizza.png", isVisible: false, isReadable: false, makeVisible:['mutantBagel'] },
  {id: "mutantBagel", name:"Mutant Bagel", generates: 1000000, cost: 1e8,owned: 0, src:"img/bagel-chocolate-chip.png", isVisible: false, isReadable: false, makeVisible:['heroBagel'] },
  {id: "heroBagel", name:"Hero Bagel", generates: 1e7, cost: 1e9,owned: 0, src:"img/bagel-multi-grain.png", isVisible: false, isReadable: false, makeVisible:['godBagel'] },
  {id: "godBagel", name:"God Bagel", generates: 1e5, cost: 1e10,owned: 0, src:"img/bagel-pumpernickel-rye-everything.png", isVisible: false, isReadable: false, makeVisible:[] }
];

export default defaultMachines;
