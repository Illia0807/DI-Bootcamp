Promise.resolve(3).then((p) => console.log(p));

Promise.reject("BOOO").catch(err=>console.log(err));
