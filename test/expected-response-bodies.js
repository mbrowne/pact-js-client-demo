import {Matchers} from 'pact';
const {somethingLike: like, eachLike} = Matchers;

export default {
  allMenus: [
    {
      name: 'primaryNav',
      description: 'Primary Nav',
      items: [
        {
            name: 'Auctions',
            path: 'auctions'
        },
        {
            name: 'Artists',
            path: 'artits'
        }
        //...
      ]
    }
  ]
};