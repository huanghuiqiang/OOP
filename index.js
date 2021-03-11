// 多态的代码
// bad
{
  const makeSound = function (animal) {
    if (animal instanceof Duck) {
      console.log('嘎嘎嘎');
    } else if (animal instanceof Chicken) {
      console.log('咯咯咯');
    }
  }

  const Duck = function () { }
  const Chicken = function () { }

  makeSound(new Duck())
  makeSound(new Chicken())

}
// good

{
  const makeSound = function (animal) {
    animal.sound()
  }

  const Duck = function () { }

  Duck.prototype.sound = function () {
    console.log('嘎嘎嘎');
  }

  const Chicken = function () { }
  Chicken.prototype.sound = function () {
    console.log('咕咕咕');
  }

  makeSound(new Duck())
  makeSound(new Chicken())
}