const fs = require('fs') 
const crypto = require('crypto')
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))

/********** FUNCTION REGIS ***************/
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

const addRegisteredUser = (userid, sender, time, serials) => {
            const obj = { id: userid, name: sender, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
}

const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
}


module.exports = {
	getRegisteredRandomId,
	addRegisteredUser,
	createSerial,
	checkRegisteredUser
}