const yargs = require('yargs')

const options = 

module.exports = {
    getOptions : alg => {

        let td = alg ? "Capture time for each pcap, in minutes" : "Capture time, in seconds"

        return yargs

        .usage("Usage : -t <capture-time>")
        .option("u", {alias : "uri", describe : "Web Socket server to listen to", type : "string"})
        .option("t", {alias : "capture-time", describe : td, type : 'number', required : true})
        .option("o", {alias : "output-path", describe : "Output path for the pcap file", type : "string",  default:"./"})
        .option("l", {alias : "packet-length", describe : "Packet length for each individual packet within the Buffer", type : "number", default : 1424})
        .option("v", {alias : "verbose", describe : "Activates verbose", type : "boolean", default : false})
        .argv

    }
}