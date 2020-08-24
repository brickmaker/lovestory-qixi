// This is a programmer's love story.

const charon = new Person("dongdong");
charon.girlFriend(); // Error: ObjectNotFound

const pluto = new Person("yixin");

charon.addEventListener(pluto.appear, function (event) {
    // once your apperance
    charon.crazyFor(event.target);
});

charon.setGirlFriend = function (person) {
    if (person === pluto) { // check the right person
        do {
            charon.persuit(pluto);
            if (together(charon, pluto)) break;
        } while (true); // endless persuit
        this.person = person;
        console.log('// Congratulation, Lucky guy!')
        return this;
    } else {
        return null;
    }
}

charon.setGirlFriend(pluto);

charon.addEventListener(pluto.seperate, function (event) {
    setInterval(function () {
        charon.miss(event.target);
    }, 1000 * 3600); // miss you every second
});

const promise = new Promise(makeCommitment(charon, pluto))
    .then(charon.getMarriedTo(pluto))
    .then(charon.liveHappilyWith(pluto));

