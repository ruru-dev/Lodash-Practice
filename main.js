const _ = require('lodash');
const assert = require('expect');

const numsArray = [1,2,3,4,5,6,7,8,9,10];

function getData() {
  return fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then((json) => {
        console.log(json);
        console.log(_.chunk(json, 2));
        console.log(_.reverse(json));
        console.log(_.without(numsArray, 1,3,5,7,9));
        console.log(_.shuffle(json));
        console.log(_.drop(json, 9));
        return json;
      })
  }

      if (typeof describe === 'function'){
        describe('Lodash Function Tests', function(){
          it('Should be able to chunk an array', async function(){
            const json = await getData();
            let chunkedJSON = _.chunk(json, 2);
            assert.expect(chunkedJSON.length).toEqual(5);
            assert.expect(chunkedJSON[0].length).toEqual(2);
            assert.expect(chunkedJSON[0]).toBeInstanceOf(Array);
          });

          it('Should be able to reverse an array', function(){
            assert.expect(numsArray[0]).toEqual(1);
            _.reverse(numsArray);
            assert.expect(numsArray).toHaveLength(10);
            assert.expect(numsArray[0]).toEqual(10);
          });

          it('Should be able to use without', function(){
            const arrayAfterWithout = _.without(numsArray, 1);
            assert.expect(arrayAfterWithout).not.toContain(1);
            assert.expect(arrayAfterWithout.length).toEqual(9);
          });

          it('Should be able to shuffle', async function(){
            const json = await getData();
            let firstObjectName = json[0].name;
            let shuffledJSON = _.shuffle(json);
            assert.expect(shuffledJSON[0].name).not.toEqual(firstObjectName);
          });

          it('Should be able to drop', function(){
           let droppedArray = _.drop(numsArray, 9);
            assert.expect(numsArray.length).toBeGreaterThan(droppedArray.length);
            assert.expect(droppedArray.length).toEqual(1);
          });
        });
      }

