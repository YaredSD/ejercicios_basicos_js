const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

// 4.1
console.log(aldeanos[3]);

// 4.2
aldeanos.push("Cervasio");
console.log(aldeanos);

// 4.3
aldeanos[0]= "Bambina";
console.log(aldeanos);

// 4.4
aldeanos.reverse();
console.log(aldeanos);

// 4.5
aldeanos.splice(4,1, "Canela");
console.log(aldeanos)

// 4.6
let LastAldeano = aldeanos.length - 1;
console.log(aldeanos[LastAldeano]);