//Random Superhero Name Console Generator: Run the program and look at the console to find out yours!
const generateRandomNumber = (num) => {
     return Math.floor(Math.random() * num);
    };

let yourSuperHero = [];
let hero = yourSuperHero;

const superHeroAttributes = {
    firstName: ['Vindicate', 'Ironside', 'Torpedo', 'Bionic','Dynamo', 'Mr. Miraculous', 'Tornado', 'Metal Man', 'Jawbreaker', 'Barrage', 'Amplify', 'Bonfire',
                 'Monsoon', 'Urchin', 'Firefly', 'Rubble', 'Blaze', 'Hurricane', 'Slingshot',' Storm', 'Surge', 'Impenetrable', ' Quicksand', 'Night', 'Watch'],

    secondName: ['Mastermind', 'Freedom', 'Captain', 'Cannonade', 'Bulletproof', 'Turbine', 'Kraken', 'Granite', 'Glazier', 'MechaMan', 'Fortitude', 'Iron', 'Fireball', 'Bear', 'Turbulence', 'Mako', 'Victory', 'Falcon', 'Tradewind', 'Rooster', 'Megalodon', 'Steamroller', 'Vigilance', 'Leviathan', 'Shadowman', 'Exodus'],    
        
    superPower: ['Accelerated Healing', 'Sonar', 'Night Vision', 'Wall Crawling', 'Controlling Machines', 'Plant Control', 'Super Speed', 'Healing Others', 
                  'Unnatural Good Luck', 'Unbreakable Bones', 'Marksmanship', 'Teleportation', 'Underwater Breathing', 'Levitation', 'Producing Light', 'Gravity Control'],
    
    weakness: ['water', 'snow', 'light', 'darkness', 'air', 'pollen', 'butterflies', 'cross walks', 'taxi cabs', 'ice cream', 'sugar', 'soda', 'limes', 'homework', 
               'daytime television', 'sound', 'ants', 'giant magnifying glass', 'square dancing', 'public places', 'mirrors', 'candles', 'sparkles', 'peanuts'],
    generate() {
        for (let attribute in superHeroAttributes) {
            let index = generateRandomNumber(superHeroAttributes[attribute].length);
            switch(attribute) {
                case 'firstName':
                    hero.push(this.firstName[index]);
                    break;
                case 'secondName':
                    hero.push(this.secondName[index]);
                    break;
                case 'superPower':
                    hero.push(this.superPower[index]);
                    break;
                case 'weakness':
                    hero.push(this.weakness[index]);
                    break;            
            };
        };
    }             
};

const getSuperName = () => {
    superHeroAttributes.generate();
    console.log(`Your Superhero Name is ${hero[0]} ${hero[1]} with the power of ${hero[2]} and a weakness of ${hero[3]}!`);
}

getSuperName()






























