var a = [1,2,3,4,5,6,7,8,9]

var b =[1,2,3,"gF",1,"sd","dg0",true,4]

var b = [1,2,3,[4,5,6,[7,8,9],10,11],12,13]
undefined
b[0]
1
b[3,0]
1
b[3][0]
4
b[3][3][0]
7
b[3][4]
10

var a = [1,2,3,4,5,6,7,8,9]
a.length
9
a.push("hi")
10
a
(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, "hi"]
a.pop()
"hi"
a
(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
a.pop(2)
9

var a= [1,2,3,4,5,6,7,8,9]
undefined
a.splice(3,0,"a","b")
[]
a
(11) [1, 2, 3, "a", "b", 4, 5, 6, 7, 8, 9]
a.splice(3,1,"c","d")
["a"]
a
(12) [1, 2, 3, "c", "d", "b", 4, 5, 6, 7, 8, 9]
a.splice(3,2,"e","f")
(2) ["c", "d"]
a
(12) [1, 2, 3, "e", "f", "b", 4, 5, 6, 7, 8, 9]