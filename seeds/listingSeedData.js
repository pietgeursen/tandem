
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('listings').del(),

    // Inserts seed entries
    knex('listings').insert({listingID: 1, userID: 2, origin: 'Taumarunui', destination: 'Whanganui',dateTime: '2016-06-05', description: 'Ill be going by horse & carriage at the crack of dawn, by crack of dawn I mean 6am.  Will make a stop for breakfast and coffee, should be there by 8.30 ish. '}),
    knex('listings').insert({listingID: 2, userID: 3, origin: 'Cromwell', destination: 'Nightcaps', dateTime: '2016-06-05',description: 'Taking the horses down to Nightcaps, expect slow travelling and lots of stops. I wont drive over 60km/h under any circumstances!.  Leaving around midday and we will get there when we get there.'}),
    knex('listings').insert({listingID: 3, userID: 1, origin: 'Kaeo', destination: 'Te Kuiti', dateTime: '2016-06-06',description: 'Coming down 8am, stopping in the big smoke for breakfast and then heading on to the metroplis of Te Kuiti. Would prefer a single passenger who knows how to travel light'}),
    knex('listings').insert({listingID: 7, userID: 8, origin: 'Kaeo', destination: 'Wellington', dateTime: '2016-06-07',description: 'There will be singing!  And plenty of stops long the way if anything grabs my eye.  Travelling around NZ with no fixed timing so who knows where we will end up.'}),
    knex('listings').insert({listingID: 8, userID: 1, origin: 'Kaeo', destination: 'Hamilton', dateTime: '2016-06-09',description: 'Will be travelling with two dogs and three children who love Barney! my youngest son loves sheep so we have to stop everytime he sees one.  Its you job to distract him. Single person only.'}),
    knex('listings').insert({listingID: 4, userID: 5, origin: 'Taumarunui', destination: 'Te Kuiti', dateTime: '2016-06-08',description: 'Ugh I love coffee, leaving at 8am, trip may be cancelled if its raining or Im not in the mood.  Have to head up to Te Kuiti for my mothers 80th and am not in the mood.  Any excuse to get out of it.'}),
    knex('listings').insert({listingID: 5, userID: 7, origin: 'Kaeo', destination: 'Te Kuiti', dateTime: '2016-06-11',description: 'Im hoping to get rich in Te Kuiti'}),
    knex('listings').insert({listingID: 6, userID: 6, origin: 'Kaeo', destination: 'Te Kuiti', dateTime: '2016-06-10', description: 'Im a terrible driver, but if thats ok with you then .. yea.  You will have to keep reminding me to stay on the left hand side of the road and what the road signs mean.  This experience is not for the faint hearted.' })
  );
};
