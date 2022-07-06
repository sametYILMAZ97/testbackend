const httpstatus = require('http-status')

const testData = {
  head: {
    name: 'Emirhan',
    gsm: '05555555555',
  },
  body: {
    messages: [
      {
        text: 'Hello Samet.',
        sender: {
          name: 'Emirhan',
          gsm: '05555555555',
        },
        receiver: {
          name: 'Samet',
          gsm: '066666666666',
        },
        createdAt: '2020-01-01T18:00:00.000Z',
      },
      {
        text: 'Hello to you Emirhan.',
        sender: {
          name: 'Samet',
          gsm: '066666666666',
        },
        receiver: {
          name: 'Emirhan',
          gsm: '05555555555',
        },
        createdAt: '2020-01-01T18:05:00.000Z',
      },
      {
        text: 'Test1',
        sender: {
          name: 'Emirhan',
          gsm: '05555555555',
        },
        receiver: {
          name: 'Samet',
          gsm: '066666666666',
        },
        createdAt: '2020-01-01T18:06-00:00.000Z',
      },
      {
        text: 'Test2',
        sender: {
          name: 'Emirhan',
          gsm: '05555555555',
        },
        receiver: {
          name: 'Samet',
          gsm: '066666666666',
        },
        createdAt: '2020-01-01T18:07-00:00.000Z',
      },
      {
        text: 'Test3',
        sender: {
          name: 'Emirhan',
          gsm: '05555555555',
        },
        receiver: {
          name: 'Samet',
          gsm: '066666666666',
        },
        createdAt: '2020-01-01T18:08-00:00.000Z',
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        sender: {
          name: 'Emirhan',
          gsm: '05555555555',
        },
        receiver: {
          name: 'Samet',
          gsm: '066666666666',
        },
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
