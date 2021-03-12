// 对象的多态性
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

  // makeSound(new Duck())
  // makeSound(new Chicken())

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

  // makeSound(new Duck())
  // makeSound(new Chicken())
}



{
  var googleMap = {
    show: function () {
      console.log("开始渲染谷歌地图");
    }
  }

  var baiduMap = {
    show: function () {
      console.log("开始渲染百度地图");
    }
  }

  var renderMap = function (type) {
    if (type === 'google') {
      googleMap.show()
    } else if (type === 'baidu') {
      baiduMap.show()
    }
  }

  // renderMap('google');
  // renderMap('baidu');

  var renderMapBetter = function (map) {
    if (map.show instanceof Function) {
      map.show()
    }
  }

  // renderMapBetter(googleMap);
  // renderMapBetter(baiduMap);
}


