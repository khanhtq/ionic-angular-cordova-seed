angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data

    movies = [{
        "id": "10015",
        "title": "The Notebook",
        "year": 2004,
        "mpaa_rating": "PG-13",
        "runtime": 124,
        "critics_consensus": "It's hard not to admire its unabashed sentimentality, but The Notebook is too clumsily manipulative to rise above its melodramatic cliches.",
        "release_dates": {
            "theater": "2004-06-25",
            "dvd": "2005-02-08"
        },
        "ratings": {
            "critics_rating": "Rotten",
            "critics_score": 52,
            "audience_rating": "Upright",
            "audience_score": 85
        },
        "synopsis": "",
        "posters": {
            "thumbnail": "http://content7.flixster.com/movie/11/15/95/11159565_mob.jpg",
            "profile": "http://content7.flixster.com/movie/11/15/95/11159565_pro.jpg",
            "detailed": "http://content7.flixster.com/movie/11/15/95/11159565_det.jpg",
            "original": "http://content7.flixster.com/movie/11/15/95/11159565_ori.jpg"
        },
        "abridged_cast": [{
            "name": "Ryan Gosling",
            "id": "162654751",
            "characters": [
                "Noah"
            ]
        }, {
            "name": "Rachel McAdams",
            "id": "162652838",
            "characters": [
                "Allie"
            ]
        }, {
            "name": "James Garner",
            "id": "162657112",
            "characters": [
                "Noah Calhoun"
            ]
        }, {
            "name": "Gena Rowlands",
            "id": "162653219",
            "characters": [
                "Allie Calhoun"
            ]
        }, {
            "name": "James Marsden",
            "id": "162684857",
            "characters": [
                "Lon Hammond"
            ]
        }],
        "links": {
            "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/10015.json",
            "alternate": "http://www.rottentomatoes.com/m/notebook/",
            "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/10015/cast.json",
            "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/10015/clips.json",
            "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/10015/reviews.json",
            "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/10015/similar.json"
        }
    }, {
        "id": "1789",
        "title": "War of the Worlds",
        "year": 2005,
        "mpaa_rating": "PG-13",
        "runtime": 117,
        "critics_consensus": "Steven Spielberg's adaptation of War of the Worlds delivers on the thrill and paranoia of H.G. Wells' classic novel while impressively updating the action and effects for modern audiences.",
        "release_dates": {
            "theater": "2005-06-29",
            "dvd": "2005-11-22"
        },
        "ratings": {
            "critics_rating": "Fresh",
            "critics_score": 74,
            "audience_rating": "Spilled",
            "audience_score": 41
        },
        "synopsis": "",
        "posters": {
            "thumbnail": "http://content8.flixster.com/movie/10/86/82/10868202_mob.jpg",
            "profile": "http://content8.flixster.com/movie/10/86/82/10868202_pro.jpg",
            "detailed": "http://content8.flixster.com/movie/10/86/82/10868202_det.jpg",
            "original": "http://content8.flixster.com/movie/10/86/82/10868202_ori.jpg"
        },
        "abridged_cast": [{
            "name": "Tom Cruise",
            "id": "162652763",
            "characters": [
                "Ray Ferrier"
            ]
        }, {
            "name": "Dakota Fanning",
            "id": "162652764",
            "characters": [
                "Rachel Ferrier"
            ]
        }, {
            "name": "Miranda Otto",
            "id": "162652765",
            "characters": [
                "Mary Ann"
            ]
        }, {
            "name": "Justin Chatwin",
            "id": "162652766",
            "characters": [
                "Robbie Ferrier"
            ]
        }, {
            "name": "Tim Robbins",
            "id": "162655168",
            "characters": [
                "Ogilvy"
            ]
        }],
        "alternate_ids": {
            "imdb": "0407304"
        },
        "links": {
            "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/1789.json",
            "alternate": "http://www.rottentomatoes.com/m/war_of_the_worlds/",
            "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/1789/cast.json",
            "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/1789/clips.json",
            "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/1789/reviews.json",
            "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/1789/similar.json"
        }
    }, {
        "id": "669",
        "title": "The Longest Yard",
        "year": 2005,
        "mpaa_rating": "PG-13",
        "runtime": 113,
        "critics_consensus": "This Yard has some laughs but missing from this remake is the edginess of the original.",
        "release_dates": {
            "theater": "2005-05-27",
            "dvd": "2004-08-03"
        },
        "ratings": {
            "critics_rating": "Rotten",
            "critics_score": 31,
            "audience_rating": "Upright",
            "audience_score": 62
        },
        "synopsis": "",
        "posters": {
            "thumbnail": "http://content6.flixster.com/movie/11/16/89/11168956_mob.jpg",
            "profile": "http://content6.flixster.com/movie/11/16/89/11168956_pro.jpg",
            "detailed": "http://content6.flixster.com/movie/11/16/89/11168956_det.jpg",
            "original": "http://content6.flixster.com/movie/11/16/89/11168956_ori.jpg"
        },
        "abridged_cast": [{
            "name": "Adam Sandler",
            "id": "162652550",
            "characters": [
                "Paul \"Wrecking\" Crewe"
            ]
        }, {
            "name": "Chris Rock",
            "id": "162652551",
            "characters": [
                "Caretaker"
            ]
        }, {
            "name": "Burt Reynolds",
            "id": "162652552",
            "characters": [
                "Nate Scarborough"
            ]
        }, {
            "name": "Nelly",
            "id": "590603264",
            "characters": [
                "Meggert"
            ]
        }, {
            "name": "James Cromwell",
            "id": "162652553",
            "characters": [
                "Warden Hazen"
            ]
        }],
        "alternate_ids": {
            "imdb": "0398165"
        },
        "links": {
            "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/669.json",
            "alternate": "http://www.rottentomatoes.com/m/longest_yard/",
            "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/669/cast.json",
            "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/669/clips.json",
            "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/669/reviews.json",
            "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/669/similar.json"
        }
    }, {
        "id": "24214",
        "title": "The Chronicles of Narnia: The Lion, The Witch and The Wardrobe",
        "year": 2005,
        "mpaa_rating": "PG",
        "runtime": 139,
        "critics_consensus": "With first-rate special effects and compelling storytelling, this adaptation stays faithful to its source material and will please moviegoers of all ages.",
        "release_dates": {
            "theater": "2005-12-09",
            "dvd": "2006-04-04"
        },
        "ratings": {
            "critics_rating": "Certified Fresh",
            "critics_score": 76,
            "audience_rating": "Upright",
            "audience_score": 61
        },
        "synopsis": "",
        "posters": {
            "thumbnail": "http://content8.flixster.com/movie/10/91/87/10918786_mob.jpg",
            "profile": "http://content8.flixster.com/movie/10/91/87/10918786_pro.jpg",
            "detailed": "http://content8.flixster.com/movie/10/91/87/10918786_det.jpg",
            "original": "http://content8.flixster.com/movie/10/91/87/10918786_ori.jpg"
        },
        "abridged_cast": [{
            "name": "Georgie Henley",
            "id": "284340695",
            "characters": [
                "Lucy Pevensie"
            ]
        }, {
            "name": "Skandar Keynes",
            "id": "326299532",
            "characters": [
                "Edmund Pevensie"
            ]
        }, {
            "name": "William Moseley",
            "id": "376791694",
            "characters": [
                "Peter Pevensie"
            ]
        }, {
            "name": "Anna Popplewell",
            "id": "284340694",
            "characters": [
                "Susan Pevensie"
            ]
        }, {
            "name": "Tilda Swinton",
            "id": "162654047",
            "characters": [
                "Jadis the White Witch"
            ]
        }],
        "alternate_ids": {
            "imdb": "0363771"
        },
        "links": {
            "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/24214.json",
            "alternate": "http://www.rottentomatoes.com/m/chronicles_of_narnia_lion_witch_wardrobe/",
            "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/24214/cast.json",
            "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/24214/clips.json",
            "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/24214/reviews.json",
            "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/24214/similar.json"
        }
    }, {
        "id": "10154",
        "title": "The Day After Tomorrow",
        "year": 2004,
        "mpaa_rating": "PG-13",
        "runtime": 124,
        "critics_consensus": "A ludicrous popcorn flick filled with clunky dialogues, but spectacular visuals save it from being a total disaster.",
        "release_dates": {
            "theater": "2004-05-28",
            "dvd": "2004-10-12"
        },
        "ratings": {
            "critics_rating": "Rotten",
            "critics_score": 45,
            "audience_rating": "Spilled",
            "audience_score": 50
        },
        "synopsis": "",
        "posters": {
            "thumbnail": "http://content7.flixster.com/movie/25/43/254313_mob.jpg",
            "profile": "http://content7.flixster.com/movie/25/43/254313_pro.jpg",
            "detailed": "http://content7.flixster.com/movie/25/43/254313_det.jpg",
            "original": "http://content7.flixster.com/movie/25/43/254313_ori.jpg"
        },
        "abridged_cast": [{
            "name": "Dennis Quaid",
            "id": "162655527",
            "characters": [
                "Jack Hall"
            ]
        }, {
            "name": "Jake Gyllenhaal",
            "id": "162653968",
            "characters": [
                "Sam Hall"
            ]
        }, {
            "name": "Ian Holm",
            "id": "162653927",
            "characters": [
                "Terry Rapson"
            ]
        }, {
            "name": "Emmy Rossum",
            "id": "162659103",
            "characters": [
                "Laura Chapman"
            ]
        }, {
            "name": "Sela Ward",
            "id": "162694942",
            "characters": [
                "Lucy Hall"
            ]
        }],
        "alternate_ids": {
            "imdb": "0319262"
        },
        "links": {
            "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/10154.json",
            "alternate": "http://www.rottentomatoes.com/m/day_after_tomorrow/",
            "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/10154/cast.json",
            "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/10154/clips.json",
            "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/10154/reviews.json",
            "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/10154/similar.json"
        }
    }, {
        "id": "10398",
        "title": "Save the Last Dance",
        "year": 2001,
        "mpaa_rating": "PG-13",
        "runtime": 112,
        "critics_consensus": "This teen romance flick feels like a predictable rehashing of other movies.",
        "release_dates": {
            "theater": "2001-01-12",
            "dvd": "2001-06-19"
        },
        "ratings": {
            "critics_rating": "Rotten",
            "critics_score": 53,
            "audience_rating": "Spilled",
            "audience_score": 59
        },
        "synopsis": "",
        "posters": {
            "thumbnail": "http://content6.flixster.com/movie/16/90/48/1690480_mob.jpg",
            "profile": "http://content6.flixster.com/movie/16/90/48/1690480_pro.jpg",
            "detailed": "http://content6.flixster.com/movie/16/90/48/1690480_det.jpg",
            "original": "http://content6.flixster.com/movie/16/90/48/1690480_ori.jpg"
        },
        "abridged_cast": [{
            "name": "Julia Stiles",
            "id": "162660056",
            "characters": [
                "Sara Johnson"
            ]
        }, {
            "name": "Sean Patrick Thomas",
            "id": "162662807",
            "characters": [
                "Derek"
            ]
        }, {
            "name": "Kerry Washington",
            "id": "162682773",
            "characters": [
                "Chenille"
            ]
        }, {
            "name": "Fredro Starr",
            "id": "371353026",
            "characters": [
                "Malakai"
            ]
        }, {
            "name": "Terry Kinney",
            "id": "326391349",
            "characters": [
                "Roy"
            ]
        }],
        "links": {
            "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/10398.json",
            "alternate": "http://www.rottentomatoes.com/m/save_the_last_dance/",
            "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/10398/cast.json",
            "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/10398/clips.json",
            "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/10398/reviews.json",
            "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/10398/similar.json"
        }
    }, {
        "id": "9272",
        "title": "Harry Potter and the Goblet of Fire",
        "year": 2005,
        "mpaa_rating": "PG-13",
        "runtime": 157,
        "critics_consensus": "The main characters are maturing, and the filmmakers are likewise improving on their craft; vibrant special effects and assured performances add up to what is the most complex yet of the Harry Potter films.",
        "release_dates": {
            "theater": "2005-11-18",
            "dvd": "2006-03-07"
        },
        "ratings": {
            "critics_rating": "Certified Fresh",
            "critics_score": 88,
            "audience_rating": "Upright",
            "audience_score": 73
        },
        "synopsis": "",
        "posters": {
            "thumbnail": "http://content7.flixster.com/movie/11/16/88/11168873_mob.jpg",
            "profile": "http://content7.flixster.com/movie/11/16/88/11168873_pro.jpg",
            "detailed": "http://content7.flixster.com/movie/11/16/88/11168873_det.jpg",
            "original": "http://content7.flixster.com/movie/11/16/88/11168873_ori.jpg"
        },
        "abridged_cast": [{
            "name": "Daniel Radcliffe",
            "id": "162655375",
            "characters": [
                "Harry Potter"
            ]
        }, {
            "name": "Rupert Grint",
            "id": "162655376",
            "characters": [
                "Ron Weasley"
            ]
        }, {
            "name": "Emma Watson",
            "id": "162655378",
            "characters": [
                "Hermione Granger"
            ]
        }, {
            "name": "Robbie Coltrane",
            "id": "162655379",
            "characters": [
                "Rubeus Hagrid"
            ]
        }, {
            "name": "Ralph Fiennes",
            "id": "162653681",
            "characters": [
                "Lord Voldemort"
            ]
        }],
        "alternate_ids": {
            "imdb": "0330373"
        },
        "links": {
            "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/9272.json",
            "alternate": "http://www.rottentomatoes.com/m/harry_potter_and_the_goblet_of_fire/",
            "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/9272/cast.json",
            "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/9272/clips.json",
            "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/9272/reviews.json",
            "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/9272/similar.json"
        }
    }, {
        "id": "17462",
        "title": "There's Something About Mary",
        "year": 1998,
        "mpaa_rating": "R",
        "runtime": 118,
        "critics_consensus": "There's Something About Mary proves that unrelentingly, unabashedly peurile humor doesn't necessarily come at the expense of a film's heart.",
        "release_dates": {
            "theater": "1998-07-15",
            "dvd": "1999-08-03"
        },
        "ratings": {
            "critics_rating": "Certified Fresh",
            "critics_score": 83,
            "audience_rating": "Upright",
            "audience_score": 60
        },
        "synopsis": "",
        "posters": {
            "thumbnail": "http://content8.flixster.com/movie/11/16/47/11164726_mob.jpg",
            "profile": "http://content8.flixster.com/movie/11/16/47/11164726_pro.jpg",
            "detailed": "http://content8.flixster.com/movie/11/16/47/11164726_det.jpg",
            "original": "http://content8.flixster.com/movie/11/16/47/11164726_ori.jpg"
        },
        "abridged_cast": [{
            "name": "Ben Stiller",
            "id": "162659371",
            "characters": [
                "Ted Stroehmann"
            ]
        }, {
            "name": "Cameron Diaz",
            "id": "162654443",
            "characters": [
                "Mary Jenson"
            ]
        }, {
            "name": "Matt Dillon",
            "id": "162652207",
            "characters": [
                "Pat Healy"
            ]
        }, {
            "name": "Lee Evans",
            "id": "162675465",
            "characters": [
                "Tucker"
            ]
        }, {
            "name": "Chris Elliott",
            "id": "162672928",
            "characters": [
                "Dom"
            ]
        }],
        "links": {
            "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/17462.json",
            "alternate": "http://www.rottentomatoes.com/m/theres_something_about_mary/",
            "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/17462/cast.json",
            "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/17462/clips.json",
            "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/17462/reviews.json",
            "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/17462/similar.json"
        }
    }, {
        "id": "10020",
        "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
        "year": 2003,
        "mpaa_rating": "PG-13",
        "runtime": 143,
        "critics_consensus": "May leave you exhausted like the theme park ride that inspired it; however, you'll have a good time when it's over.",
        "release_dates": {
            "theater": "2003-06-28",
            "dvd": "2003-12-02"
        },
        "ratings": {
            "critics_rating": "Certified Fresh",
            "critics_score": 79,
            "audience_rating": "Upright",
            "audience_score": 86
        },
        "synopsis": "",
        "posters": {
            "thumbnail": "http://content9.flixster.com/movie/11/15/76/11157635_mob.jpg",
            "profile": "http://content9.flixster.com/movie/11/15/76/11157635_pro.jpg",
            "detailed": "http://content9.flixster.com/movie/11/15/76/11157635_det.jpg",
            "original": "http://content9.flixster.com/movie/11/15/76/11157635_ori.jpg"
        },
        "abridged_cast": [{
            "name": "Johnny Depp",
            "id": "162652817",
            "characters": [
                "Jack Sparrow"
            ]
        }, {
            "name": "Geoffrey Rush",
            "id": "162659119",
            "characters": [
                "Captain Barbossa"
            ]
        }, {
            "name": "Orlando Bloom",
            "id": "162652240",
            "characters": [
                "Will Turner"
            ]
        }, {
            "name": "Keira Knightley",
            "id": "162654560",
            "characters": [
                "Elizabeth Swann"
            ]
        }, {
            "name": "Jack Davenport",
            "id": "162659479",
            "characters": [
                "Norrington"
            ]
        }],
        "alternate_ids": {
            "imdb": "0325980"
        },
        "links": {
            "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/10020.json",
            "alternate": "http://www.rottentomatoes.com/m/pirates_of_the_caribbean_the_curse_of_the_black_pearl/",
            "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/10020/cast.json",
            "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/10020/clips.json",
            "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/10020/reviews.json",
            "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/10020/similar.json"
        }
    }, {
        "id": "10041",
        "title": "Meet The Fockers",
        "year": 2004,
        "mpaa_rating": "PG-13",
        "runtime": 118,
        "critics_consensus": "Talented cast is wasted as the movie is content with recycling jokes from its predecessor, Meet the Parents.",
        "release_dates": {
            "theater": "2004-12-22",
            "dvd": "2005-04-26"
        },
        "ratings": {
            "critics_rating": "Rotten",
            "critics_score": 38,
            "audience_rating": "Spilled",
            "audience_score": 58
        },
        "synopsis": "",
        "posters": {
            "thumbnail": "http://content6.flixster.com/movie/10/86/10/10861012_mob.jpg",
            "profile": "http://content6.flixster.com/movie/10/86/10/10861012_pro.jpg",
            "detailed": "http://content6.flixster.com/movie/10/86/10/10861012_det.jpg",
            "original": "http://content6.flixster.com/movie/10/86/10/10861012_ori.jpg"
        },
        "abridged_cast": [{
            "name": "Robert De Niro",
            "id": "162655521",
            "characters": [
                "Jack Byrnes"
            ]
        }, {
            "name": "Ben Stiller",
            "id": "162659371",
            "characters": [
                "Greg Focker"
            ]
        }, {
            "name": "Dustin Hoffman",
            "id": "162659372",
            "characters": [
                "Bernie Focker"
            ]
        }, {
            "name": "Barbra Streisand",
            "id": "162655994",
            "characters": [
                "Roz Focker"
            ]
        }, {
            "name": "Blythe Danner",
            "id": "162659375",
            "characters": [
                "Dina Byrnes"
            ]
        }],
        "alternate_ids": {
            "imdb": "0290002"
        },
        "links": {
            "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/10041.json",
            "alternate": "http://www.rottentomatoes.com/m/meet_the_fockers/",
            "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/10041/cast.json",
            "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/10041/clips.json",
            "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/10041/reviews.json",
            "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/10041/similar.json"
        }
    }, {
        "id": "1965",
        "title": "Charlie and the Chocolate Factory",
        "year": 2005,
        "mpaa_rating": "PG",
        "runtime": 130,
        "critics_consensus": "Closer to the source material than 1971's Willy Wonka & the Chocolate Factory, Charlie and the Chocolate Factory is for people who like their Chocolate visually appealing and dark.",
        "release_dates": {
            "theater": "2005-07-15",
            "dvd": "2005-11-07"
        },
        "ratings": {
            "critics_rating": "Certified Fresh",
            "critics_score": 82,
            "audience_rating": "Spilled",
            "audience_score": 51
        },
        "synopsis": "",
        "posters": {
            "thumbnail": "http://content7.flixster.com/movie/24/98/249821_mob.jpg",
            "profile": "http://content7.flixster.com/movie/24/98/249821_pro.jpg",
            "detailed": "http://content7.flixster.com/movie/24/98/249821_det.jpg",
            "original": "http://content7.flixster.com/movie/24/98/249821_ori.jpg"
        },
        "abridged_cast": [{
            "name": "Johnny Depp",
            "id": "162652817",
            "characters": [
                "Willy Wonka"
            ]
        }, {
            "name": "Freddie Highmore",
            "id": "162652818",
            "characters": [
                "Charlie Bucket"
            ]
        }, {
            "name": "David Kelly",
            "id": "162652819",
            "characters": [
                "Grandpa Joe"
            ]
        }, {
            "name": "Helena Bonham Carter",
            "id": "162652820",
            "characters": [
                "Mrs. Bucket"
            ]
        }, {
            "name": "Noah Taylor",
            "id": "162708662",
            "characters": [
                "Mr. Bucket"
            ]
        }],
        "alternate_ids": {
            "imdb": "0367594"
        },
        "links": {
            "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/1965.json",
            "alternate": "http://www.rottentomatoes.com/m/charlie_and_the_chocolate_factory/",
            "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/1965/cast.json",
            "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/1965/clips.json",
            "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/1965/reviews.json",
            "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/1965/similar.json"
        }
    }, {
        "id": "10437",
        "title": "The Ring",
        "year": 2002,
        "mpaa_rating": "PG-13",
        "runtime": 115,
        "critics_consensus": "With little gore and a lot of creepy visuals, The Ring gets under your skin, thanks to director Gore Verbinski's haunting sense of atmosphere and an impassioned performance from Naomi Watts.",
        "release_dates": {
            "theater": "2002-10-18",
            "dvd": "2003-03-04"
        },
        "ratings": {
            "critics_rating": "Fresh",
            "critics_score": 71,
            "audience_rating": "Spilled",
            "audience_score": 48
        },
        "synopsis": "",
        "posters": {
            "thumbnail": "http://content8.flixster.com/movie/10/86/94/10869458_mob.jpg",
            "profile": "http://content8.flixster.com/movie/10/86/94/10869458_pro.jpg",
            "detailed": "http://content8.flixster.com/movie/10/86/94/10869458_det.jpg",
            "original": "http://content8.flixster.com/movie/10/86/94/10869458_ori.jpg"
        },
        "abridged_cast": [{
            "name": "Naomi Watts",
            "id": "162654749",
            "characters": [
                "Rachel Keller"
            ]
        }, {
            "name": "Martin Henderson",
            "id": "162659577",
            "characters": [
                "Noah"
            ]
        }, {
            "name": "David Dorfman",
            "id": "162660316",
            "characters": [
                "Aidan"
            ]
        }, {
            "name": "Brian Cox",
            "id": "162653324",
            "characters": [
                "Richard Morgan"
            ]
        }, {
            "name": "Jane Alexander",
            "id": "162668123",
            "characters": [
                "Dr. Grasnik"
            ]
        }],
        "alternate_ids": {
            "imdb": "0298130"
        },
        "links": {
            "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/10437.json",
            "alternate": "http://www.rottentomatoes.com/m/ring/",
            "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/10437/cast.json",
            "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/10437/clips.json",
            "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/10437/reviews.json",
            "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/10437/similar.json"
        }
    }, {
        "id": "10011",
        "title": "The Incredibles",
        "year": 2004,
        "mpaa_rating": "PG",
        "runtime": 115,
        "critics_consensus": "Even though The Incredibles is more violent than previous Pixar offerings, it still a witty and fun-filled adventure that almost lives up to its name.",
        "release_dates": {
            "theater": "2004-11-05",
            "dvd": "2005-03-15"
        },
        "ratings": {
            "critics_rating": "Certified Fresh",
            "critics_score": 97,
            "audience_rating": "Upright",
            "audience_score": 74
        },
        "synopsis": "",
        "posters": {
            "thumbnail": "http://content9.flixster.com/movie/10/93/90/10939047_mob.jpg",
            "profile": "http://content9.flixster.com/movie/10/93/90/10939047_pro.jpg",
            "detailed": "http://content9.flixster.com/movie/10/93/90/10939047_det.jpg",
            "original": "http://content9.flixster.com/movie/10/93/90/10939047_ori.jpg"
        },
        "abridged_cast": [{
            "name": "Craig T. Nelson",
            "id": "162659067",
            "characters": [
                "Bob Parr / Mr. Incredible"
            ]
        }, {
            "name": "Holly Hunter",
            "id": "162659069",
            "characters": [
                "Helen Parr / Elastigirl"
            ]
        }, {
            "name": "Samuel L. Jackson",
            "id": "162652156",
            "characters": [
                "Lucius Best / Frozone"
            ]
        }, {
            "name": "Jason Lee",
            "id": "162659070",
            "characters": [
                "Syndrome"
            ]
        }, {
            "name": "Wallace Shawn",
            "id": "162671862",
            "characters": [
                "Gilbert Huph"
            ]
        }],
        "links": {
            "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/10011.json",
            "alternate": "http://www.rottentomatoes.com/m/incredibles/",
            "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/10011/cast.json",
            "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/10011/clips.json",
            "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/10011/reviews.json",
            "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/10011/similar.json"
        }
    }, {
        "id": "9",
        "title": "Star Wars: Episode III - Revenge of the Sith 3D",
        "year": 2005,
        "mpaa_rating": "PG-13",
        "runtime": 140,
        "critics_consensus": "This sixth and final installment of George Lucas' epic space opera will please die-hard fanatics and non-believers alike -- largely due to awesome digital effects and the sheer power of the mythology.",
        "release_dates": {
            "theater": "2005-05-19",
            "dvd": "2005-11-01"
        },
        "ratings": {
            "critics_rating": "Certified Fresh",
            "critics_score": 80,
            "audience_rating": "Upright",
            "audience_score": 65
        },
        "synopsis": "",
        "posters": {
            "thumbnail": "http://content8.flixster.com/movie/10/94/47/10944718_mob.jpg",
            "profile": "http://content8.flixster.com/movie/10/94/47/10944718_pro.jpg",
            "detailed": "http://content8.flixster.com/movie/10/94/47/10944718_det.jpg",
            "original": "http://content8.flixster.com/movie/10/94/47/10944718_ori.jpg"
        },
        "abridged_cast": [{
            "name": "Hayden Christensen",
            "id": "162652153",
            "characters": [
                "Anakin Skywalker/Darth Vader"
            ]
        }, {
            "name": "Ewan McGregor",
            "id": "162652152",
            "characters": [
                "Obi-Wan Kenobi"
            ]
        }, {
            "name": "Kenny Baker",
            "id": "418638213",
            "characters": [
                "R2-D2"
            ]
        }, {
            "name": "Graeme Blundell",
            "id": "548155708",
            "characters": [
                "Ruwee Naberrie"
            ]
        }, {
            "name": "Jeremy Bulloch",
            "id": "358317901",
            "characters": [
                "Captain Colton"
            ]
        }],
        "alternate_ids": {
            "imdb": "0121766"
        },
        "links": {
            "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/9.json",
            "alternate": "http://www.rottentomatoes.com/m/star_wars_episode_iii_revenge_of_the_sith_3d/",
            "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/9/cast.json",
            "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/9/clips.json",
            "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/9/reviews.json",
            "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/9/similar.json"
        }
    }, {
        "id": "10156",
        "title": "The Lord of the Rings: The Return of the King",
        "year": 2003,
        "mpaa_rating": "PG-13",
        "runtime": 201,
        "critics_consensus": "Visually breathtaking and emotionally powerful,  The Lord of the Rings - The Return of the King is a moving and satisfying conclusion to a great trilogy.",
        "release_dates": {
            "theater": "2003-12-17",
            "dvd": "2004-05-25"
        },
        "ratings": {
            "critics_rating": "Certified Fresh",
            "critics_score": 94,
            "audience_rating": "Upright",
            "audience_score": 86
        },
        "synopsis": "",
        "posters": {
            "thumbnail": "http://content9.flixster.com/movie/11/16/64/11166423_mob.jpg",
            "profile": "http://content9.flixster.com/movie/11/16/64/11166423_pro.jpg",
            "detailed": "http://content9.flixster.com/movie/11/16/64/11166423_det.jpg",
            "original": "http://content9.flixster.com/movie/11/16/64/11166423_ori.jpg"
        },
        "abridged_cast": [{
            "name": "Elijah Wood",
            "id": "162652512",
            "characters": [
                "Frodo Baggins"
            ]
        }, {
            "name": "Ian McKellen",
            "id": "162653241",
            "characters": [
                "Gandalf"
            ]
        }, {
            "name": "Viggo Mortensen",
            "id": "162654541",
            "characters": [
                "Aragorn"
            ]
        }, {
            "name": "Sean Astin",
            "id": "162659177",
            "characters": [
                "Samwise Gamgee"
            ]
        }, {
            "name": "Orlando Bloom",
            "id": "162652240",
            "characters": [
                "Legolas"
            ]
        }],
        "alternate_ids": {
            "imdb": "0167260"
        },
        "links": {
            "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/10156.json",
            "alternate": "http://www.rottentomatoes.com/m/the_lord_of_the_rings_the_return_of_the_king/",
            "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/10156/cast.json",
            "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/10156/clips.json",
            "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/10156/reviews.json",
            "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/10156/similar.json"
        }
    }, {
        "id": "12897",
        "title": "The Matrix",
        "year": 1999,
        "mpaa_rating": "R",
        "runtime": 136,
        "critics_consensus": "An ingenious combination of Hong Kong action, ground-breaking Hollywood FX, and an imaginative vision.",
        "release_dates": {
            "theater": "1999-03-31",
            "dvd": "1999-09-21"
        },
        "ratings": {
            "critics_rating": "Certified Fresh",
            "critics_score": 87,
            "audience_rating": "Upright",
            "audience_score": 85
        },
        "synopsis": "",
        "posters": {
            "thumbnail": "http://content6.flixster.com/movie/11/16/80/11168096_mob.jpg",
            "profile": "http://content6.flixster.com/movie/11/16/80/11168096_pro.jpg",
            "detailed": "http://content6.flixster.com/movie/11/16/80/11168096_det.jpg",
            "original": "http://content6.flixster.com/movie/11/16/80/11168096_ori.jpg"
        },
        "abridged_cast": [{
            "name": "Keanu Reeves",
            "id": "162654049",
            "characters": [
                "Neo"
            ]
        }, {
            "name": "Laurence Fishburne",
            "id": "162669090",
            "characters": [
                "Morpheus"
            ]
        }, {
            "name": "Carrie-Anne Moss",
            "id": "162669130",
            "characters": [
                "Trinity"
            ]
        }, {
            "name": "Hugo Weaving",
            "id": "162709905",
            "characters": [
                "Agent Smith"
            ]
        }, {
            "name": "Gloria Foster",
            "id": "364627698",
            "characters": [
                "The Oracle"
            ]
        }],
        "alternate_ids": {
            "imdb": "0133093"
        },
        "links": {
            "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/12897.json",
            "alternate": "http://www.rottentomatoes.com/m/matrix/",
            "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/12897/cast.json",
            "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/12897/clips.json",
            "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/12897/reviews.json",
            "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/12897/similar.json"
        }
    }, {
        "id": "10489",
        "title": "E.T. The Extra-Terrestrial",
        "year": 1982,
        "mpaa_rating": "PG",
        "runtime": 114,
        "critics_consensus": "Playing as both an exciting sci-fi adventure and a remarkable portrait of childhood, Steven Spielberg's touching tale of a homesick alien remains a piece of movie magic for young and old.",
        "release_dates": {
            "theater": "1982-06-11",
            "dvd": "2002-10-22"
        },
        "ratings": {
            "critics_rating": "Certified Fresh",
            "critics_score": 98,
            "audience_rating": "Upright",
            "audience_score": 71
        },
        "synopsis": "",
        "posters": {
            "thumbnail": "http://content6.flixster.com/movie/11/16/67/11166788_mob.jpg",
            "profile": "http://content6.flixster.com/movie/11/16/67/11166788_pro.jpg",
            "detailed": "http://content6.flixster.com/movie/11/16/67/11166788_det.jpg",
            "original": "http://content6.flixster.com/movie/11/16/67/11166788_ori.jpg"
        },
        "abridged_cast": [{
            "name": "Henry Thomas",
            "id": "162661716",
            "characters": [
                "Elliott"
            ]
        }, {
            "name": "Dee Wallace",
            "id": "341816138",
            "characters": [
                "Mary"
            ]
        }, {
            "name": "Peter Coyote",
            "id": "162663977",
            "characters": [
                "Keys"
            ]
        }, {
            "name": "Robert MacNaughton",
            "id": "341816137",
            "characters": [
                "Michael"
            ]
        }, {
            "name": "Drew Barrymore",
            "id": "162652402",
            "characters": [
                "Gertie"
            ]
        }],
        "alternate_ids": {
            "imdb": "0083866"
        },
        "links": {
            "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/10489.json",
            "alternate": "http://www.rottentomatoes.com/m/et_the_extraterrestrial/",
            "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/10489/cast.json",
            "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/10489/clips.json",
            "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/10489/reviews.json",
            "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/10489/similar.json"
        }
    }, {
        "id": "770676429",
        "title": "Transformers: Revenge of the Fallen",
        "year": 2009,
        "mpaa_rating": "PG-13",
        "runtime": 149,
        "critics_consensus": "Transformers: Revenge of the Fallen is a noisy, underplotted, and overlong special effects extravaganza that lacks a human touch.",
        "release_dates": {
            "theater": "2009-06-24",
            "dvd": "2009-10-20"
        },
        "ratings": {
            "critics_rating": "Rotten",
            "critics_score": 20,
            "audience_rating": "Spilled",
            "audience_score": 58
        },
        "synopsis": "",
        "posters": {
            "thumbnail": "http://content6.flixster.com/movie/10/93/29/10932980_mob.jpg",
            "profile": "http://content6.flixster.com/movie/10/93/29/10932980_pro.jpg",
            "detailed": "http://content6.flixster.com/movie/10/93/29/10932980_det.jpg",
            "original": "http://content6.flixster.com/movie/10/93/29/10932980_ori.jpg"
        },
        "abridged_cast": [{
            "name": "Shia LaBeouf",
            "id": "162654215",
            "characters": [
                "Sam Witwicky"
            ]
        }, {
            "name": "Megan Fox",
            "id": "162665778",
            "characters": [
                "Mikaela Banes"
            ]
        }, {
            "name": "Josh Duhamel",
            "id": "162669304",
            "characters": [
                "Major Lennox"
            ]
        }, {
            "name": "Tyrese Gibson",
            "id": "162653183",
            "characters": [
                "USAF Tech Sergeant Epps"
            ]
        }, {
            "name": "Kevin Dunn",
            "id": "162664658",
            "characters": [
                "Ron Witwicky"
            ]
        }],
        "alternate_ids": {
            "imdb": "1055369"
        },
        "links": {
            "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/770676429.json",
            "alternate": "http://www.rottentomatoes.com/m/transformers_revenge_of_the_fallen/",
            "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/770676429/cast.json",
            "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/770676429/clips.json",
            "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/770676429/reviews.json",
            "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/770676429/similar.json"
        }
    }, {
        "id": "358189806",
        "title": "The Bourne Ultimatum",
        "year": 2007,
        "mpaa_rating": "PG-13",
        "runtime": 115,
        "critics_consensus": "The Bourne Ultimatum is an intelligent, finely tuned non-stop thrill ride. Another strong performance from Matt Damon and sharp camerawork from Paul Greengrass make this the finest installment of the Bourne trilogy.",
        "release_dates": {
            "theater": "2007-08-03",
            "dvd": "2007-12-11"
        },
        "ratings": {
            "critics_rating": "Certified Fresh",
            "critics_score": 94,
            "audience_rating": "Upright",
            "audience_score": 91
        },
        "synopsis": "",
        "posters": {
            "thumbnail": "http://content7.flixster.com/movie/11/17/16/11171613_mob.jpg",
            "profile": "http://content7.flixster.com/movie/11/17/16/11171613_pro.jpg",
            "detailed": "http://content7.flixster.com/movie/11/17/16/11171613_det.jpg",
            "original": "http://content7.flixster.com/movie/11/17/16/11171613_ori.jpg"
        },
        "abridged_cast": [{
            "name": "Matt Damon",
            "id": "162653499",
            "characters": [
                "Jason Bourne"
            ]
        }, {
            "name": "Julia Stiles",
            "id": "162660056",
            "characters": [
                "Nicky Parsons"
            ]
        }, {
            "name": "David Strathairn",
            "id": "162654527",
            "characters": [
                "Noah Vosen"
            ]
        }, {
            "name": "Scott Glenn",
            "id": "162670425",
            "characters": [
                "Ezra Kramer"
            ]
        }, {
            "name": "Paddy Considine",
            "id": "162652573",
            "characters": [
                "Simon Ross"
            ]
        }],
        "alternate_ids": {
            "imdb": "0440963"
        },
        "links": {
            "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/358189806.json",
            "alternate": "http://www.rottentomatoes.com/m/bourne_ultimatum/",
            "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/358189806/cast.json",
            "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/358189806/clips.json",
            "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/358189806/reviews.json",
            "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/358189806/similar.json"
        }
    }, {
        "id": "387569635",
        "title": "Harry Potter and the Order of the Phoenix",
        "year": 2007,
        "mpaa_rating": "PG-13",
        "runtime": 138,
        "critics_consensus": "It's not easy to take the longest Harry Potter book and streamline it into the shortest HP movie, but director David Yates does a bang up job of it, creating an Order of the Phoenix that's entertaining and action-packed.",
        "release_dates": {
            "theater": "2007-07-11",
            "dvd": "2007-11-11"
        },
        "ratings": {
            "critics_rating": "Certified Fresh",
            "critics_score": 79,
            "audience_rating": "Upright",
            "audience_score": 81
        },
        "synopsis": "",
        "posters": {
            "thumbnail": "http://content6.flixster.com/movie/11/16/88/11168876_mob.jpg",
            "profile": "http://content6.flixster.com/movie/11/16/88/11168876_pro.jpg",
            "detailed": "http://content6.flixster.com/movie/11/16/88/11168876_det.jpg",
            "original": "http://content6.flixster.com/movie/11/16/88/11168876_ori.jpg"
        },
        "abridged_cast": [{
            "name": "Daniel Radcliffe",
            "id": "162655375",
            "characters": [
                "Harry Potter"
            ]
        }, {
            "name": "Rupert Grint",
            "id": "162655376",
            "characters": [
                "Ron Weasley"
            ]
        }, {
            "name": "Emma Watson",
            "id": "162655378",
            "characters": [
                "Hermione Granger"
            ]
        }, {
            "name": "Michael Gambon",
            "id": "162676818",
            "characters": [
                "Albus Dumbledore"
            ]
        }, {
            "name": "Ralph Fiennes",
            "id": "162653681",
            "characters": [
                "Lord Voldemort"
            ]
        }],
        "alternate_ids": {
            "imdb": "0373889"
        },
        "links": {
            "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/387569635.json",
            "alternate": "http://www.rottentomatoes.com/m/harry_potter_and_the_order_of_the_phoenix/",
            "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/387569635/cast.json",
            "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/387569635/clips.json",
            "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/387569635/reviews.json",
            "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/387569635/similar.json"
        }
    }];

    return {
        all: function() {
            return movies;
        },
        get: function(petId) {
            // Simple index lookup
            return pets[petId];
        }
    }
});
