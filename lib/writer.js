const pcapw = require('pcap-writer')

module.exports = {

    /**
     * @param {String} outputPath
     * @param {String} pcapName
     * @returns {PcapWriter}
     */
    startNewPcap : (outputPath, pcapName) => {

        const t = new Date()
        pcapName = pcapName || `Teccon Capture-${t.toString().replace(":", " ").replace(":", " ").split(" GMT")[0]}.pcap`
        const pcapPath = ( outputPath || __dirname + "\\generated-pcaps\\" ) + pcapName
        const writer = pcapw.createPcapWriter(pcapPath, 1424)
        return writer

    }

}