var data = require('./data/devfest-2015.js');


exports.listerTousLesPresentateurs = function() {
    return data.speakers
}


exports.listerTopPresentateurs = function() {
    return data.speakers.filter(function(sp) {
        return sp.topspeaker == true
    })
}

exports.listerToutesLesSessions = function() {
    return data.sessions
}

exports.trouverUneSession = function(id) {
    return data.sessions.find(function(sessions) {
        return sessions.id == id
    })
}