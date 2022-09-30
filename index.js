//           JS-ARRAY
// ARRAY-An array is an object that holdes values(of any type)
//not particuly in named properties /keys 
//  In C++ and other programming language we need some special type
//But in js-It does'nt metter it's type 

// Js-Methods 
// There are a lot of methods of Array
// Splise / Split / Flat / Fill / Key / Pop 
// Push / Unshit /ForEach /map 
// Join / sort / filter /every  and others

// 1 Js-Method
//Flat -IT used when we have a array into array

// Taster 1
// let a=[3,4,5];
// let b=a.flat();
// console.log(b);

// Taster 2 if we have array in to array
// I't dont show us 
// let a=[3,[4,5,6]];
// console.log(a);

// Taster 3 
// If we want to correct this we do 
//Like this 
// let a=[3,[4,5,6]];
//let b=a.flat(1)
// console.log(b);

// Flat in by default is 1
//if We have array into array and array
//Like this
// let a=[3,[4,5,[6]]];
// let b=a.flat(2);
// console.log(b);

//If we put flat in (300) it slow computer work

// 2-Method of Js
// IT'S fill
// It's like this
// 1-first its property we put what we want to change

// 2-second ay kgo sar shava

// 3-third to kgora boyad rava 

// let c=[1,1,1,1,1]
// let d=c.fill(2,0,4)
// console.log(d);

//Taster 2
//Hamasha alish mekna
// let c=[1,1,1,1,1]
// let d=c.fill(2,0)
// console.log(d);

//Methodi fill massiva alish mekna 
//Hatman alish mekna 

// let c=[1,1,1,1,1]
// let d=c.fill(2,0)
// console.log(c);
// console.log(d);

//Iholatda kor namekna
// let c=[1]
// let d=c.fill(2,0,100)
// console.log(c);
// console.log(d);
// Faqat  hamu kadare ki massiv da dorem 
// Hamu kasha nishon meta ;



// VA YAKE AZ METHODHOE KI MODA DARKOR MESHVAYU 
// KORA PSON MEKNA I
// KEYS

//Taste 1
// let a=[1,1,2,2,22,2];
// console.log(Object.keys(a));


// Taste 2
// // let a={age:13,gender:"man"};
// console.log(Object.keys(a));