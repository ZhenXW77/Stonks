const express = require('express');
const cors = require('cors');
const oracledb = require('oracledb');
const app = express();

app.use(cors());
app.use(express.json());


app.post('/query', async (req,res)=>{
    let connection;
    try{
        const connection = await oracledb.getConnection({ user: "name goes here", password: "password goes here", connectionString: "oracle.cise.ufl.edu/orcl" });
        let params = req.query;
        let statement;
        statement = "SELECT COUNT(*) FROM \"ZHEN.WU\".CAP"
        console.log(req.query);
        switch (params.q){
            case "movingavg":
                statement = `SELECT DATE_, AVG(close) OVER (ORDER BY DATE_ ROWS BETWEEN` + params.extradata + `PRECEDING AND CURRENT ROW) "N day moving average"
                FROM \"ZHEN.WU\".PRICE_HISTORY
                WHERE TICKER = '` + params.stock + `'
                ORDER BY 1`;
                break;

            case "range":
                statement = `SELECT DATE_, High - LOW AS "Range"
                FROM \"ZHEN.WU\".PRICE_HISTORY
                WHERE TICKER = '` + params.stock + `'
                ORDER BY DATE_`;
                break;
            
            case "change":
                statement = `SELECT DATE_, ((CLOSE - lag(CLOSE) OVER (ORDER BY DATE_))/lag(CLOSE) OVER (ORDER BY DATE_))*100 AS "Percentage Changed"
                FROM \"ZHEN.WU\".PRICE_HISTORY
                WHERE TICKER = '` + params.stock + `'
                ORDER BY DATE_`;
                break;
            
            case "roc":
                statement = `SELECT DATE_, ((CLOSE - lag(CLOSE) OVER (ORDER BY DATE_))/1) AS "Rate of Change"
                FROM \"ZHEN.WU\".PRICE_HISTORY
                WHERE TICKER = '` + params.stock + `'
                ORDER BY DATE_`;
                break;
            
            case "percentcomp":
                statement = `SELECT PRICE_HISTORY.DATE_, 
                (((PRICE_HISTORY.CLOSE - lag(PRICE_HISTORY.CLOSE) OVER (ORDER BY PRICE_HISTORY.DATE_))/lag(PRICE_HISTORY.CLOSE) OVER (ORDER BY PRICE_HISTORY.DATE_))*100 - "Second"."Percent_Change2") AS "Difference",
                ((PRICE_HISTORY.CLOSE - lag(PRICE_HISTORY.CcLOSE) OVER (ORDER BY PRICE_HISTORY.DATE_))/lag(PRICE_HISTORY.CLOSE) OVER (ORDER BY PRICE_HISTORY.DATE_))*100 AS "Percent_Change1", 
                "Second"."Percent_Change2"c
                FROM \"ZHEN.WU\".PRICE_HISTORY FULL OUTER JOINc
                            (SELECT DATE_, ((CLOSE - lag(CLcOSE) OVER (ORDER BY DATE_))/lag(CLOSE) OVER (ORDER BY DATE_))*100 AS "Percent_Change2"
                             FROM \"ZHEN.WU\".PRICE_HISTORY
                             WHERE TICKER = '` + params.extradata + `'
                             ORDER BY DATE_) "Second"
                ON PRICE_HISTORY.DATE_ = "Second".DATE_
                WHERE PRICE_HISTORY.Ticker = '` + params.stock + `'
                ORDER BY PRICE_HISTORY.DATE_`;
                break;
            
            case "count":
                statement = `SELECT COUNT(*) FROM \"ZHEN.WU\".PRICE_HISTORY`;
                //console.log("This ran");
                break;

        }

        const result = await connection.execute(statement);

        
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json("Something went wrong.");
        console.log(err);
    } finally {
        if (connection) {
          try {
            await connection.close();
          } catch (err) {
            console.error(err);
          }
        }
    }
});


app.listen(5000, ()=> {
      console.log(`app is running on port 3000`);
});