const PcapWriter = require('node-pcap-writer')

module.exports = {

    /**
     * @param {String} outputPath
     * @returns {PcapWriter}
     */
    startNewPcap : outputPath => {
        const t = new Date()
        const dateSection = t.toLocaleDateString() + ' as ' + t.toLocaleTimeString().replace(":", " ").replace(":",' ')
        const pcapName = `tecconPcap-${dateSection}.pcap`
        const pcapPath = ( outputPath || __dirname + "\\generated-pcaps\\" ) + pcapName
        const writer = new PcapWriter(pcapPath, 1424, 105)
        return writer

    }

}