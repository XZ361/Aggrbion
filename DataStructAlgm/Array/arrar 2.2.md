array定义：一个存储元素的线性集合，元素可以通过索引来任意存取，索引通常都是数字，用来计算元素之间存储位置的偏移量。

** 2.2.1 创建数组

- var num=[];
- var num = new Array();  只穿入一个参数，可以指定数组的长度

js中，数组中的元素不必是同一种类型
```
var obj = [1,'hdh',true,null]

可以调用Array.isArray()来判断一个对象是否是数组
var num =3;
console.log(Array.isArray(num));    //false
```
大多数专家推荐使用[]创建数组，和使用Array的构造函数相比，这种方式被认为效率更高

** 2.2.2 读写数组

js中的数组也是对象，数组的长度可以任意长，超出其创建时指定的长度

** 2.2.3 由字符串生成数组

调用字符串对象的split方法也可以生成数组。
该方法通过一些常见的分隔符，讲一个字符串分成几部分，并将每部分作为一个元素保存于一个新建的数组中
```
var str = 'abc bdkkkk akd akdba afber ,wnof';
var words = str.split(" ");
for (var i=0;i< words.length;i++){
    console.log('words: '+words[i]);
}
```
输出： abc bdkkkk akd akdba afber ,wnof

** 2.2.4 对数组的整体性操作
```
var nums =[];
for(var i=0;i<10;i++){
    nums[i] = i+1;
}
var samenums =nums;
```
讲一个数组赋值给另一个数组，只是为被赋值的数组增加了一个新的引用。
当你通过原引用修改了数组值时，新的引用也会感知到这个变化。
```
nums[1]=1000;
console.log(samenums[1]);   //显示1000
```
这种行为被称为浅拷贝。新数组仍旧指向原来的数组。

一个更好的方案是深拷贝，将原数组中的每一项都复制一份到新数组中。
深拷贝：
```
function deepCopy(arr1,arr2){
    for(var i=0;i < arr.length;i++){
        arr2[i] = arr1[i];
    }
}

var nums = [];
for (var i=0;i< 10;i++){
    nums[i] = i+1;
}
var samenums = [];
deepCopy(nums,samenums);

nums[0]=1000;
console.log(samenums[0]);   // 输出1
```