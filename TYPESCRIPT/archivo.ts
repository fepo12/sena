import * as fs from 'fs';

interface Product {
    id: number;
    name: string;
    price: number;
}

function readJsonFile(path: string): Product[] {
    const data = fs. readFileSync(path, 'utf-8');
    return JSON. parse(data);
}

function writeJsonFile(path: string, products: Product[]): void {
    const data = JSON. stringify(products, null, 2);
    fs. writeFileSync(path, data, 'utf-8');
}

const filePath = './products.json';

let products = readJsonFile(filePath);

products[0].price = 99.99;

writeJsonFile(filePath, products);