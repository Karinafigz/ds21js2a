//Gabriela Karina Figueroa G
/*PROBLEM 2
* Square Dance
*/
function Dancer(name, sex) {
this.name = name;
  this.sex = sex;
}
  function getDancers(males, females) {
var names =["F Allison McMillan","M Frank Opitz",
"M Mason McMillan","M Clayton Ruff","F Cheryl Ferenback"," M Raymond Williams","F Jennifer Ingram","M Bryan Frazer","M David Durr","M Danny Martin","F Aurora Adney"];
for (var i = 0; i < names.length; ++i) {
names[i] = names[i].trim();
}
for (var i = 0; i < names.length; ++i) {
var dancer = names[i].split(" ");
var sex = dDancer[0];
var name = dDancer[1];
if (sex == "F") {
females.enqueue(new Dancer(name, sex));
}
else {
males.enqueue(new Dancer(name, sex));
}
}
}
  function dance(males, females) {
while (!females.empty() && !males.empty()) {
person = females.dequeue();
console.log("Female dancer is: " + person.name);
person = males.dequeue();
console.log(" and the male dancer is: " + person.name);
}
console.log();
}
  function Queue() {
this.dataStore = [];
this.enqueue = enqueue;
this.dequeue = dequeue;
this.front = front;
this.back = back;
this.toString = toString;
    this.empty = empty;
}
function enqueue(element) {
this.dataStore.push(element);
}
function dequeue() {
return this.dataStore.shift();
}
function front() {
return this.dataStore[0];
}
function back() {
return this.dataStore[this.dataStore.length-1];
}
function toString() {
var retStr = "";
for (var i = 0; i < this.dataStore.length; ++i) {
retStr += this.dataStore[i] + "\n";
}
return retStr;
}
function empty() {
if (this.dataStore.length == 0) {
return true;
}
else {
return false;
}
}
function Dancer(name, sex) {
this.name = name;
this.sex = sex;
}
function getDancers(males, females) {
var names =["F Allison McMillan","M Frank Opitz",
"M Mason McMillan","M Clayton Ruff","F Cheryl Ferenback"," MRaymond Williams","F Jennifer Ingram","M Bryan Frazer","M David Durr","M Danny Martin","F Aurora Adney"]
for (var i = 0; i < names.length; ++i) {
names[i] = names[i].trim();
}
for (var i = 0; i < names.length; ++i) {
var dancer = names[i].split(" ");
var sex = dancer[0];
var name = dancer[1];
if (sex == "F") {
femaleDancers.enqueue(new Dancer(name, sex));
  }
else {
maleDancers.enqueue(new Dancer(name, sex));
}
}
}
function dance(males, females) {
while (!females.empty() && !males.empty()) {
person = females.dequeue();
console.log("Female dancer is: " + person.name);
person = males.dequeue();
console.log(" and the male dancer is: " + person.name);
}
console.log();
}
// test program
var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (!femaleDancers.empty()) {
console.log(femaleDancers.front().name + " is waiting to dance.");
}
if (!maleDancers.empty()) {
console.log(maleDancers.front().name + " is waiting to dance.");
}
else{
console.log(maleDancers.front().name + " is dancing with "+femaleDancers.front().name);
}
