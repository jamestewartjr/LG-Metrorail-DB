
const resetDB = () => {

  beforeEach( () => {
    dropTables()
    createTables()
    seedTables()
  })

}

modules.exports = { resetDB }




//run once before all tests
before(function (done) {

    //test if database is populated
    var User = mongoose.model('User');
    User.count({})
        .then(function (count) {
            if (count === 0) {
                //no content so safe to delete
                deleteAfterRun = true;
                //add test data
                return fixtures.ensureTestData();
            } else {
                console.log('Test database already exists');
            }
        })
        .then(function() {
            done();
        });

});

//run once after all tests
after(function (done) {
    if (deleteAfterRun) {
        console.log('Deleting test database');
        mongoose.connection.db.dropDatabase(done);
    } else {
        console.log('Not deleting test database because it already existed before run');
        done();
    }
});
