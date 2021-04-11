import Blockchain from './blockchain';
import Block from './block';

describe('Blockchain', () => {
    let blockchain;
    let blockchainB;

    beforeEach(() => {
        blockchain = new Blockchain();
        blockchainB = new Blockchain();
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

    it('replaces the chain with a valid chain', () => {
        blockchainB.addBlock('block-1');
        blockchain.replace(blockchainB.blocks);

        expect(blockchain.blocks).toEqual(blockchainB.blocks);
    });

    it('does not replace the chain with one with less blocks', () => {
        blockchain.addBlock('bloque-1');

        expect(() => {
            blockchain.replace(blockchainB.blocks)
        }).toThrowError('Received chain is not longer than current chain');
    });

    it('not replace the chain with one is not valid', () => {
        blockchainB.addBlock('bloque-1');
        blockchainB.blocks[1].data = 'block-hack';

        expect(() => {
            blockchain.replace(blockchainB.blocks)
        }).toThrowError('Received chain is invalid');
    });
});