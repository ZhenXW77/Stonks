const oracledb = require('oracledb');

async function run() {

  let connection;

  try {

    connection = await oracledb.getConnection({ user: "zhen.wu", password: "Q0WYYyLvTFD4OXYKnX6rK6QZ", connectionString: "oracle.cise.ufl.edu" });

    console.log("Successfully connected to Oracle Database");

    // Create a table
    await connection.execute(`Select * From Cap`);

    // Insert some data

    connection.commit();

    // Now query the rows back

    result = await connection.execute(
      `select description, done from todoitem`,
      [],
      { resultSet: true, outFormat: oracledb.OUT_FORMAT_OBJECT });

    const rs = result.resultSet;
    let row;

    while ((row = await rs.getRow())) {
      if (row.DONE)
        console.log(row.DESCRIPTION, "is done");
      else
        console.log(row.DESCRIPTION, "is NOT done");
    }

    await rs.close();

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();