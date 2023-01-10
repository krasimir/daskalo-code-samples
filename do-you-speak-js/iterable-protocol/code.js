const obj = {
  name: 'Bob',
  skills: ['HTML', 'CSS', 'JavaScript'],
  [Symbol.iterator]: function () {
    const skills = this.skills;
    let i = 0;
    return {
      next() {
        if (i >= skills.length) {
          return {
            done: true,
            value: undefined
          }
        }
        return {
          done: false,
          value: skills[i++]
        }
      }
    }
  }
}
const arr = ['a', 'b', 'c', 'd'];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());