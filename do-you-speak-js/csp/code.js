function createChannel() {
  const puts = [], takes = [];
  return {
    put(data) {
      return new Promise(done => {
        if (takes.length > 0) {
          takes.shift()(data);
          done();
        } else {
          puts.push(done);
        }
      });
    },
    take() {
      return new Promise(done => {
        if (puts.length > 0) {
          done(puts.shift()());
        } else {
          takes.push(done);
        }
      });
    }
  }
}

const channel = createChannel();

async function A() {
  console.log('Waiting for values');
  console.log(await channel.take());
  console.log('-');
  console.log(await channel.take());
  console.log('--');
  console.log(await channel.take());
  console.log('---');
}
async function B() {
  console.log('Sending 1');
  await channel.put(1);
  console.log('Sending 2');
  await channel.put(2);
  console.log('Sending 3');
  await channel.put(3);
}

A(); B();









