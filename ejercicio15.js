const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta']

const Camisetas = [];
for (const product of products) {
    if (product.includes('Camiseta')) {
        Camisetas.push(product);
    }
}
console.log(Camisetas);