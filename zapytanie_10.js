db.people.find({job: "Editor"}, {job: 1, email: 1})
let result = db.people.updateMany({job: "Editor"}, {$unset: {email: ""}})
