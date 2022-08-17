
import type { NextApiRequest, NextApiResponse } from 'next'
const mysql = require('mysql');

const client = mysql.createConnection({
    host: 'db',
    user: 'docker',
    password: 'docker',
    port: 3306,
    database: 'bulletin_board'
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        client.connect(function (err: { stack: string; }) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log('connected as id ' + client.threadId);
        });
        if (req.method === "GET") {
            await client.query('SELECT * from t_description;', (err: any, rows: any, fields: any) => {
                if (err) throw err;
                res.send(rows);
            });

        }
        else if (req.method === "POST") {
            const { user_name, content } = req.body
            if(!user_name || !content){
                return res.status(500).json({
                    error: {
                        status: 500,
                        code: "BAD_REQUEST",
                        message: "不正なリクエストです。"
                    }
                })
            }
            await client.query('INSERT INTO t_description (user_name, content) VALUES(?, ?);', [user_name, content], (err: any, rows: any, fields: any) => {
                if (err) {
                    throw err;
                }
                res.send(rows);
            });
        }
    } catch {
        return res.status(500).json({
            error: {
                status: 500,
                code: "BAD_REQUEST",
                message: "不正なリクエストです。"
            }
        })
    }
}
