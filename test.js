const semver = require('semver')

arr = [
{ gitTag: 'v0.0.4', version: '0.0.4', channels: [ null ] },
  {
    gitTag: 'v1.0.0-0A.is.legal',
    version: '1.0.0-0A.is.legal',
    channels: [ null ]
  },
  {
    gitTag: 'v1.0.0-alpha',
    version: '1.0.0-alpha',
    channels: [ null ]
  },
  {
    gitTag: 'v1.0.0-alpha+beta',
    version: '1.0.0-alpha',
    channels: [ null ]
  },
  {
    gitTag: 'v1.0.0-alpha.1',
    version: '1.0.0-alpha.1',
    channels: [ null ]
  },
  {
    gitTag: 'v1.0.0-alpha.0valid',
    version: '1.0.0-alpha.0valid',
    channels: [ null ]
  },
  {
    gitTag: 'v1.0.0-alpha.beta',
    version: '1.0.0-alpha.beta',
    channels: [ null ]
  },
  {
    gitTag: 'v1.0.0-alpha.beta.1',
    version: '1.0.0-alpha.beta.1',
    channels: [ null ]
  },
  {
    gitTag: 'v1.0.0-alpha-a.b-c-somethinglong+build.1-aef.1-its-okay',
    version: '1.0.0-alpha-a.b-c-somethinglong',
    channels: [ null ]
  },
  {
    gitTag: 'v1.0.0-alpha0.valid',
    version: '1.0.0-alpha0.valid',
    channels: [ null ]
  },
  { gitTag: 'v1.0.0-beta', version: '1.0.0-beta', channels: [ null ] },
  {
    gitTag: 'v1.0.0-rc.1+build.1',
    version: '1.0.0-rc.1',
    channels: [ null ]
  },
  { gitTag: 'v1.0.0', version: '1.0.0', channels: [ null ] },
  {
    gitTag: 'v1.0.0+0.build.1-rc.10000aaa-kk-0.1',
    version: '1.0.0',
    channels: [ null ]
  },
  {
    gitTag: 'v1.1.2-prerelease+meta',
    version: '1.1.2-prerelease',
    channels: [ null ]
  },
  { gitTag: 'v1.1.2+meta', version: '1.1.2', channels: [ null ] },
  { gitTag: 'v1.1.2+meta-valid', version: '1.1.2', channels: [ null ] },
  { gitTag: 'v1.1.7', version: '1.1.7', channels: [ null ] },
  {
    gitTag: 'v1.2.3----R-S.12.9.1--.12+meta',
    version: '1.2.3----R-S.12.9.1--.12',
    channels: [ null ]
  },
  {
    gitTag: 'v1.2.3----RC-SNAPSHOT.12.9.1--.12',
    version: '1.2.3----RC-SNAPSHOT.12.9.1--.12',
    channels: [ null ]
  },
  {
    gitTag: 'v1.2.3----RC-SNAPSHOT.12.9.1--.12+788',
    version: '1.2.3----RC-SNAPSHOT.12.9.1--.12',
    channels: [ null ]
  },
  {
    gitTag: 'v1.2.3-SNAPSHOT-123',
    version: '1.2.3-SNAPSHOT-123',
    channels: [ null ]
  },
  { gitTag: 'v1.2.3-beta', version: '1.2.3-beta', channels: [ null ] },
  { gitTag: 'v1.2.3', version: '1.2.3', channels: [ null ] },
  {
    gitTag: 'v2.0.0-rc.1+build.123',
    version: '2.0.0-rc.1',
    channels: [ null ]
  },
  { gitTag: 'v2.0.0', version: '2.0.0', channels: [ null ] },
  { gitTag: 'v2.0.0+build.1848', version: '2.0.0', channels: [ null ] },
  {
    gitTag: 'v2.0.1-alpha.1227',
    version: '2.0.1-alpha.1227',
    channels: [ null ]
  },
  {
    gitTag: 'v10.2.3-DEV-SNAPSHOT',
    version: '10.2.3-DEV-SNAPSHOT',
    channels: [ null ]
  },
  { gitTag: 'v10.20.30', version: '10.20.30', channels: [ null ] }

]

arr.sort((tag1, tag2) => {
        if (semver.lt(tag1.gitTag, tag2.gitTag)) {
        	console.log(tag1.gitTag + " < " + tag2.gitTag)
          return -1;
        }
        else if (semver.gt(tag1.gitTag, tag2.gitTag)) {
        	console.log(tag1.gitTag + " > " + tag2.gitTag)
          return 1;
        }
        return tag1.gitTag < tag2.gitTag;
        return 0;
      })


console.log(arr)
console.log(semver.valid(semver.coerce("99999999999999999999999.999999999999999999.99999999999999999")))