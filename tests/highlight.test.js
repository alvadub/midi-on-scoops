/* eslint-disable no-unused-expressions */

import { expect } from 'chai';
import { highlight } from '../src/highlight.js';

describe('highlight arrangement metadata', () => {
  it('keeps arrangement token order across multiple > lines', () => {
    const html = highlight(`
      > A B
      > C D
    `);

    const orders = [];
    const re = /class="tok-section tok-arr-token"[^>]*data-arr-order="(\d+)"/g;
    let match = re.exec(html);
    while (match) {
      orders.push(parseInt(match[1], 10));
      match = re.exec(html);
    }

    expect(orders).to.deep.equal([0, 1, 2, 3]);
  });
});
