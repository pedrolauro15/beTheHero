const generateUniqueId = require('../../utils/generateUniqueId');

describe('Generate Unique Id', ()=>{
  it('should genarate an unique ID', ()=>{
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  })
})