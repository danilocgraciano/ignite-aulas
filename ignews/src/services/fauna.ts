import { Client } from 'faunadb';

export const fauna = new Client({
    domain:'localhost',
    port: 8443,
    scheme: 'http',
    secret: process.env.FAUNADB_KEY
});