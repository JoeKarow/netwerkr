const twitterUrlBase = {
    where: { name: 'Twitter' },
    update: {
        urlbase: 'https://www.twitter.com/'
    },
    create: {
        name: 'Twitter',
        urlbase: 'https://www.twitter.com/'
    }
}

const linkedInUrlBase = {
    where: { name: 'LinkedIn' },
    update: {
        urlbase: 'https://www.linkedin.com/in/'
    },
    create: {
        name: 'LinkedIn',
        urlbase: 'https://www.linkedin.com/in/'
    }
}

module.exports = { twitterUrlBase, linkedInUrlBase }
