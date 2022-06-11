// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, dnaBases) => {
  const newPAequor = {
    specimenNum: number,
    dna: dnaBases,
    mutate() {
      const randomPick = this.dna[Math.floor(Math.random() * 15)];
      const index = this.dna.indexOf(randomPick);
      let newDNABase = returnRandBase();
      do {
        newDNABase = returnRandBase();
        this.dna[index] = newDNABase;
      } while (newDNABase === randomPick);
      return this.dna;
    },
    compareDNA(pAequor) {
      console.log(this.dna);
      let sum = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (pAequor[i] === this.dna[i]) {
          sum++;
        };
      };
      let percentage = (sum * 100) / this.dna.length;
      return `specimen #1 and specimen #2 have ${percentage.toFixed()}% DNA in common`
    },
    willLikelySurvive() {
      let sum = 0;
      for (let dna of this.dna) {
        if (dna === 'C' || dna === 'G') {
          sum++;
        };
      };
      let percentage = (sum * 100) / this.dna.length;
      if (percentage >= 60) {
        return true;
      }
      return false;
    }
  };
  return newPAequor;
};

let counting = 1;
let arrayOfpAequor = [];
do {
  arrayOfpAequor.push(pAequorFactory(1, mockUpStrand()));
  counting++;
} while (counting <= 30);








