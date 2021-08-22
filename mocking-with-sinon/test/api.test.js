import axios from 'axios';
import sinon from 'sinon';
import assert from 'assert';
import { getBooks } from '../src/api';

describe('get books', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('gets books', async () => {
    const books = [
      {
        id: 1,
        title:
          'The Bitcoin Standard: The Decentralized Alternative to Central Banking',
        author: 'Saifedean Ammous',
      },
    ];
    sandbox.stub(axios, 'get').resolves({
      data: books,
      status: 200,
    });
    const response = await getBooks();
    assert.deepStrictEqual(response, books);
  });
});
