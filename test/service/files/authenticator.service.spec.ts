import { ModelService, ObjectDoesNotExist } from '@foal/common';
import { ObjectType } from '@foal/core';
import { expect } from 'chai';

import { FooBarService } from './foo-bar.service';

describe('FooBarService', () => {

  interface User {
    // ...
  }

  class ConcreteClass extends FooBarService<User> {}
  let service: ConcreteClass;

  class UserModelService implements ModelService<User, ObjectType, ObjectType, any> {
    public createOne(): any {}
    public createMany(): any {}

    public findById(): any {}
    public findOne(query: ObjectType): User & { id: any } {
      // ...
      throw new ObjectDoesNotExist();
    }
    public findAll(): any {}

    public findByIdAndUpdate(): any {}
    public findOneAndUpdate(): any {}
    public updateMany(): void {}

    public findByIdAndReplace(): any {}
    public findOneAndReplace(): any {}

    public findByIdAndRemove(): any {}
    public findOneAndRemove(): any {}

    public removeMany(): void {}
  }

  it('should instantiate.', () => {
    service = new ConcreteClass(new UserModelService());
  });

  describe('when authenticate is called', () => {

    it('should return null if the credentials are incorrect.', async () => {
      const user = await service.authenticate({ /* credentials */ });
      expect(user).to.equal(null);
    });

    it('should return the authenticated user if the given credentials are correct.', async () => {
      const user = await service.authenticate({ /* credentials */ });
      expect(user).to.deep.equal({ /* The expected user */});
    });

  });

});
