#!/usr/bin/env node

const mounter = require('..')
const {getOptions} = require("./options")

let options = getOptions(1)

let t = options.t * 60
mounter.writePcap(options.u, options.o, t, options.l,options.v)
setInterval( () => mounter.writePcap(options.u, options.o, t, options.l, options.v), t * 1000)