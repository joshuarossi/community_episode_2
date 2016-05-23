"use strict"

const Bitfinex = require('bitfinex-api-node')


const api_key = process.env['BFX_API_KEY']
const api_secret = process.env['BFX_API_SECRET']


const bitfinex = new Bitfinex(api_key, api_secret)