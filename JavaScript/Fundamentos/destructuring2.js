const [a] = [10]
console.log(10)

const [n1, , n3, , n5, n6=0] = [10, 7, 9, 8]//n1=10, n2=7, n3=9, n4=8, n5=undefined, n6=0
console.log(n1,n3,n5,n6)