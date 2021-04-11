import Blockchain from '../blockchain';
import validate from './validate';
describe('validate()', () => {
    let blockchain;

    beforeEach(() => {
        blockchain = new Blockchain();
    });

    it('validates a valid chain', () => {
        blockchain.addBlock('bloque-1');
        blockchain.addBlock('bloque-2');

        expect(validate(blockchain.blocks)).toBe(true);

    });

    it('invalidates a chain with corrupt genesis block', () => {
        blockchain.blocks[0].data = 'bad data';

        expect(() => {
            validate(blockchain.blocks)
        }).toThrowError('Invalid Genesis Block.');

    });

    it('invalidates a chain with corrupt previousHash within a block', () => {
        blockchain.addBlock('bloque-test');
        blockchain.blocks[1].previousHash = 'hack';

        expect(() => {
            validate(blockchain.blocks)
        }).toThrowError('Invalid previous hash.');

    });

    it('invalidates a chain with corrupt hash within a block', () => {
        blockchain.addBlock('bloque-test');
        blockchain.blocks[1].hash = 'hack';

        expect(() => {
            validate(blockchain.blocks)
        }).toThrowError('Invalid hash.');

    });
});