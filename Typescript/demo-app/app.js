var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["Read_ONLY"] = 1] = "Read_ONLY";
    Roles[Roles["AUTHOR"] = 2] = "AUTHOR";
})(Roles || (Roles = {}));
var person = {
    'name': 'lok',
    'age': 32,
    'hobbys': ['sports', 'cooking'],
    role: [2, 'admin'],
    roles: Roles.ADMIN
};
if (person.roles == Roles.ADMIN) {
    console.log('aya', Roles.ADMIN, person.roles);
}
