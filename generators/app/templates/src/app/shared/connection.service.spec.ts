import { expect } from 'chai';

import { ConnectionService } from './connection.service';

describe('ConnectionService', () => {

  describe('when it is instantiated', () => {

    it('should connect to the database.', () => {
      expect(() => new ConnectionService()).not.to.throw();
    });

  });

});
