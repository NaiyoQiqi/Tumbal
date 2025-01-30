const fs = require('fs');
const chalk = require('chalk');

global.ytname = 'HirakoSenpai' // Nama YouTube Kamu
global.socialm = 'Feyy.S15' // Nama GitHub Kamu
global.location = '1228, Lorong 7, Kampung Merbau Sempak, 47000 Sungai Buloh, Selangor, Malaysia' // Lokasi Kamu

global.botName = 'Xenovia AI' // Nama Bot Kamu
global.ownerNumber = '6289601671818' // Nomor Kamu
global.ownerName = 'Nyokki.Ho' // Nama Kamu
global.website = 'https://midea.com' // Web Kamu
global.wagc = 'https://chat.whatsapp.com/HFavmvjxq6rJCWZrF2fott' // Web Kamu
global.packname = 'Xenovia AI' // Nama Pack
global.author = 'Xenovia AI' // Nama Author
global.creator = '6289601671818@s.whatsapp.net' // Nomor Creator
global.premium = ['6289601671818', '628988219165', '6281227978977'] // User Premium
global.hituet = 0 // Hit Command
global.prefa = ''; // Prefix
global.tempatDB = 'database.json'; // Tempat Database

global.saluran = '' // ID Saluran Kamu
global.saluranName = '' // Nama Saluran Kamu
global.sessionName = 'session' // Nama Folder Sesi Bot Kamu

global.panel = 'https://domainlu.my.id'; // Link Panel Kamu
global.cred = 'ptla_klUmglK7fADLZ5Br8jOwSh65IDeWAYRZuI6iQ1BIj'; // API PTLA Kamu
global.apiuser = 'ptlc_QTOmFi0ZDh0QBE5LtwCkBzSFWPZTIpz901lNybolo'; // API PTLC Kamu
global.eggs = '15', // Eggs Number (Recommended)
global.nets = '5', // Nets Number (Recommended)
global.location = '1', // Location Number (Recommended)

global.typereply = 'v4' // Gaya Reply v1-v4
global.autoblocknumber = '1' // Auto Block Number
global.antiforeignnumber = '1' // Anti Foreign Number
global.welcome = true // Auto Welcome Msg
global.anticall = false // Anti Call
global.autoswview = true // Auto View Status
global.adminevent = true // Admin Event Msg
global.groupevent = true // Group Event Msg

global.limit = {
	free: 100, // Limit User Non-premium
	premium: 9999, // Limit User Premium
	vip: 'VIP' // Limit User VIP 👑
};

global.uang = {
	free: 10000, // Uang User Non-premium
	premium: 1000000, // Uang User Premium
	vip: 10000000 // Uang User VIP 👑
};

global.bot = {
	limit: 0, // Limit Awal Bot
	uang: 0 // Uang Awal Bot
};

global.game = {
	suit: {}, // Sesi Game Suit
	menfes: {}, // Sesi Menfess
	tictactoe: {}, // Sesi Tictactoe
	kuismath: {}, // Sesi Kuis Mathematics
	tebakbom: {}, // Sesi Tebak Bom
};

global.mess = {
	admin: 'Fitur ini khusus buat admin aja ya, Kak! 🫢',
	botAdmin: 'Xenovia harus jadi admin dulu biar bisa jalanin ini! 😭',
	done: 'Done Kak! ✨',
	error: 'Eh, ada yang salah nih... coba lagi ya, Kak! 😖',
	group: 'Eits, fitur ini cuma bisa dipakai di grup~ 🫡',
	limit: 'Yah, limit penggunaan Kakak udah habis... 😢\n\nCoba ketik .buy untuk membeli dan menambah limit ✨',
	noCmd: 'Hmm... perintahnya gak ada di daftar Xenovia nih. Coba cek lagi ya, Kak! 🤔',
	nsfw: 'Fitur NSFW dimatikan di grup ini, coba minta izin ke admin dulu ya~ 🫣',
	owner: 'Hanya pemilik yang bisa akses fitur ini, Kak! 👑',
	premium: 'Fitur ini cuma buat pengguna premium, Kak! 🌟',
	private: 'Fitur ini cuma bisa dipakai di chat pribadi, Kak! 💌',
	success: 'Yeay, berhasil! 🎉',
	wait: 'Tunggu sebentar ya, Kak... Xenovia lagi proses nih! ⏳🤗'
};

global.thumb = fs.readFileSync('./media/icon.png'); // Buffer Image
global.thumbUrl = 'https://i.ibb.co.com/p2nKgqP/image.png'; // Url Image

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})