import PKG from './package.json';
import Block from './src/blockchain/block';

const { name, version } = PKG;
console.log(`Proyecto ${name} v${version} started`);

const block = new Block(Date.now(), 'pr3vious-h4sh4', 'h4sh', 'd4t4');
console.log(block.toString());