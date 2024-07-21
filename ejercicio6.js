// 6.1
for (let index=0; index <10; index++) {
    console.log(index);
}

// 6.2
for (let i=0; i<10; i++) {
    if (i%2 == 0){
        console.log(i);
    }
}

// 6.3
let CycleCounts = 0;
let TryingSleep = "Intentando dormir 🐑";
let Sleep = "¡Dormido!";

for (CycleCounts; CycleCounts<10; CycleCounts++) {
    if (CycleCounts<9) {
        console.log(TryingSleep);
    } else {
        console.log(Sleep);
    }
    }