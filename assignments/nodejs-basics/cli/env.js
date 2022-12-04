const rss_keys = Object.keys(process.env).filter(k => k.startsWith("RSS_"));

rss_keys.forEach(k => console.log(`${k}=${process.env[k]}`))
