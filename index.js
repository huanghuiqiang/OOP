// {
//   let func = function (a, b, c) {
//     console.log([a, b, c]);
//   }

//   // func([1, 2, 3])
//   console.log(Math.max(1, 2, 3, 5));
// }

// {
//   let func = function () {
//     let a = 1;
//     return function () {
//       a++;
//       console.log(a);
//     }
//   }
//   let f = func()
//   f()
//   f()
//   f()
// }

// // {
// //   let appendDiv = function () {
// //     for (let i = 0; i < 100; i++) {
// //       let div = document.createElement('div');
// //       div.innerHtML = i;
// //       document.body.appendChild(div);
// //       div.style.display = 'none';
// //     }
// //   }
// //   appendDiv();
// // }

// // {
// //   let appendDiv = function (num = 1, callback) {
// //     for (let i = 0; i < num; i++) {
// //       let div = docuemnt.createElement('div');
// //       div.innerHTML = i;
// //       document.body.appendChild(div);
// //       if (typeof callback === 'function') {
// //         callback(div);
// //       }
// //     }
// //   }
// //   appendDiv(function (div) {
// //     div.style.display = 'none';
// //   })
// // }

// // {
// //   var isString = function (obj) {
// //     return Object.prototype.toString.call(obj) === '[object String]'
// //   }
// // }

// {
//   (function () {
//     Array.prototype.push.call(arguments, 3)
//     console.log(arguments);
//   })(1, 2)
// }

// {
//   let Type = {}
//   for (let i = 0, type; type = ['String', 'Array', 'Number'][i++];) {
//     (function (type) {
//       Type['is' + type] = function (obj) {
//         return Object.prototype.toString.call(obj) === '[object ' + type + ']';
//       }
//     })(type)
//   }
//   console.log(Type.isArray([]));
//   console.log(Type.isString("str"));
// }

// {
//   var currying = function (fn) {
//     var args = [];

//     return function () {
//       if (arguments.length === 0) {
//         return fn.apply(this, args);
//       } else {
//         [].push.apply(args, arguments);
//         return arguments.callee;
//       }
//     }
//   }

//   var cost = (function () {
//     var money = 0;

//     return function () {
//       for (var i = 0, l = arguments.length; i < l; i++) {
//         money += arguments[i];
//       }
//       return money;
//     }
//   })();

//   var cost1 = currying(cost);

//   // cost(100);
//   // cost(200);
//   // cost(300);

//   console.log(cost1(1)(2)(300)());
// }

// // {
// //   function yideng() {
// //     console.log(1);
// //   }
// //   (function () {
// //     if (false) {
// //       function yideng() {
// //         console.log(2);
// //       }
// //     }
// //     console.log(typeof yideng); // ??????undefined
// //     yideng(); // ??????is not a function
// //   })()
// // }

// // {
// //   alert(a) // 
// //   a() // 
// //   var a = 3;
// //   function a() {
// //     alert(10)
// //   }
// //   alert(a) // 
// //   a = 6;
// //   a(); // 
// // }

// // {
// //   var a;
// //   function a() { }
// //   alert(a) // 'function a() {}'
// //   a() // 10
// //   a = 3;
// //   function a() {
// //     alert(10)
// //   }
// //   alert(a) // 3
// //   a = 6;
// //   a(); // 
// // }

// // {
// //   let { ...yideng } = Object.create({ x: 1 })
// //   console.log(yideng.x); // undefined?????????????????????????????????????????????????????????????????????????????????????????????
// // }

// {


//   var mult = (function () {
//     var cache = {}
//     return function () {
//       var args = Array.prototype.join.call(arguments, ',');
//       if (cache[args]) {
//         return cache[args]
//       }

//       var a = 1;
//       for (let i = 0, l = arguments.length; i < l; i++) {
//         a = a * arguments[i];
//       }
//       return cache[args] = a;
//     }
//   })()


//   console.log(mult(1, 2, 3, 4));
//   console.log(mult(1, 2, 3, 4));
// }

// {
//   var googleMap = {
//     show: function () {
//       console.log('??????????????????');
//     }
//   }

//   var baiduMap = {
//     display: function () {
//       console.log('??????????????????');
//     }
//   }


//   var baiduMapAdapter = {
//     show: function () {
//       return baiduMap.display()
//     }
//   }

//   var renderMap = function (map) {
//     if (map.show instanceof Function) {
//       map.show();
//     }
//   }

//   renderMap(googleMap)
//   renderMap(baiduMapAdapter)
// }

// {
//   var guangdongCity = {
//     sehnzhen: 11,
//     guangzhou: 12,
//     zhuhai: 13
//   }

//   var getGuangdongCity = function () {
//     var guangdongCity = [
//       {
//         name: 'shenzhen',
//         ia: 11,
//       },
//       {
//         name: 'guangzhou',
//         ia: 12,
//       }
//     ]
//     return guangdongCity;
//   }

//   var render = function (fn) {
//     console.log('???????????????????????????');
//     document.write('JSON.stringify(fn())')
//   }

//   var addressAdapter = function (oldAddressfn) {
//     var address = {},
//       oldAddress = oldAddressfn();

//     for (var i = 0, c; c = oldAddress[i++];) {
//       address[c.name] = c.id;
//     }

//     return function () {
//       return address;
//     }
//   }

//   render(addressAdapter(getGuangdongCity))
// }

{
  let a = function () {
    console.log(1);
  }

  let a = function () {
    console.log(1);
    console.log(2);
  }
}


{
  let a = function () {
    console.log(1);
  }

  var _a = a;
  a = function () {
    _a();
    console.log(2);
  }
  a();
}


{
  class TreenNode {
    constructor(val, left, right) {
      this.val = val === undefined ? 0 : val
      this.left = left === undefined ? null : left
      this.right = right === undefined ? null : right
    }
  }


  // ????????????
  var preorderTraversal = (root) => {
    let result = []
    var preOrderTraverseNode = (node) => {
      if (node) {
        // ????????????
        result.push(node.val)
        // ?????????????????????
        preOrderTraverseNode(node.left)
        // ??????????????????
        preOrderTraverseNode(node.right)
      }
    }
    preOrderTraverseNode(root)
    return result
  };

}

{
  // ???????????????????????????...
  function withSubscription(WrappedComponent, selectData) {
    // ...????????????????????????...
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
          data: selectData(DataSource, props)
        };
      }

      componentDidMount() {
        // ...???????????????????????????...
        DataSource.addChangeListener(this.handleChange);
      }

      componentWillUnmount() {
        DataSource.removeChangeListener(this.handleChange);
      }

      handleChange() {
        this.setState({
          data: selectData(DataSource, this.props)
        });
      }

      render() {
        // ... ??????????????????????????????????????????!
        // ????????????????????????????????????????????????
        return <WrappedComponent data={this.state.data} {...this.props} />;
      }
    };
  }
}

{
  class Event {
    constructor() {
      // ???????????????????????????
      this._cache = {}
    }

    on(type, callback) {


    }
  }
}