let modInfo = {
	name: "The Fictional Googology Tree",
	id: "fictional-googology-tree-v1",
	author: "FG Modder",
	pointsName: "Googological Value",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal(0),
	offlineLimit: 1,
}

let VERSION = {
	num: "1.0",
	name: "The 5 Pages Update",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v1.0 - The 5 Pages Update</h3><br>
		- Added Layer R1: Regularity & Finitephile (Classes 0 - VIII).<br>
		- Added Layer R2: Omegaphile & Zetaphile (Classes IX - XXIII).<br>
		- Added Layer R3: Hyperdefinitional Regiment (Classes XXIV - XXX).<br>
		- Added Layer R4: Chapter 2 Escalation (Classes XXXI - XLVII).<br>
		- Added Layer R5: Singularity & Chapter 3 (Classes LX - LXXI).`

let winText = `Congratulations! You have transcended all 5 Pages of The List of Numbers and reached the Post-Primordial Classification!`

var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

function canGenPoints(){
	return true
}

// Custom Fictional Googology Milestone Display
function getFGStage(pts) {
	if (pts.lt("1e100")) return "Class 0: Nullum (Finite Scale)"
	if (pts.lt("1e1000")) return "Class I: Tienum (Transfinite Ordinals / Ω)"
	if (pts.lt("1e10000")) return "Class II-IV: Absility → Terminus"
	if (pts.lt("1e100000")) return "Class V-VIII: Totality → Conkept"
	if (pts.lt("1e1000000")) return "Page 2 (Class IX-XVII): Altar → Limitre → Barren"
	if (pts.lt("1e100000000")) return "Page 2 (Class XVIII-XXIII): Absolution → Triolage"
	if (pts.lt("1e10000000000")) return "Page 3 (Class XXIV-XXX): Ethereal → Moonlapse → Oloexum"
	if (pts.lt("ee15")) return "Page 4 (Chapter 2): Classes XXXI to XLVII"
	return "Page 5 (Singularity & Chapter 3): Class LX to Post-Primordial"
}

function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)

	// Page 1 (R1) Upgrades & Buyables
	if (hasUpgrade('r1', 11)) gain = gain.times(upgradeEffect('r1', 11))
	if (hasUpgrade('r1', 12)) gain = gain.times(upgradeEffect('r1', 12))
	if (hasUpgrade('r1', 13)) gain = gain.times(upgradeEffect('r1', 13))
	if (hasUpgrade('r1', 21)) gain = gain.pow(1.08)
	gain = gain.times(buyableEffect('r1', 11))

	// Page 2 (R2) Boosts
	if (hasUpgrade('r2', 11)) gain = gain.times(upgradeEffect('r2', 11))
	if (hasUpgrade('r2', 13)) gain = gain.pow(1.12)
	gain = gain.times(buyableEffect('r2', 11))

	// Page 3 (R3) Boosts
	if (hasUpgrade('r3', 11)) gain = gain.times(upgradeEffect('r3', 11))
	if (hasUpgrade('r3', 12)) gain = gain.pow(1.15)

	// Page 4 (R4) Boosts
	if (hasUpgrade('r4', 11)) gain = gain.pow(1.25)

	// Page 5 (R5) Boosts
	if (hasUpgrade('r5', 11)) gain = gain.pow(1.5)

	// Challenge Nerf
	if (inChallenge('r1', 11)) gain = gain.pow(0.5)

	return gain
}

function addedPlayerData() { return {
}}

var displayThings = [
	function() {
		return "Current Wiki Classification: <b style='color:#66ffcc'>" + getFGStage(player.points) + "</b>"
	}
]

function isEndgame() {
	return hasUpgrade('r5', 13)
}

var backgroundStyle = {
}

function maxTickLength() {
	return(3600)
}

function fixOldSave(oldVersion){
}
