

module.exports = {

  db: process.env.MONGOLAB_URI || 'mongodb://localhost:27017,localhost:27018,localhost:27019/demo',


  sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here',
};
