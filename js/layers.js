// =========================================================================
// PAGE 1: REGULARITY & FINITEPHILE REGIMENTS (Classes 0 - VIII)
// =========================================================================
addLayer("r1", {
    name: "Finitephile",
    symbol: "Ω",
    position: 0,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10),
    resource: "Finitephile Essence",
    baseResource: "Googological Value",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.5,
    gainMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('r1', 22)) mult = mult.times(upgradeEffect('r1', 22))
        if (hasUpgrade('r2', 12)) mult = mult.times(upgradeEffect('r2', 12))
        if (hasChallenge('r1', 11)) mult = mult.times(100)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "f", description: "F: Reset for Finitephile Essence", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    passiveGeneration() {
        return hasMilestone('r2', 0) ? 0.5 : 0
    },
    milestones: {
        0: {
            requirementDescription: "100 Finitephile Essence (Reach Class I: Tienum)",
            effectDescription: "Unlock the Ordinal Iteration Buyable.",
            done() { return player.r1.points.gte(100) }
        },
        1: {
            requirementDescription: "1e12 Finitephile Essence (Reach Class V: Totality)",
            effectDescription: "Unlock the Zeroid Paradox Challenge.",
            done() { return player.r1.points.gte(1e12) }
        }
    },
    buyables: {
        11: {
            title: "Fast-Growing Hierarchy",
            unlocked() { return hasMilestone('r1', 0) },
            cost(x) { return new Decimal(100).times(Decimal.pow(4, x)) },
            display() {
                return "Iterate f_α(n) to multiply Googological Value.<br>Level: " + format(getBuyableAmount(this.layer, this.id)) +
                "<br>Effect: " + format(this.effect()) + "x" +
                "<br>Cost: " + format(this.cost()) + " Finitephile Essence"
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let base = hasUpgrade('r1', 23) ? 3.5 : 2.5
                return Decimal.pow(base, x)
            }
        }
    },
    challenges: {
        11: {
            name: "Kahzoh Zeroid Collapse",
            challengeDescription: "Regress back into Regiment 0. Googological Value gain is raised to ^0.5.",
            goalDescription: "1e18 Googological Value",
            rewardDescription: "Gain 100x more Finitephile Essence and unlock Terminus Expansion.",
            canComplete: function() {return player.points.gte(1e18)},
            unlocked() { return hasMilestone('r1', 1) }
        }
    },
    upgrades: {
        11: {
            title: "Class 0: Googol & Graham",
            description: "Multiply Googological Value by 4x to surpass standard finite bounds.",
            cost: new Decimal(1),
            effect() { return new Decimal(4) },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        12: {
            title: "Class I: Cantor's Infinity",
            description: "Finitephile Essence boosts Googological Value.",
            cost: new Decimal(5),
            unlocked() { return hasUpgrade('r1', 11) },
            effect() { return player[this.layer].points.add(1).pow(0.45) },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        13: {
            title: "Class II: Absility",
            description: "Googological Value boosts itself through self-referential loops.",
            cost: new Decimal(25),
            unlocked() { return hasUpgrade('r1', 12) },
            effect() { return player.points.add(1).log10().add(1).pow(1.5) },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        21: {
            title: "Class IV: Terminus",
            description: "Raise Googological Value gain to ^1.08.",
            cost: new Decimal(2500),
            unlocked() { return hasUpgrade('r1', 13) },
        },
        22: {
            title: "Class VI: Outerconst",
            description: "Googological Value boosts Finitephile Essence gain.",
            cost: new Decimal(50000),
            unlocked() { return hasUpgrade('r1', 21) },
            effect() { return player.points.add(1).log10().add(1).pow(1.2) },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        23: {
            title: "Class VIII: Conkept",
            description: "Increase the Fast-Growing Hierarchy buyable base from 2.5 to 3.5.",
            cost: new Decimal(1e8),
            unlocked() { return hasUpgrade('r1', 22) },
        }
    }
})

// =========================================================================
// PAGE 2: OMEGAPHILE & ZETAPHILE REGIMENTS (Classes IX - XXIII)
// =========================================================================
addLayer("r2", {
    name: "Zetaphile",
    symbol: "ζ",
    position: 0,
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
    }},
    color: "#38B6FF",
    requires: new Decimal(1e15),
    resource: "Zetaphile Cores",
    baseResource: "Finitephile Essence",
    baseAmount() {return player.r1.points},
    type: "normal",
    exponent: 0.35,
    branches: ["r1"],
    gainMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('r3', 11)) mult = mult.times(10)
        return mult
    },
    gainExp() { return new Decimal(1) },
    row: 1,
    hotkeys: [
        {key: "z", description: "Z: Reset for Zetaphile Cores", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return player.r1.points.gte(1e10) || player.r2.unlocked },
    milestones: {
        0: {
            requirementDescription: "5 Zetaphile Cores (Reach Class XI: Limitre)",
            effectDescription: "Generate 50% of Finitephile Essence gain per second automatically.",
            done() { return player.r2.points.gte(5) }
        },
        1: {
            requirementDescription: "1,000 Zetaphile Cores (Reach Class XVIII: Absolution)",
            effectDescription: "Keep Page 1 upgrades on Page 2 resets.",
            done() { return player.r2.points.gte(1000) }
        }
    },
    buyables: {
        11: {
            title: "Numkerous Order Scaling",
            cost(x) { return new Decimal(2).times(Decimal.pow(3, x)) },
            display() {
                return "Amplify Googological Value across Classes IX-XVII.<br>Level: " + format(getBuyableAmount(this.layer, this.id)) +
                "<br>Effect: " + format(this.effect()) + "x" +
                "<br>Cost: " + format(this.cost()) + " Zetaphile Cores"
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) { return Decimal.pow(10, x) }
        }
    },
    upgrades: {
        11: {
            title: "Class X: The Altar",
            description: "Zetaphile Cores massively boost Googological Value.",
            cost: new Decimal(1),
            effect() { return player[this.layer].points.add(1).pow(2.5) },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        12: {
            title: "Class XIII: Barren",
            description: "Zetaphile Cores boost Finitephile Essence gain.",
            cost: new Decimal(10),
            unlocked() { return hasUpgrade('r2', 11) },
            effect() { return player[this.layer].points.add(1).pow(1.8) },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        13: {
            title: "Class XXIII: Triolage",
            description: "Raise Googological Value gain to ^1.12.",
            cost: new Decimal(250),
            unlocked() { return hasUpgrade('r2', 12) },
        }
    }
})

// =========================================================================
// PAGE 3: HYPERDEFINITIONAL REGIMENT (Classes XXIV - XXX)
// =========================================================================
addLayer("r3", {
    name: "Hyperdefinitional",
    symbol: "℧",
    position: 0,
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
    }},
    color: "#B84DFF",
    requires: new Decimal(1e8),
    resource: "Oloexum Shards",
    baseResource: "Zetaphile Cores",
    baseAmount() {return player.r2.points},
    type: "normal",
    exponent: 0.3,
    branches: ["r2"],
    gainMult() { return new Decimal(1) },
    gainExp() { return new Decimal(1) },
    row: 2,
    hotkeys: [
        {key: "h", description: "H: Reset for Oloexum Shards", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return player.r2.points.gte(1e5) || player.r3.unlocked },
    upgrades: {
        11: {
            title: "Class XXIV: Ethereal",
            description: "Oloexum Shards boost Googological Value and multiply Zetaphile Cores by 10x.",
            cost: new Decimal(1),
            effect() { return player[this.layer].points.add(1).pow(6) },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        12: {title: "Class XXVI: Abstraction",
description: "Break standard definitions. Raise Googological Value gain to ^1.15.",
cost: new Decimal(15),
unlocked() { return hasUpgrade('r3', 11) },
},
13: {
title: "Class XXX: Oloexum",
description: "Complete Chapter 1 of The List of Numbers. Unlock Chapter 2.",
cost: new Decimal(500),
unlocked() { return hasUpgrade('r3', 12) },
}
}
})
// =========================================================================
// PAGE 4: CHAPTER 2 ESCALATION (Classes XXXI - XLVII)
// =========================================================================
addLayer("r4", {
name: "Chapter 2",
symbol: "Ⅱ",
position: 0,
startData() { return {
unlocked: false,
points: new Decimal(0),
}},
color: "#FF5733",
requires: new Decimal(1e5),
resource: "Chapter II Transcendences",
baseResource: "Oloexum Shards",
baseAmount() {return player.r3.points},
type: "normal",
exponent: 0.25,
branches: ["r3"],
gainMult() { return new Decimal(1) },
gainExp() { return new Decimal(1) },
row: 3,
hotkeys: [
{key: "c", description: "C: Reset for Chapter II Transcendences", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
],
layerShown(){ return hasUpgrade('r3', 13) || player.r4.unlocked },
upgrades: {
11: {
title: "Class XXXI: Beyond Oloexum",
description: "Raise Googological Value gain to ^1.25.",
cost: new Decimal(1),
},
12: {
title: "Class XLVII: Chapter 2 Apex",
description: "Prepare to breach the locked Singularity barrier.",
cost: new Decimal(50),
unlocked() { return hasUpgrade('r4', 11) },
}
}
})
// =========================================================================
// PAGE 5: SINGULARITY, CHAPTER 3 & POST-PRIMORDIAL (Classes LX - CI)
// =========================================================================
addLayer("r5", {
name: "Singularity",
symbol: "◈",
position: 0,
startData() { return {
unlocked: false,
points: new Decimal(0),
}},
color: "#FFD700",
requires: new Decimal(1000),
resource: "Singularity Keys",
baseResource: "Chapter II Transcendences",
baseAmount() {return player.r4.points},
type: "normal",
exponent: 0.2,
branches: ["r4"],
gainMult() { return new Decimal(1) },
gainExp() { return new Decimal(1) },
row: 4,
hotkeys: [
{key: "s", description: "S: Reset for Singularity Keys", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
],
layerShown(){ return hasUpgrade('r4', 12) || player.r5.unlocked },
upgrades: {
11: {
title: "Class LX: Unlock the Singularity",
description: "Bypass the wiki lock. Raise Googological Value gain to ^1.5.",
cost: new Decimal(1),
},
12: {
title: "Class LXXI: Chapter 3 Completion",
description: "Surpass all locked Chapter 3 classifications.",
cost: new Decimal(10),
unlocked() { return hasUpgrade('r5', 11) },
},
13: {
title: "Class CI: Post-Primordial Classification",
description: "Reach the end of all 5 pages of The List of Numbers and beat the game!",
cost: new Decimal(100),
unlocked() { return hasUpgrade('r5', 12) },
}
}
})
