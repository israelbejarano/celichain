import PKG from './package.json';
import Block from './src/blockchain/block';

const { name, version } = PKG;
console.log(`Proyecto ${name} v${version} started`);

const { genesis } = Block;
console.log(genesis.toString());

const block1 = Block.mine(genesis, 'data-1');
console.log(block1.toString());

const block2 = Block.mine(block1, 'data-2');
console.log(block2.toString());