let log = console.log

function User(name, email, phone, badge, access, loops, tag, log, id, cookies, ip_s, config, role, description) {
    this.person = {
        name,
        phone,
        badge,
        id,
        description,
        email
    }
    this.permissions = {
        access,
        role
    }
    this.security = {
        cookies,
        ip_s,
        config
    }
    this.app = {
        loops,
        tag,
        log
    }

}
exports.User = User

function Legend(name, email, phone, badge, access, loops, tag, log, id, cookies, ip_s, config, role, description) {
    User.call(this, name, email, phone, badge, access, loops, tag, log, id, cookies, ip_s, config, role, description)

    this.legend = 'true'
}

Legend.prototype = Object.create(User.prototype)

Object.defineProperty(Legend.prototype, 'constructor', {
    value: Legend,
    enumerable: false,
    writable: true
})

Legend.prototype.status = function () {
    log('encompassed')
}

let Sean = new Legend('sean', 'sean@sean.com', '888-999-1818', '12345', 'total', 'default', '@sean', 'default', 'default', 'default', ['12.23.34.565', '32.42.25.263'], 'default', 'dev', 'here to be un-not-here, as the coders say')

exports.Sean = Sean

exports.Legend = Legend.prototype

function Server(port, host) {
    this.config = {
        port,
        host
    }
}
exports.Server = Server

function IP_s(ip_s, time, User, cors) {
    this.ip_s = {
        time,
        ip_s,
        User,
        cors
    }
}

exports.IP_s = IP_s