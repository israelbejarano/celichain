import Block from './block';

describe('Block', () => {
    let timestamp;
    let previousBlock;
    let data;
    let hash;

    beforeEach(() => {
        timestamp = new Date(2020, 0, 22);
        previousBlock = Block.genesis;
        data = 'test data';
        hash = 'testHash';
    });

    it('create instance with parameters', () => {
        const block = new Block(timestamp, previousBlock.hash, hash, data);
        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
        expect(block.hash).toEqual(hash);
    });

    it('use static mine()', () => {
        const block = Block.mine(previousBlock, data);
        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(data).toEqual(data);
    });

    it('use static hash()', () => {
        hash = Block.hash(timestamp, previousBlock.hash, data);
        const hashOutput = '25b9f34149aafc1a828b5ebfbdc98c6a213e28b344e25ae3be499e2793d8cc8b';
        expect(hash).toEqual(hashOutput);
    });

    it('use toString()', () => {
        const block = Block.mine(previousBlock, data);
        expect(typeof block.toString()).toEqual('string');
    });
});