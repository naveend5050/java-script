const n=[0,2,4,6,8,10,12,14,16,18,20];
console.log(n);
let first=0,second=2,next;
for (let i=2;i<n;i++){
   next=first+second;
   console.log(next);
   first=second;
   second=next;
}
