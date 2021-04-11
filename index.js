import PKG from './package.json';
import Block from './src/blockchain/block';

const { name, version } = PKG;
console.log(`Proyecto ${name} v${version} started`);

const { genesis } = Block;
console.log(genesis.toString());

const block = new Block(Date.now(), genesis.hash, 'h4sh', 'd4t4');
console.log(block.toString());

const block2 = new Block(Date.now(), block.hash, 'h4sh_2', 'd4t4_2');
console.log(block2.toString());