let result = db.people.insertOne({
    "sex" : "Male",
    "first_name" : "Michal",
    "last_name" : "Walicki",
    "job" : "e-Commerce Specialist",
    "email" : "s16585@pjwstk.edu.pl",
    "location" : {
            "city" : "Gdansk",
            "address" : {
                    "streetname" : "Solecka",
                    "streetnumber" : "012345"
            }
    },
    "description" : "ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar",
    "height" : "200",
    "weight" : "62",
    "birth_date" : "1996-05-12T16:15:58Z",
    "nationality" : "Poland",
    "credit" : [
            {
                    "type" : "jcb",
                    "number" : "4017957170327",
                    "currency" : "RUB",
                    "balance" : "4463.86"
            }
    ]
})
