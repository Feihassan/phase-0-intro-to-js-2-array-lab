// Write your solution here
const cats = [ "Milo", "Otis", "Garfield" ];
module.exports = {cats};
function destructivelyAppendCat(name) {
    cats.push(name);
    }
function destructivelyPrependCat(name) {
    cats.unshift(name);
    }
function destructivelyRemoveLastCat() {
    cats.pop();
    }
function destructivelyRemoveFirstCat() {
    cats.shift();
    }
function appendCat(name) {
    return [...cats, name];
    }
function prependCat(name) {
    return [name, ...cats];
    }
    function removeLastCat(name) {
        return cats.slice(0, cats.length -1);
    }
    function removeLastCat(name) {
        return cats.slice(1);
    }
    function removeFirstCat(name) {
        return cats.slice(0, cats.length -1);
    }
    function removeFirstCat(name) {
        return cats.slice(1);
    }
function removeFirstCat(name) {
    return cats.slice(1);
}
function removeLastCat(name) {
    return cats.slice(0, cats.length - 1);
}