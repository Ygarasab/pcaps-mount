#!/usr/bin/env node

const mounter = require('..')
const {getOptions} = require("./options")

let options = getOptions(0)

mounter.writePcap(options.u, options.o, options.t, options.l, options.v)