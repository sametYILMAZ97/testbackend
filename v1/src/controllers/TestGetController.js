const httpstatus = require('http-status')

const testData = {
  header: {
    name: 'Emirhan Test',
    gsm: '05555555555',
  },
  body: {
    messages: [
      {
        text: 'Hello Samet.',
        sender: 'Emirhan',
        receiver: 'Samet',
        createdAt: '2020-01-01T18:00:00.000Z',
      },
      {
        text: 'Hello to you Emirhan.',
        sender: 'Samet',
        receiver: 'Emirhan',
        createdAt: '2020-01-01T18:05:00.000Z',
      },
      {
        text: 'Test1',
        sender: 'Emirhan',
        receiver: 'Samet',
        createdAt: '2020-01-01T18:06-00:00.000Z',
      },
      {
        text: 'Test2',
        sender: 'Emirhan',
        receiver: 'Samet',
        createdAt: '2020-01-01T18:07-00:00.000Z',
      },
      {
        text: 'Test3',
        sender: 'Emirhan',
        receiver: 'Samet',
        createdAt: '2020-01-01T18:08-00:00.000Z',
      },
      {
        text: 'Test4',
        sender: 'Emirhan',
        receiver: 'Samet',
        createdAt: '2020-01-01T18:09-00:00.000Z',
      },
    ],
  },
}

const test = (req, res) => {
  res.status(httpstatus.OK).json(testData)
}

module.exports = {
  test,
}
