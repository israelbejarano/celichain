import BlockChain from './blockchain';
import Block from './block';

describe('Blockchain', () => {
    let blockchain;

    beforeEach(() => {
        blockchain = new BlockChain();
    });

    it('every blockchain has a genesis blockchain', () => {
        const [genesisBlock] = blockchain.blocks;

        expect(genesisBlock).toEqual(Block.genesis);
        expect(blockchain.blocks.length).toEqual(1);

    });

    it('use addBlock', () => {
        const data = 'data';
        blockchain.addBlock(data);

        const [, lastBlock] = blockchain.blocks;
        expect(lastBlock.data).toEqual(data);
        expect(blockchain.blocks.length).toEqual(2);
    });
});