import lighthouserc from "./lighthouserc"
module.exports = {
    controller: (params) => {
        params.forEach((i) => {
            if (i === "main") {
            lighthouserc.ci.collect.url.push(`http://localhost:3000/`)
            }
            else {
                lighthouserc.ci.collect.url.push(`http://localhost:3000/${i}`)
            }
        })
    }
}