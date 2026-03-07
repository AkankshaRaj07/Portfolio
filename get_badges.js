import fs from 'fs';
import https from 'https';

const data = JSON.stringify({
    query: `
        query userBadges($username: String!) {
            matchedUser(username: $username) {
                badges {
                    displayName
                    icon
                }
            }
        }`,
    variables: { username: "7IZevn81O2" }
});

const options = {
    hostname: 'leetcode.com',
    path: '/graphql',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = https.request(options, res => {
    let body = '';
    res.on('data', d => body += d);
    res.on('end', () => {
        fs.writeFileSync('src/components/About/leetcode_badges.json', body);
        console.log('Badges saved');
    });
});

req.on('error', e => console.error(e));
req.write(data);
req.end();
