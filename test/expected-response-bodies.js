import {Matchers} from 'pact';
const {somethingLike: like, eachLike} = Matchers;

export default {
  allMenus: [
    {
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
      
      /*
      name: like('primaryNav'),
      description: like('Primary Nav'),
      items: eachLike({
        name: 'Auctions',
        path: 'auctions'
      })
      */
    }
  ]
};